"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const researchPapers = [
  {
    title: "Decentralized Swarm Intelligence in GPS-Denied Environments",
    date: "Nov 2023",
    journal: "IEEE Aerospace Conference",
    abstract: "A novel approach to maintaining swarm cohesion and objective completion when GNSS signals are jammed or unavailable using visual-inertial odometry and local mesh networks."
  },
  {
    title: "AI-Driven Counter-UAS Kinetic Interception",
    date: "Jun 2023",
    journal: "Defense Technology Review",
    abstract: "Evaluating the efficacy of computer vision models in terminal guidance phases for physical drone mitigation systems."
  }
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-b border-aerospace-cyan/20">
      {/* Research Lab Aesthetic Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white uppercase tracking-widest border-l-4 border-aerospace-purple pl-6">
          Research Lab
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {researchPapers.map((paper, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-8 rounded-xl border border-gray-700 hover:border-aerospace-cyan transition-all"
            >
              <div className="flex items-center gap-3 mb-4 text-aerospace-cyan">
                <BookOpen size={24} />
                <span className="text-sm font-bold tracking-widest uppercase">{paper.journal} • {paper.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">{paper.title}</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-gray-700 pl-4">
                &quot;{paper.abstract}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
