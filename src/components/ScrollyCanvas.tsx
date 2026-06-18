"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, motion, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 50;

function getFrameSrc(index: number) {
  const padded = String(index).padStart(3, "0");
  return `/sequence/ezgif-frame-${padded}.png`;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number
) {
  const ratio = Math.max(w / img.width, h / img.height);
  const dw = img.width * ratio;
  const dh = img.height * ratio;
  const x = (w - dw) / 2;
  const y = (h - dh) / 2;
  ctx.drawImage(img, 0, 0, img.width, img.height, x, y, dw, dh);
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 1], [1.0, 1.12]);

  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;
    
    const checkLoaded = () => {
      count++;
      if (count === FRAME_COUNT) {
        imagesRef.current = imgs;
        setLoaded(true);
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      
      // Use decode() to asynchronously decode the image on the GPU
      // This eliminates the synchronous decoding stutter when the frame is first drawn
      if ('decode' in img) {
        img.decode().then(checkLoaded).catch(checkLoaded);
      } else {
        (img as HTMLImageElement).onload = checkLoaded;
        (img as HTMLImageElement).onerror = checkLoaded;
      }
      
      imgs.push(img);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !loaded) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // GPU-accelerated context optimization (alpha: false forces opaque background, improving performance)
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (ctx && imagesRef.current[0]?.complete) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawCover(ctx, imagesRef.current[0], canvas.width, canvas.height);
    }

    if (!isPlaying) return;

    // Animate from current progress to 1 over 8s
    const anim = animate(progress, 1, {
      duration: 8,
      ease: "linear",
      onComplete: () => {
        setTimeout(() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }, 600);
      },
    });

    let rafId: number;
    let lastRawIndex = -1;
    
    // Get context once outside the render loop
    const renderCtx = canvas.getContext("2d", { alpha: false, desynchronized: true });

    const render = () => {
      const p = progress.get();
      const imgs = imagesRef.current;
      
      if (!renderCtx || !imgs.length) { 
        rafId = requestAnimationFrame(render); 
        return; 
      }

      const rawIndex = p * (FRAME_COUNT - 1);
      
      // Skip redundant renders to save GPU cycles and maintain frame rate
      if (Math.abs(rawIndex - lastRawIndex) < 0.001) {
        rafId = requestAnimationFrame(render);
        return;
      }
      lastRawIndex = rawIndex;

      const f1 = Math.floor(rawIndex);
      const f2 = Math.min(f1 + 1, FRAME_COUNT - 1);
      const alpha = rawIndex - f1;

      // High-quality GPU image smoothing
      renderCtx.imageSmoothingEnabled = true;
      renderCtx.imageSmoothingQuality = "high";

      // Draw base frame (f1) - completely overwrites the canvas (no clearRect needed)
      if (imgs[f1]?.complete) { 
        renderCtx.globalAlpha = 1; 
        drawCover(renderCtx, imgs[f1], canvas.width, canvas.height); 
      }
      
      // Seamless frame interpolation: overlay the next frame (f2) based on progression
      if (imgs[f2]?.complete && alpha > 0.005) { 
        renderCtx.globalAlpha = alpha; 
        drawCover(renderCtx, imgs[f2], canvas.width, canvas.height); 
      }
      
      renderCtx.globalAlpha = 1;

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      anim.stop();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, isPlaying, progress]);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#121212] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 origin-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Loading spinner */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-2 border-aerospace-neon border-t-transparent rounded-full animate-spin" />
            <p className="text-aerospace-neon font-mono text-sm tracking-widest uppercase">Initialising…</p>
          </div>
        </div>
      )}

      {/* Overlay text */}
      {isPlaying && <Overlay progress={progress} />}

      {/* Click-to-play screen */}
      {loaded && !isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/55 backdrop-blur-sm"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-3 text-center"
          >
            RAGHAV S
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-aerospace-cyan text-lg md:text-xl tracking-widest uppercase mb-10 text-center"
          >
            Founder & CEO · Ragas Aerospace
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsPlaying(true)}
            className="group relative px-10 py-4 border border-aerospace-neon text-aerospace-neon font-bold tracking-[0.2em] uppercase text-sm rounded-full overflow-hidden transition-all"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Initiate Launch Sequence
            </span>
            <span className="absolute inset-0 bg-aerospace-neon scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
