import { FormEvent, useState } from "react";
import AdminPage from "./AdminPage";
import { supabase } from "./lib/supabase";
import {
  ArrowDownRight, ArrowRight, Baby, BookOpen, Check, ChevronDown, Heart,
  Instagram, Leaf, Mail, MapPin, Menu, MessageCircle, Palette, Phone, Play,
  Star, Sun, Users, X,
} from "lucide-react";

const navItems = [
  { label: "Our approach", id: "approach" },
  { label: "The day", id: "day" },
  { label: "Our space", id: "space" },
  { label: "Contact", id: "contact" },
];

const programs = [
  { icon: Baby, number: "01", title: "Playgroup", age: "Little beginnings", text: "A gentle first step into a world of friends, stories, songs and curious little discoveries.", color: "lilac" },
  { icon: Palette, number: "02", title: "Nursery & Kindergarten", age: "Growing together", text: "Hands-on experiences that help children build confidence, communication and a love of learning.", color: "peach" },
  { icon: BookOpen, number: "03", title: "Classes 1–5", age: "Ready for what’s next", text: "A joyful primary learning journey that grows with children from their early years through Class 5.", color: "butter" },
];

const faqs = [
  { question: "How can I visit Rainbow Kids Home Nursery?", answer: "We would love to meet your family. Send an enquiry with your preferred time and our team will share the next available visit slot." },
  { question: "What classes are available?", answer: "Rainbow Kids Home Nursery welcomes children from Playgroup through Class 5." },
  { question: "Is school transport available?", answer: "Yes. Transport facility is available for students. Please contact us for route and transport details." },
  { question: "Where is the nursery located?", answer: "Rainbow Kids Home Nursery is located in Azad Colony, Bali, Pali, Rajasthan – 306701. Use the Google Maps link in the contact section for directions." },
];

function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/admin") return <AdminPage />;
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { error } = await supabase.from("enquiries").insert({
      parent_name: formData.get("name") as string,
      child_name: formData.get("child") as string,
      contact: formData.get("contact") as string,
      message: formData.get("message") as string,
    });
    if (error) {
      console.error("Enquiry submission failed:", error);
      alert("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="site-shell">
      <div className="top-rainbow" aria-hidden="true" />
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Rainbow Kids Home Nursery home">
          <span className="brand-sun"><Sun size={20} fill="currentColor" strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>RAINBOW</strong><small>KIDS HOME NURSERY</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}
        </nav>
        <button className="header-cta" onClick={() => setInquiryOpen(true)}>Enquire now <ArrowRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}
          <button className="mobile-nav-cta" onClick={() => { setInquiryOpen(true); setMenuOpen(false); }}>Enquire now <ArrowRight size={16} /></button>
        </nav>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> PLAYGROUP TO CLASS 5</div>
            <h1>A happy place to <em>begin.</em></h1>
            <p className="hero-lede">Rainbow Kids Home Nursery is a warm, joyful school in Bali, Rajasthan where children are encouraged to learn, play and grow from Playgroup through Class 5.</p>
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => setInquiryOpen(true)}>Plan a visit <ArrowRight size={17} /></button>
              <button className="play-link" onClick={() => scrollTo("approach")}><span><Play size={12} fill="currentColor" /></span> Discover our approach</button>
            </div>
            <div className="hero-note"><span className="note-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></span><span>Learning, play and growing together</span></div>
          </div>

          <div className="hero-art" aria-label="Rainbow Kids Home Nursery">
            <div className="hero-sun-shape" />
            <div className="rainbow-arc rainbow-arc-one" /><div className="rainbow-arc rainbow-arc-two" /><div className="rainbow-arc rainbow-arc-three" />
            <div className="hero-photo photo-main" /><div className="hero-photo photo-small" />
            <div className="hero-sticker sticker-flower"><span>✦</span></div><div className="hero-sticker sticker-love"><Heart size={17} fill="currentColor" /></div>
            <div className="hero-caption"><span className="caption-icon"><MapPin size={14} /></span><span><strong>Bali, Rajasthan</strong><small>Azad Colony · Pali, Rajasthan</small></span></div>
          </div>
          <div className="hero-cloud cloud-left" aria-hidden="true" /><div className="hero-cloud cloud-right" aria-hidden="true" />
        </section>

        <section className="intro-strip" id="approach">
          <div className="section-kicker">A LITTLE ABOUT US</div>
          <div className="intro-statement">We believe childhood is not a race.<br /><em>It is a beautiful beginning.</em></div>
          <div className="intro-detail"><p>Our days are filled with meaningful play, kind guidance and the freedom to follow a child’s natural curiosity.</p><button className="underlined-link" onClick={() => scrollTo("day")}>See a day at Rainbow <ArrowDownRight size={16} /></button></div>
        </section>

        <section className="values-section page-pad">
          <div className="section-heading centered-heading"><div className="section-kicker">OUR WAY OF GROWING</div><h2>Small moments.<br /><em>Lasting roots.</em></h2><p>Everything we do begins with the child in front of us — their questions, their pace and their wonderful way of seeing the world.</p></div>
          <div className="values-grid">
            <article className="value-card value-card-yellow"><span className="value-icon"><Sun size={22} /></span><h3>Wonder first</h3><p>We make room for questions, imagination and the kind of learning that starts with “why?”</p><span className="value-number">01</span></article>
            <article className="value-card value-card-blue"><span className="value-icon"><Users size={22} /></span><h3>Together, gently</h3><p>Children grow best when they feel seen, heard and surrounded by a caring community.</p><span className="value-number">02</span></article>
            <article className="value-card value-card-coral"><span className="value-icon"><Leaf size={22} /></span><h3>Rooted in joy</h3><p>From messy making to outdoor play, our everyday experiences are designed to feel good and matter.</p><span className="value-number">03</span></article>
          </div>
        </section>

        <section className="programs-section page-pad" id="day">
          <div className="split-heading"><div><div className="section-kicker">OUR CLASSES</div><h2>There is a place<br />for every <em>kind of curious.</em></h2></div><p>Rainbow Kids Home Nursery welcomes children from <strong>Playgroup to Class 5</strong>, with learning and experiences that grow with every stage.</p></div>
          <div className="program-list">
            {programs.map((program) => { const Icon = program.icon; return <article className={`program-card ${program.color}`} key={program.number}><span className="program-number">{program.number}</span><div className="program-icon"><Icon size={25} /></div><div className="program-content"><div className="program-age">{program.age}</div><h3>{program.title}</h3><p>{program.text}</p><button onClick={() => setInquiryOpen(true)}>Ask about this class <ArrowRight size={15} /></button></div></article>; })}
          </div>
          <div className="transport-note"><MessageCircle size={18} /><span><strong>School transport available</strong><small>Contact us for transport routes and details.</small></span></div>
        </section>

        <section className="day-section page-pad" id="space">
          <div className="day-photo-wrap"><div className="day-photo" /><div className="photo-tag tag-top"><span className="tag-dot" /> Open-ended play</div><div className="photo-tag tag-bottom"><Palette size={14} /> Make. Move. Imagine.</div></div>
          <div className="day-copy"><div className="section-kicker">THE RAINBOW RHYTHM</div><h2>A day that feels<br /><em>just right.</em></h2><p className="day-lede">There is comfort in a familiar rhythm — and magic in what happens inside it. Our children move through the day with time to connect, create, explore and rest.</p><div className="rhythm-list"><div><span className="rhythm-time">01</span><span><strong>Arrive & connect</strong><small>Warm welcomes and unhurried settling in</small></span></div><div><span className="rhythm-time">02</span><span><strong>Explore & create</strong><small>Play invitations, stories, art and discovery</small></span></div><div><span className="rhythm-time">03</span><span><strong>Move & wonder</strong><small>Fresh air, active play and big questions</small></span></div></div><button className="underlined-link" onClick={() => setInquiryOpen(true)}>Come see it for yourself <ArrowRight size={16} /></button></div>
        </section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>Give a child a little room,<br />and they will fill it with <em>possibility.</em></blockquote><div className="quote-line" /><p>RAINBOW KIDS HOME NURSERY · BALI, RAJASTHAN</p><div className="quote-doodles" aria-hidden="true"><span>✦</span><span>⌁</span><span>✳</span></div></section>

        <section className="faq-section page-pad">
          <div className="faq-intro"><div className="section-kicker">GOOD TO KNOW</div><h2>Questions are<br /><em>welcome here.</em></h2><p>Choosing a school is a big little decision. We are happy to talk through whatever is on your mind.</p><button className="primary-cta" onClick={() => setInquiryOpen(true)}>Start a conversation <ArrowRight size={16} /></button></div>
          <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? "open" : ""}`} key={faq.question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{faq.question}</span><span className="faq-toggle"><ChevronDown size={17} /></span></button>{activeFaq === index && <p>{faq.answer}</p>}</div>)}</div>
        </section>

        <section className="contact-section page-pad" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="section-kicker light-kicker">COME SAY HELLO</div><h2>Let’s make<br /><em>something lovely.</em></h2>
              <p>Tell us a little about your family and we’ll help you take the next step.</p>
              <div className="contact-details">
                <a href="https://www.google.com/maps/search/?api=1&query=Rainbow+Kids+Home+Nursery%2C+Azad+Colony%2C+Bali%2C+Pali%2C+Rajasthan+306701" target="_blank" rel="noreferrer"><MapPin size={17} /><span><strong>Find us in Bali</strong><small>Azad Colony, Pali, Rajasthan · Google Maps</small></span></a>
                <a href="tel:+919309493314"><Phone size={17} /><span><strong>9309493314</strong><small>Call the school</small></span></a>
                <a href="https://wa.me/919309493314" target="_blank" rel="noreferrer"><MessageCircle size={17} /><span><strong>WhatsApp</strong><small>Chat with us on WhatsApp</small></span></a>
                <a href="mailto:rainbowkidshomenursery@gmail.com"><Mail size={17} /><span><strong>rainbowkidshomenursery@gmail.com</strong><small>Official school email</small></span></a>
              </div>
            </div>
            <div className="contact-art"><div className="contact-circle circle-one" /><div className="contact-circle circle-two" /><div className="contact-flower"><span>✦</span></div><div className="contact-mini-photo" /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-sun"><Sun size={17} fill="currentColor" /></span><span><strong>RAINBOW</strong><small>KIDS HOME NURSERY</small></span></div><div className="footer-note">Playgroup to Class 5 · Bali, Rajasthan</div><div className="footer-links"><button onClick={() => scrollTo("approach")}>Our approach</button><button onClick={() => scrollTo("contact")}>Contact</button><a href="https://wa.me/919309493314" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div></footer>

      {inquiryOpen && <div className="modal-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) { setInquiryOpen(false); setSubmitted(false); } }}><div className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title"><button className="modal-close" onClick={() => { setInquiryOpen(false); setSubmitted(false); }} aria-label="Close enquiry form"><X size={19} /></button>{submitted ? <div className="success-state"><span className="success-icon"><Check size={23} /></span><div className="section-kicker">THANK YOU</div><h2>We’ll be in touch.</h2><p>Your enquiry has been noted. We look forward to welcoming your family to Rainbow Kids Home Nursery.</p><button className="primary-cta" onClick={() => { setInquiryOpen(false); setSubmitted(false); }}>Done <ArrowRight size={16} /></button></div> : <><div className="section-kicker">START A CONVERSATION</div><h2 id="inquiry-title">Come grow with us.</h2><p className="modal-lede">Share a few details and our team will help you find the right next step.</p><form onSubmit={handleSubmit}><label>Your name<input name="name" placeholder="Parent / guardian name" required /></label><label>Child’s name<input name="child" placeholder="Little one’s name" /></label><label>Email or phone<input name="contact" placeholder="How should we reach you?" required /></label><label>Message<textarea name="message" placeholder="What would you like to know?" rows={3} /></label><button className="primary-cta form-submit" type="submit">Send enquiry <ArrowRight size={16} /></button></form></>}</div></div>}
    </div>
  );
}

export default App;
