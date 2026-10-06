import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, LogOut, RefreshCw, Search } from "lucide-react";
import { supabase } from "./lib/supabase";

const ADMIN_EMAIL = "RAINBOWKIDSHOMENURSERY@GMAIL.COM";

type Enquiry = {
  id: string;
  parent_name: string;
  child_name: string | null;
  contact: string;
  message: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [query, setQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setChecking(false);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) return;
      setSession(nextSession);
      setChecking(false);
      setLoading(false);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session?.user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      loadEnquiries();
    }
  }, [session]);

  async function loadEnquiries() {
    setRefreshing(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from("enquiries")
      .select("id,parent_name,child_name,contact,message,created_at")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      setEnquiries([]);
    } else {
      setEnquiries((data ?? []) as Enquiry[]);
    }

    setRefreshing(false);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (loginError) {
      setError(loginError.message);
      return;
    }

    if (data.user?.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      await supabase.auth.signOut();
      setError("This account is not authorized for the admin dashboard.");
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setPassword("");
    setEnquiries([]);
  }

  const filteredEnquiries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return enquiries;

    return enquiries.filter((item) =>
      [item.parent_name, item.child_name, item.contact, item.message]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(needle))
    );
  }, [enquiries, query]);

  if (checking || loading) {
    return <div className="admin-shell admin-loading">Checking secure access…</div>;
  }

  if (!session) {
    return (
      <div className="admin-shell">
        <div className="admin-login-card">
          <a className="admin-back-link" href="/"><ArrowLeft size={15} /> Back to website</a>
          <div className="admin-kicker">RAINBOW KIDS HOME NURSERY</div>
          <h1>Admin <em>dashboard.</em></h1>
          <p className="admin-login-lede">Sign in to securely view parent enquiries submitted through the website.</p>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
            {error && <p className="admin-error">{error}</p>}
            <button className="admin-primary" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    );
  }

  if (session.user?.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    return <div className="admin-shell admin-loading">This account is not authorized.</div>;
  }

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div>
          <div className="admin-kicker">RAINBOW KIDS HOME NURSERY</div>
          <h1>Enquiries <span>{enquiries.length}</span></h1>
        </div>
        <div className="admin-header-actions">
          <span className="admin-email">{session.user.email}</span>
          <button className="admin-icon-button" onClick={loadEnquiries} disabled={refreshing} title="Refresh">
            <RefreshCw size={17} className={refreshing ? "spin" : ""} />
          </button>
          <button className="admin-logout" onClick={handleLogout}><LogOut size={15} /> Logout</button>
        </div>
      </header>

      <main className="admin-content">
        <div className="admin-title-row">
          <div>
            <h2>Parent enquiries</h2>
            <p>Latest enquiries appear first.</p>
          </div>
          <a className="admin-back-link" href="/"><ArrowLeft size={15} /> Website</a>
        </div>

        <div className="admin-toolbar">
          <div className="admin-search">
            <Search size={17} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search parent, child, contact or message…" />
          </div>
          <div className="admin-count">{filteredEnquiries.length} shown</div>
        </div>

        {error && <p className="admin-error admin-dashboard-error">{error}</p>}

        {filteredEnquiries.length === 0 ? (
          <div className="admin-empty">
            <h3>{query ? "No matching enquiries" : "No enquiries yet"}</h3>
            <p>{query ? "Try a different search." : "New website enquiries will appear here automatically."}</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>Parent</th><th>Child</th><th>Contact</th><th>Message</th><th>Date</th></tr></thead>
              <tbody>
                {filteredEnquiries.map((item) => (
                  <tr key={item.id}>
                    <td data-label="Parent"><strong>{item.parent_name}</strong></td>
                    <td data-label="Child">{item.child_name || "—"}</td>
                    <td data-label="Contact">{item.contact}</td>
                    <td data-label="Message"><span className="admin-message">{item.message || "—"}</span></td>
                    <td data-label="Date"><span className="admin-date">{new Date(item.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
