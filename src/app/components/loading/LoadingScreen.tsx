"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Color Palette Animation Background - Full Height Sections from Bottom to Top */}
          {/* Only show after percentage reaches 100% */}
          {showColorPalette && (
            <div className="absolute inset-0 overflow-hidden z-[1]">
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
                className="absolute inset-0 pointer-events-none z-[10]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
                }}
              />
            </div>
          )}

          {/* Logo and Spinner Container */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Spinning Circle around Logo */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              {/* Outer Spinning Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: "#8B4513",
                  borderRightColor: "#b92523",
                  borderBottomColor: "#ffedde",
                  borderLeftColor: "#8B4513",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Middle Spinning Circle (counter-rotation) */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: "#b92523",
                  borderRightColor: "#ffedde",
                  borderBottomColor: "#8B4513",
                  borderLeftColor: "#b92523",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Logo Container - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                >
                  <div className="relative h-full w-full p-4">
                    <Image
                      src="/assets/lirabrand-logo-removebg-preview.png"
                      alt="LiraBrand Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Inner Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 40px rgba(139, 69, 19, 0.3), 0 0 80px rgba(185, 37, 35, 0.2)",
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

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

