"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Total duration is 8 seconds.
  // We want all wordings to end exactly 1 second before the video ends (at 7s).
  // 7s / 8s = 0.875 progress.
  
  // Section 1: 0s to ~2.3s (Progress: 0.05 to 0.29)
  // Text starts hidden, fades in after click, then fades out.
  const opacity1 = useTransform(progress, [0.01, 0.08, 0.2, 0.29], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0.01, 0.29], [20, -50]);

  // Section 2: ~2.3s to ~4.6s (Progress: 0.29 to 0.58)
  const opacity2 = useTransform(progress, [0.29, 0.36, 0.5, 0.58], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.29, 0.58], [30, -30]);

  // Section 3: ~4.6s to 7.0s (Progress: 0.58 to 0.875)
  // Text fades out before the last frame.
  const opacity3 = useTransform(progress, [0.58, 0.65, 0.8, 0.875], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.58, 0.875], [30, -30]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="relative h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4">
            RAGHAV S
          </h1>
          <h2 className="text-2xl md:text-3xl text-aerospace-cyan font-medium tracking-wide mb-2">
            Founder & CEO, Ragas Aerospace
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Aerospace Systems Engineer | UAV Developer | Defense Technology Researcher
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-8 md:pl-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight drop-shadow-2xl">
            Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-aerospace-neon to-aerospace-cyan">Flight, Defense, and Autonomy.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-8 md:pr-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight drop-shadow-2xl">
            Powering the Next Era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-aerospace-purple to-aerospace-neon">Aerospace and Defense Intelligence.</span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
