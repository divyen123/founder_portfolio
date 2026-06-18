"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, ExternalLink, Activity, Shield, Cpu, Radar, Crosshair, Box, Zap, Satellite } from "lucide-react";

// Github SVG — lucide-react version in this project doesn't export Github
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const flagshipProjects = [
  {
    id: 1,
    title: "Autonomous Swarm Drone Platform",
    category: "Swarm Intelligence",
    icon: Crosshair,
    color: "neon",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    description:
      "An intelligent multi-UAV ecosystem enabling collaborative flight operations, autonomous formation control, and distributed mission execution.",
    tech: ["ROS 2", "Python", "Computer Vision", "PX4"],
    metrics: { "Nodes": "10+", "Latency": "<15ms" },
    tag: "ACTIVE DEVELOPMENT",
  },
  {
    id: 2,
    title: "Counter-Drone Defense System",
    category: "Defense",
    icon: Shield,
    color: "red",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    description:
      "A defense-oriented platform designed to identify, classify, and neutralize unauthorized aerial threats through electronic countermeasures.",
    tech: ["SDR", "C++", "TensorFlow", "RF Intel"],
    metrics: { "Range": "15km", "Accuracy": "99%" },
    tag: "COUNTER-UAS",
  },
  {
    id: 3,
    title: "Intelligent Surveillance UAV",
    category: "ISR",
    icon: Radar,
    color: "cyan",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?q=80&w=800&auto=format&fit=crop",
    description:
      "A long-endurance UAV built for reconnaissance, infrastructure inspection, and disaster response missions with real-time AI analytics.",
    tech: ["Jetson Nano", "YOLOv8", "ArduPilot"],
    metrics: { "Endurance": "4hr", "Payload": "5kg" },
    tag: "SURVEILLANCE",
  },
  {
    id: 4,
    title: "AI Mission Control Interface",
    category: "Software",
    icon: Activity,
    color: "purple",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description:
      "Centralized ground software for fleet management, autonomous drone coordination, and real-time telemetry analysis with AI support.",
    tech: ["React", "WebSockets", "Node.js", "Three.js"],
    metrics: { "Uptime": "99.9%", "Sync": "Live" },
    tag: "COMMAND & CONTROL",
  },
];

const researchProjects = [
  {
    id: 5,
    title: "All-Terrain UAV Platform",
    domain: "UAV Systems",
    icon: Box,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "RF Signal Jammer Architecture",
    domain: "Defense Electronics",
    icon: Zap,
    image: "/rf-signal-jammer-bg.png",
    premium: true,
  },
  {
    id: 7,
    title: "Swarm Trajectory Planning",
    domain: "Swarm AI",
    icon: Crosshair,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Orbital Relay Framework",
    domain: "Space Tech",
    icon: Satellite,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Intelligent Mars Rover Prototype",
    domain: "Robotics",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Neural Flight Controller",
    domain: "AI & Embedded",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
  },
];



const colorMap: Record<string, string> = {
  neon:   "border-aerospace-neon/40 group-hover:border-aerospace-neon group-hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]",
  red:    "border-red-500/40 group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  cyan:   "border-aerospace-cyan/40 group-hover:border-aerospace-cyan group-hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]",
  purple: "border-aerospace-purple/40 group-hover:border-aerospace-purple group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
};

const tagColorMap: Record<string, string> = {
  neon:   "text-aerospace-neon bg-aerospace-neon/10",
  red:    "text-red-400 bg-red-400/10",
  cyan:   "text-aerospace-cyan bg-aerospace-cyan/10",
  purple: "text-aerospace-purple bg-aerospace-purple/10",
};

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-aerospace-purple/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-aerospace-neon/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          02 — Engineering
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-20"
        >
          Engineering The Future
        </motion.h2>

        {/* ── Flagship Projects ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.4em] uppercase mb-8"
        >
          Category 01 — Flagship Projects
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {flagshipProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`relative h-[480px] w-full rounded-2xl overflow-hidden border ${colorMap[project.color]} transition-all duration-500`}
                  whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]/40 group-hover:via-[#080808]/70 transition-colors duration-500" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    
                    {/* Top Row: Tag & Icons */}
                    <div className="flex justify-between items-start">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${tagColorMap[project.color]} backdrop-blur-md`}>
                        <Icon size={12} />
                        {project.tag}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors">
                          <GithubIcon size={16} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Row: Text & Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                        {Object.entries(project.metrics).map(([key, val]) => (
                          <div key={key}>
                            <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{key}</div>
                            <div className="text-sm font-bold text-white">{val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="section-rule mb-24" />

        {/* ── Research & Engineering Projects ──────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.4em] uppercase mb-8"
        >
          Category 02 — Research & Engineering Projects
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {researchProjects.map((proj, i) => {
            const Icon = proj.icon;
            const isPremium = (proj as { premium?: boolean }).premium;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isPremium ? { rotateX: 5, rotateY: -5, scale: 1.02 } : { scale: 1.02 }}
                style={{ perspective: 1000 }}
                className={`group relative h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${isPremium ? 'shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]' : ''}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${isPremium ? 'bg-black/70 group-hover:bg-black/60' : 'bg-black/60 group-hover:bg-black/40'} transition-colors duration-500`} />
                <div className={`absolute inset-0 border rounded-xl transition-colors duration-500 ${isPremium ? 'border-aerospace-cyan/30 group-hover:border-aerospace-cyan' : 'border-white/10 group-hover:border-aerospace-neon/50'}`} />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-aerospace-cyan tracking-widest uppercase bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                      {proj.domain}
                    </div>
                    <Icon size={16} className="text-gray-400 group-hover:text-aerospace-neon transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white leading-snug group-hover:text-aerospace-neon transition-colors duration-300 flex items-center gap-2">
                      {proj.title}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="section-rule mb-24" />


        {/* ── Vision Statement ─────────────────────────────────────────── */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="holo-glass rounded-2xl p-10 text-center max-w-4xl mx-auto"
        >
          <div className="text-aerospace-neon font-mono text-xs tracking-[0.4em] uppercase mb-6">
            Vision Statement
          </div>
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
            &quot;To build indigenous aerospace, robotics, and intelligent autonomous systems that solve real-world
            challenges across defense, mobility, industrial automation, and sustainability sectors.&quot;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
