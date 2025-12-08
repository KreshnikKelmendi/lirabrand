"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [percentage, setPercentage] = useState(0);
  const [showColorPalette, setShowColorPalette] = useState(false);

  // Prevent body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  // Reset states when loading starts
  useEffect(() => {
    if (isLoading) {
      setPercentage(0);
      setShowColorPalette(false);
    }
  }, [isLoading]);

  // Animate percentage from 0 to 100
  useEffect(() => {
    if (!isLoading) {
      setPercentage(0);
      setShowColorPalette(false);
      return;
    }

    // Reset to 0 when loading starts
    setPercentage(0);

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds to reach 100% (faster)
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      let currentPercentage = Math.floor(easeOut * 100);
      
      // Ensure it reaches exactly 100%
      if (progress >= 1) {
        currentPercentage = 100;
      }
      
      setPercentage(currentPercentage);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Final check to ensure 100% is displayed
        setPercentage(100);
        // Start color palette animation after 100% is reached
        setTimeout(() => {
          setShowColorPalette(true);
        }, 200); // Small delay to show 100% clearly (faster)
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Color Palette Animation Background - Full Height Sections from Bottom to Top */}
          {/* Only show after percentage reaches 100% */}
          {showColorPalette && (
            <div className="absolute inset-0 overflow-hidden z-1">
              {/* Brown Section - Bottom layer (slides up first) */}
              <motion.div
                className="absolute w-full h-screen bg-[#8B4513]"
                initial={{ y: "100%" }}
                animate={{ y: "-300%" }}
                transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ top: "300%" }}
              />
              
              {/* Red Section - Second layer */}
              <motion.div
                className="absolute w-full h-screen bg-[#b92523]"
                initial={{ y: "100%" }}
                animate={{ y: "-200%" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ top: "200%" }}
              />
              
              {/* Cream Section - Third layer */}
              <motion.div
                className="absolute w-full h-screen bg-[#ffedde]"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ top: "100%" }}
              />
              
              {/* White Section - Top layer (slides up last, covers everything) */}
              <motion.div
                className="absolute w-full h-screen bg-white"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ top: "0%" }}
              />
              
              {/* Beautiful Shimmer Effect Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
                }}
              />
            </div>
          )}

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                {("LIRA MARK").split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lemonmilk uppercase drop-shadow-2xl"
                    style={{ color: '#a72b2b' }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Loading Percentage Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <motion.p
                key={percentage}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-armin text-[#8B4513] tracking-wider font-semibold"
              >
                {percentage}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

