"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home",         href: "#home" },
  { name: "About",        href: "#about" },
  { name: "Projects",     href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey",      href: "#journey" },
  { name: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glassmorphism py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <Rocket
            size={18}
            className="text-aerospace-neon group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300"
          />
          <span className="font-bold text-base tracking-[0.3em] text-white">
            RAGAS
          </span>
          <span className="text-aerospace-neon font-mono text-[10px] tracking-widest hidden md:block">
            AEROSPACE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium text-gray-400 hover:text-aerospace-neon transition-colors duration-300 uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-aerospace-neon group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glassmorphism border-t border-white/5"
        >
          <div className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-aerospace-neon uppercase tracking-[0.25em] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
