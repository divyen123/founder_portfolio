"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Building2, Award, FlaskConical, ChevronRight } from "lucide-react";

const highlights = [
  "Startup established in 2026",
  "Defense-focused UAV technologies",
  "Innovation and startup competitions",
  "Proprietary aerospace solutions",
  "Academic and industry collaborations",
];

const roadmapItems = [
  {
    phase: "Phase 01",
    year: "2026",
    title: "Foundation",
    status: "ACTIVE",
    statusColor: "text-aerospace-neon bg-aerospace-neon/10",
    description:
      "Established Ragas Aerospace. Initiated development of core UAV and counter-drone platforms. Registered for national innovation challenges.",
    icon: Rocket,
    iconColor: "text-aerospace-neon",
    borderColor: "border-aerospace-neon/40",
    dotColor: "bg-aerospace-neon shadow-[0_0_12px_#00BFFF]",
    lineColor: "from-aerospace-neon/50 to-transparent",
  },
  {
    phase: "Phase 02",
    year: "2026 – 2027",
    title: "Prototype & Validate",
    status: "ACTIVE",
    statusColor: "text-aerospace-cyan bg-aerospace-cyan/10",
    description:
      "Hardware prototyping of autonomous swarm systems. Field testing of counter-drone detection capabilities. Engaging with defense-tech incubators.",
    icon: FlaskConical,
    iconColor: "text-aerospace-cyan",
    borderColor: "border-aerospace-cyan/30",
    dotColor: "bg-aerospace-cyan shadow-[0_0_12px_#00FFFF]",
    lineColor: "from-aerospace-cyan/40 to-transparent",
  },
  {
    phase: "Phase 03",
    year: "2026 – 2027",
    title: "Scale & Commercialize",
    status: "IN PROGRESS",
    statusColor: "text-aerospace-purple bg-aerospace-purple/10",
    description:
      "Launch first commercial products. Secure defense contracts and institutional partnerships. Expand engineering team and R&D capabilities.",
    icon: Building2,
    iconColor: "text-aerospace-purple",
    borderColor: "border-aerospace-purple/30",
    dotColor: "bg-aerospace-purple shadow-[0_0_12px_#8B5CF6]",
    lineColor: "from-aerospace-purple/40 to-transparent",
  },
  {
    phase: "Phase 04",
    year: "2029+",
    title: "Global Operations",
    status: "VISION",
    statusColor: "text-yellow-400 bg-yellow-400/10",
    description:
      "Establish Ragas Aerospace as a globally recognized indigenous deep-tech aerospace company delivering autonomous defense and civilian systems.",
    icon: Award,
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    dotColor: "bg-yellow-400 shadow-[0_0_12px_#FFD700]",
    lineColor: "from-yellow-400/40 to-transparent",
  },
];

export default function StartupJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="journey" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-aerospace-neon/4 blur-3xl" />
        <div
          className="absolute inset-0 animate-grid"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.025,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          04 — Startup Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          The Ragas Aerospace Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mb-20"
        >
          Founded to develop indigenous aerospace and defense technologies focused on autonomous drones,
          swarm intelligence, and counter-UAV systems.
        </motion.p>

        {/* Founder badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="holo-glass rounded-2xl p-8 mb-16 max-w-3xl"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-aerospace-neon/10 border border-aerospace-neon/30 flex items-center justify-center flex-shrink-0">
              <Rocket className="text-aerospace-neon" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-white">Founder & CEO</h3>
                <span className="text-[10px] font-mono font-bold text-aerospace-neon bg-aerospace-neon/10 px-2.5 py-0.5 rounded-full tracking-widest uppercase">
                  2026 – Present
                </span>
              </div>
              <p className="text-aerospace-cyan font-semibold mb-4">Ragas Aerospace</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Founded Ragas Aerospace to develop indigenous aerospace and defense technologies focused on autonomous
                drones, swarm intelligence, and counter-UAV systems. Working alongside mentors, researchers, and
                industry experts to accelerate aerospace product development and commercialisation.
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-gray-400">
                    <ChevronRight size={12} className="text-aerospace-neon flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Incubation Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="glassmorphism rounded-xl px-8 py-5 border border-white/10 flex items-center gap-5 mb-24 max-w-2xl"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
            <Building2 size={18} className="text-gray-300" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-aerospace-neon tracking-widest uppercase mb-0.5">
              Incubation Partner
            </div>
            <div className="text-white font-semibold text-sm">
              SRM R Shivakumar Research and Innovation Foundation
            </div>
          </div>
        </motion.div>

        {/* ── Roadmap Timeline ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.4em] uppercase mb-12"
        >
          Mission Roadmap
        </motion.p>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-aerospace-neon/50 via-aerospace-cyan/20 to-transparent" />

          <div className="space-y-8">
            {roadmapItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 md:gap-10 pl-0"
                >
                  {/* Dot on timeline */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center glassmorphism border ${item.borderColor}`}>
                      <Icon size={18} className={item.iconColor} />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex-1 glassmorphism rounded-2xl p-6 border ${item.borderColor} hover:bg-white/[0.03] transition-all duration-300 mb-2`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                        {item.phase}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">·</span>
                      <span className="text-[10px] font-mono text-gray-400 tracking-widest">{item.year}</span>
                      <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className={`text-lg font-bold mb-3 ${item.iconColor}`}>{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
