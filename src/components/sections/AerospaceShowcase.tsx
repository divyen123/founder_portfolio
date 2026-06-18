"use client";

import { motion } from "framer-motion";

export default function AerospaceShowcase() {
  return (
    <section id="aerospace" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Radar Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00BFFF 1px, transparent 1px), linear-gradient(90deg, #00BFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white uppercase tracking-widest border-l-4 border-aerospace-cyan pl-6">
          Aerospace Showcase
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Radar UI Simulation */}
          <div className="relative h-[400px] glassmorphism rounded-3xl border border-aerospace-cyan/30 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[300px] h-[300px] rounded-full border border-aerospace-cyan/40"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full border border-aerospace-cyan/40"></div>
            <div className="absolute w-[100px] h-[100px] rounded-full border border-aerospace-cyan/40"></div>
            
            {/* Radar Sweep */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-[150px] h-[150px] origin-bottom-right bg-gradient-to-tr from-transparent via-aerospace-cyan/20 to-aerospace-cyan/50 rounded-tr-full"
              style={{ transformOrigin: "bottom right", right: "50%", bottom: "50%" }}
            />

            {/* Drone blips */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="absolute w-2 h-2 bg-aerospace-neon rounded-full shadow-[0_0_8px_#00BFFF]"
              style={{ top: "30%", left: "60%" }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
              className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_red]"
              style={{ top: "60%", left: "20%" }}
            />

            <div className="absolute top-4 left-4 text-xs font-mono text-aerospace-cyan">
              <div>SYS: ONLINE</div>
              <div>SCAN: OMNI-DIR</div>
            </div>
          </div>

          {/* Mission Control Dashboard */}
          <div className="flex flex-col gap-6">
            <div className="glassmorphism p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 tracking-widest">UAV Telemetry</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">ALTITUDE</div>
                  <div className="text-2xl font-mono text-aerospace-neon">40,023 FT</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">VELOCITY</div>
                  <div className="text-2xl font-mono text-aerospace-cyan">MACH 0.8</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">PITCH</div>
                  <div className="text-2xl font-mono text-white">+12.4°</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-500 mb-1">YAW</div>
                  <div className="text-2xl font-mono text-white">004.1°</div>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-gray-800 flex-1">
              <h3 className="text-xl font-bold text-white mb-4 tracking-widest">System Status</h3>
              <div className="space-y-4">
                {['Propulsion', 'Navigation', 'Comm Link', 'Payload'].map((sys, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-sm text-gray-300 uppercase tracking-wider">{sys}</span>
                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">NOMINAL</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
