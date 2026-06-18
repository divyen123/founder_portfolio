"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Satellite, Crosshair, Shield, BrainCircuit, Route, Compass } from "lucide-react";

const expertise = [
  { label: "Aerospace Systems", icon: Satellite, color: "text-aerospace-cyan", bg: "group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]", border: "group-hover:border-aerospace-cyan/40" },
  { label: "UAV Development", icon: Crosshair, color: "text-aerospace-neon", bg: "group-hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]", border: "group-hover:border-aerospace-neon/40" },
  { label: "Defense Technology", icon: Shield, color: "text-aerospace-purple", bg: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]", border: "group-hover:border-aerospace-purple/40" },
  { label: "AI for Aerospace", icon: BrainCircuit, color: "text-aerospace-cyan", bg: "group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]", border: "group-hover:border-aerospace-cyan/40" },
  { label: "Autonomous Systems", icon: Route, color: "text-aerospace-neon", bg: "group-hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]", border: "group-hover:border-aerospace-neon/40" },
  { label: "Research & Innovation", icon: Compass, color: "text-yellow-400", bg: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]", border: "group-hover:border-yellow-400/40" },
];

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Background grid — animated, lightweight */}
      <div
        className="absolute inset-0 animate-grid pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.035,
        }}
      />

      {/* Subtle radial glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-aerospace-neon/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          01 — About
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-12 max-w-4xl"
        >
          Building The Future Of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aerospace-neon to-aerospace-cyan">
            Autonomous Aerospace Systems
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am an{" "}
              <span className="text-white font-semibold">aerospace entrepreneur and UAV systems developer</span>{" "}
              focused on creating next-generation autonomous systems for defense, surveillance, and intelligent aerial operations.
            </p>
            <p>
              Through{" "}
              <span className="text-aerospace-cyan font-semibold">Ragas Aerospace</span>, I build indigenous technologies
              that combine aerospace engineering, AI, embedded systems, computer vision, and mission autonomy to solve
              real-world challenges.
            </p>
            <p>
              From swarm coordination algorithms to counter-UAS electronic warfare systems, every project is built
              with the precision and rigour of a defense-grade engineering program.
            </p>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: "2026",  sub: "Founded Ragas Aerospace" },
              { val: "10+",   sub: "Deep Tech Projects" },
              { val: "Defense", sub: "& Autonomous Systems" },
              { val: "UAV",   sub: "Aerospace Innovation" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="holo-glass rounded-2xl p-6 group cursor-default animate-border"
              >
                <div className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-br from-aerospace-neon to-aerospace-cyan mb-2">
                  {s.val}
                </div>
                <div className="text-gray-400 text-xs font-mono uppercase tracking-wider leading-snug">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Expertise heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.4em] uppercase mb-5"
        >
          Core Expertise
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Technical Domains
        </motion.h3>

        {/* Expertise card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                custom={i}
                variants={tagVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -8, rotateX: 5, rotateY: -5, scale: 1.02 }}
                style={{ perspective: 1000 }}
                className={`flex flex-col gap-5 p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 cursor-default group ${item.bg} ${item.border}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-white text-lg font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
