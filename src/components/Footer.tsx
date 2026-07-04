"use client";

import { Rocket, Mail } from "lucide-react";

// LinkedIn SVG (lucide-react version in this project doesn't export Linkedin)
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-16 border-t border-white/[0.06] bg-[#050816]/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-white mb-2">RAGHAV S</h2>
          <p className="text-aerospace-neon font-mono text-sm tracking-widest uppercase mb-4">
            Founder & CEO – Ragas Aerospace
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Aerospace Systems Engineer | UAV Developer | Defense Technology Researcher
          </p>
        </div>

        {/* Social / comms */}
        <div className="flex gap-4 mb-12">
          <a
            href="mailto:raghav@ragasgroups.com"
            className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center text-gray-400 hover:text-aerospace-neon hover:border-aerospace-neon hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/raghav-s-31427532a/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center text-gray-400 hover:text-aerospace-cyan hover:border-aerospace-cyan hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/raghav-s-31" // Replace with actual if known
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        {/* Copyright & Top Button */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Raghav S · All systems nominal.
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-gray-400 hover:text-aerospace-neon flex items-center gap-2 uppercase tracking-[0.2em] transition-colors group"
          >
            Return to Orbit
            <Rocket size={14} className="group-hover:-translate-y-1 transition-transform -rotate-45 text-aerospace-neon" />
          </button>
        </div>
        
      </div>
    </footer>
  );
}
