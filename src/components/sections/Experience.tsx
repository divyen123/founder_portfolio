"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024 - Present",
    title: "Founder & CEO",
    company: "Ragas Aerospace",
    description: "Leading a team of engineers to develop next-generation UAV swarms and counter-drone defense systems.",
  },
  {
    year: "2023",
    title: "Aerospace Research Intern",
    company: "Defense Research Organization",
    description: "Conducted research on autonomous flight algorithms and RF-based drone detection.",
  },
  {
    year: "2022",
    title: "UAV Systems Lead",
    company: "University Robotics Team",
    description: "Designed and built custom fixed-wing UAVs for payload delivery competitions.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white uppercase tracking-widest border-l-4 border-aerospace-neon pl-6">
          Service Record
        </h2>

        <div className="relative border-l border-gray-800 pl-8 ml-4">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-aerospace-neon rounded-full -left-[41px] top-1 shadow-[0_0_10px_#00BFFF]" />
              
              <div className="glassmorphism p-6 rounded-2xl border border-gray-800 hover:border-aerospace-neon transition-colors">
                <span className="text-sm font-bold text-aerospace-neon tracking-widest uppercase">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{item.company}</h4>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
