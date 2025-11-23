"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loading screen on every page load/reload
    // This will show on full page reloads but not on client-side navigation
    // (because the component doesn't remount on Next.js client-side navigation)
    
    // Wait for page to fully load, percentage to reach 100%, and color palette animation
    const handleLoad = () => {
      // Percentage animation: 2 seconds to reach 100%
      // Wait 0.2s to show 100% clearly
      // Color palette animation: starts at 2.2s, takes ~1.55s (0.45s delay + 1.1s duration)
      // Website should appear right after color palette completes
      // Total: ~4 seconds for percentage + color palette
      setTimeout(() => {
        // Show website content right after color palette animation completes
        setShowContent(true);
        // Start fading out loading screen after a small delay to ensure color palette is fully visible
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 4000); // Extended to 4 seconds to ensure color palette fully animates
    };

    if (typeof window !== "undefined") {
      // Check if page is already loaded
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        // Fallback timer - ensure we wait for percentage (2s) + color palette animation (~1.55s)
        const fallbackTimer = setTimeout(handleLoad, 4000);
        
        return () => {
          window.removeEventListener("load", handleLoad);
          clearTimeout(fallbackTimer);
        };
      }
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <LoadingScreen isLoading={isLoading} />
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </LoadingContext.Provider>
  );
}

