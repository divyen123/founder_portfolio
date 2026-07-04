"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

// LinkedIn SVG — lucide-react version in this project doesn't export Linkedin
function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "raghavsaravanan22@gmail.com",
    href: "mailto:raghavsaravanan22@gmail.com",
    color: "neon",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9884739061",
    href: "tel:+919884739061",
    color: "cyan",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "raghav-s-31427532a",
    href: "https://www.linkedin.com/in/raghav-s-31427532a/",
    color: "purple",
  },
  {
    icon: Globe,
    label: "Startup Website",
    value: "aerospace.ragasgroups.com",
    href: "https://aerospace.ragasgroups.com/",
    color: "gold",
  },
];

const colorMap: Record<string, { border: string; icon: string; badge: string }> = {
  neon:   { border: "border-aerospace-neon/30 hover:border-aerospace-neon/70", icon: "text-aerospace-neon",   badge: "bg-aerospace-neon/10 text-aerospace-neon" },
  cyan:   { border: "border-aerospace-cyan/30 hover:border-aerospace-cyan/70", icon: "text-aerospace-cyan",   badge: "bg-aerospace-cyan/10 text-aerospace-cyan" },
  purple: { border: "border-aerospace-purple/30 hover:border-aerospace-purple/70", icon: "text-aerospace-purple", badge: "bg-aerospace-purple/10 text-aerospace-purple" },
  gold:   { border: "border-yellow-400/30 hover:border-yellow-400/70",         icon: "text-yellow-400",       badge: "bg-yellow-400/10 text-yellow-400" },
};

/* Animated Earth Hologram — pure CSS */
function EarthHologram() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center select-none">
      {/* Outer orbit rings */}
      {[140, 110, 80].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-aerospace-neon/20"
          style={{ width: size, height: size }}
        />
      ))}

      {/* Spinning orbit lines */}
      <div
        className="absolute rounded-full border border-aerospace-neon/30"
        style={{
          width: 160, height: 80,
          borderRadius: "50%",
          animation: "earth-spin 12s linear infinite",
          transform: "rotateX(75deg)",
        }}
      />
      <div
        className="absolute rounded-full border border-aerospace-cyan/20"
        style={{
          width: 120, height: 50,
          borderRadius: "50%",
          animation: "earth-spin 18s linear infinite reverse",
          transform: "rotateX(60deg) rotateZ(40deg)",
        }}
      />

      {/* Core globe */}
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-aerospace-neon/30 via-aerospace-cyan/10 to-transparent border border-aerospace-neon/40 flex items-center justify-center animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aerospace-neon/20 to-transparent border border-aerospace-neon/20 flex items-center justify-center">
          <Globe className="text-aerospace-neon" size={28} />
        </div>
      </div>

      {/* Satellite blips */}
      {[
        { top: "18%", left: "70%", delay: "0s" },
        { top: "65%", left: "15%", delay: "1.2s" },
        { top: "80%", left: "70%", delay: "0.6s" },
      ].map((pos, idx) => (
        <motion.div
          key={idx}
          className="absolute w-2 h-2 rounded-full bg-aerospace-cyan shadow-[0_0_8px_#00FFFF]"
          style={{ top: pos.top, left: pos.left }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: parseFloat(pos.delay), ease: "easeInOut" }}
        />
      ))}

      {/* Labels */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-aerospace-neon/70 tracking-widest whitespace-nowrap">
        RAGAS AEROSPACE — GLOBAL OPS
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-aerospace-neon/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          06 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let&apos;s Build The Future{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aerospace-neon to-aerospace-cyan">
            Together
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-16 max-w-xl mx-auto"
        >
          <span className="text-white font-semibold">Raghav S</span> — Founder & CEO, Ragas Aerospace
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-20">
          {contactCards.map((card, i) => {
            const c = colorMap[card.color];
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`flex items-center gap-5 glassmorphism rounded-xl p-6 border ${c.border} transition-all duration-300 group text-left`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.badge} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={c.icon} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1">
                    {card.label}
                  </div>
                  <div className={`font-medium ${c.icon} text-sm md:text-base`}>{card.value}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Earth hologram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
          className="pt-10 pb-4 flex justify-center w-full"
        >
          <EarthHologram />
        </motion.div>
      </div>
    </section>
  );
}
