import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PersonalizedRecommendations } from './components/PersonalizedRecommendations';
import { RecentlyViewed } from './components/RecentlyViewed';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored !== null) {
      setIsDark(stored === 'true');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <PersonalizedRecommendations />
        <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
}