"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AppShowcase from "./components/AppShowcase";
import DevelopmentProcess from "./components/DevelopmentProcess";
import ContactSection from "./components/ContactSection";
import { Menu, X } from "lucide-react";
import AboutUs from "./components/AboutUs";

export default function MobileDevPortfolio() {
  const activeSection = "Home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Process", "Contact"];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-brand-bg to-brand-surface text-brand-text overflow-x-hidden">
      {/* Floating AppBar */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:block bg-transparent">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center">
            <div
              className={`flex items-center justify-center bg-brand-bg/80 backdrop-blur-md rounded-full shadow-xl px-6 py-3 transition-all duration-500 ${
                isScrolled ? "scale-100 opacity-100" : "scale-95 opacity-90"
              }`}
            >
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`transition ${
                      activeSection === item
                        ? "text-brand-accent font-semibold"
                        : "text-brand-text hover:text-brand-accent"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile AppBar */}
          <div className="flex w-full items-center justify-between px-4 py-3 bg-brand-bg/90 backdrop-blur-md transition-all duration-500">
            <button
              className="text-brand-text"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="w-full bg-brand-bg/90 backdrop-blur-md px-4 py-4 space-y-4 text-left">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block transition ${
                    activeSection === item
                      ? "text-brand-accent font-semibold"
                      : "text-brand-text hover:text-brand-accent"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="pt-0 scroll-smooth" style={{ scrollPaddingTop: "50px" }}>
        <section id="Home"><HeroSection /></section>
        <section id="About"><AboutUs /></section>
        <section id="Skills"><SkillsSection /></section>
        <section id="Projects"><AppShowcase /></section>
        <section id="Process"><DevelopmentProcess /></section>
        <section id="Contact"><ContactSection /></section>
      </main>
    </div>
  );
}
