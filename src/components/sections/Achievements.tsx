"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, BookOpen, Rocket, Users, Zap, Target, Globe, UserCheck } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Winner",
    event: "Kratos'25 National Project Expo",
    type: "1st Place",
    icon: Trophy,
    color: "neon",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "2nd Place",
    event: "Asthivaara Kenshin'25 Project Expo",
    type: "Runner Up",
    icon: Medal,
    color: "gold",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Workshop Delegate",
    event: "Machine Learning Workshop — IIT Madras Research Park",
    type: "IIT Madras",
    icon: BookOpen,
    color: "cyan",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Finalist",
    event: "NIDAR National Drone Innovation Challenge",
    type: "National",
    icon: Rocket,
    color: "purple",
    image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "3rd Place",
    event: "Latency Zero | Jarvis'26",
    type: "Bronze",
    icon: Zap,
    color: "gold",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Competitor",
    event: "SAEISS Autonomous Drone Development Challenge",
    type: "SAEISS",
    icon: Target,
    color: "red",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Competitor",
    event: "Genesis 2026 Hackathon",
    type: "Hackathon",
    icon: Users,
    color: "purple",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "2nd Place",
    event: "Mathematical Modelling Contest",
    type: "Runner Up",
    icon: Medal,
    color: "neon",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Delegate",
    event: "Google For Developers AI Day For Startups India 2026",
    type: "Google",
    icon: Globe,
    color: "cyan",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Peer Evaluator",
    event: "Tech Star Summit",
    type: "Evaluator",
    icon: UserCheck,
    color: "gold",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
  },
];

const colorClasses: Record<string, { border: string; icon: string; badge: string }> = {
  neon:   { border: "border-aerospace-neon/30 hover:border-aerospace-neon/70", icon: "text-aerospace-neon", badge: "text-aerospace-neon bg-aerospace-neon/10" },
  gold:   { border: "border-yellow-400/30 hover:border-yellow-400/70",         icon: "text-yellow-400",    badge: "text-yellow-400 bg-yellow-400/10" },
  cyan:   { border: "border-aerospace-cyan/30 hover:border-aerospace-cyan/70", icon: "text-aerospace-cyan", badge: "text-aerospace-cyan bg-aerospace-cyan/10" },
  purple: { border: "border-aerospace-purple/30 hover:border-aerospace-purple/70", icon: "text-aerospace-purple", badge: "text-aerospace-purple bg-aerospace-purple/10" },
  red:    { border: "border-red-400/30 hover:border-red-400/70",               icon: "text-red-400",       badge: "text-red-400 bg-red-400/10" },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="achievements" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-aerospace-neon/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-aerospace-neon/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-aerospace-neon/5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          03 — Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-20"
        >
          Mission Milestones
        </motion.h2>

        {/* Achievement grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const c = colorClasses[a.color];
            const Icon = a.icon;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`relative h-full min-h-[220px] w-full rounded-2xl overflow-hidden border ${c.border} transition-all duration-500`}
                  whileHover={{ rotateX: 3, rotateY: -3, z: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/75 to-[#080808]/40 group-hover:via-[#080808]/60 transition-colors duration-500" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className="flex justify-between items-start mb-auto">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.badge} group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                        <Icon size={18} className={c.icon} />
                      </div>

                      {/* Badge */}
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase ${c.badge} backdrop-blur-sm`}>
                        {a.type}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className={`text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 ${c.icon}`}>
                        {a.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-snug drop-shadow-md">
                        {a.event}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
