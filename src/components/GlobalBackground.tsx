"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  // Layer 1 (Far): Slowest parallax
  const yLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Layer 2 (Middle): Medium parallax
  const yLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Layer 3 (Foreground): Fastest parallax
  const yLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-gradient-to-br from-[#050816] via-[#080c1b] to-[#0B1120]">
      {/* ── Base Ambient Glow ─────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-aerospace-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-aerospace-purple/5 rounded-full blur-[120px]" />

      {/* ── Layer 1: Stars & Space Dust (Far) ─────────── */}
      <motion.div
        style={{ y: yLayer1 }}
        className="absolute inset-[-50%] opacity-20"
      >
        {/* Starfield generated via repeating SVG background */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='0.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='40' cy='50' r='1' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='80' cy='20' r='0.5' fill='%23ffffff' opacity='0.7'/%3E%3Ccircle cx='70' cy='80' r='1.5' fill='%23ffffff' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </motion.div>

      {/* ── Layer 2: Orbital Rings & Radar (Middle) ───── */}
      <motion.div
        style={{ y: yLayer2 }}
        className="absolute inset-[-20%] opacity-[0.06] flex items-center justify-center"
      >
        <div className="relative w-full max-w-[150vw] aspect-square animate-[spin_240s_linear_infinite]">
          {/* Orbital Rings */}
          <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-aerospace-cyan" />
          <div className="absolute inset-[15%] rounded-full border-[1px] border-aerospace-neon" />
          <div className="absolute inset-[30%] rounded-full border-[1px] border-dashed border-aerospace-purple" />
          
          {/* Radar sweep line */}
          <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-aerospace-neon to-transparent origin-left animate-[spin_10s_linear_infinite]" />
        </div>
      </motion.div>

      {/* ── Layer 3: Aerospace Blueprints (Foreground) ── */}
      <motion.div
        style={{ y: yLayer3 }}
        className="absolute inset-0 opacity-[0.04]"
      >
        <div
          className="w-full h-full opacity-50 mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 100 L190 100 M100 10 L100 190 M50 50 L150 150 M50 150 L150 50' stroke='%2300BFFF' stroke-width='0.5' fill='none'/%3E%3Crect x='80' y='80' width='40' height='40' stroke='%2300BFFF' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='100' cy='100' r='60' stroke='%2300BFFF' stroke-width='0.5' stroke-dasharray='5 5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "400px 400px",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 75 Q 75 20 130 75 T 20 75' stroke='%2300FFFF' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 20 L75 130' stroke='%2300FFFF' stroke-width='0.5' stroke-dasharray='4 8' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "600px 600px",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
      
      {/* ── Grid Overlay for Texture ──────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
