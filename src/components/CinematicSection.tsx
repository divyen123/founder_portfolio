"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps each portfolio section in a cinematic scroll-driven entrance.
 * As the section enters the viewport, it zooms out (scale 1.05 → 1.0)
 * and rises into place (y 60px → 0), creating the "flying through a
 * mission control center" depth effect described in the brief.
 *
 * All transforms are GPU-composited (will-change: transform, opacity).
 * No layout shifts — the outer div retains full size at all times.
 */
export default function CinematicSection({
  children,
  className = "",
}: CinematicSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // [start of section at bottom of viewport → section at 25% from top]
    offset: ["start end", "start 0.25"],
  });

  // Camera zoom-out: section enters slightly enlarged, normalises as it settles
  const scale   = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  // Cinematic fade
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  // Gentle upward drift
  const y       = useTransform(scrollYProgress, [0, 1], [64, 0]);

  return (
    // Outer div preserves layout space; inner div is the animated layer
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          y,
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
