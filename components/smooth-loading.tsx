"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SmoothLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showRocketLaunch, setShowRocketLaunch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowRocketLaunch(true);
          setTimeout(() => setIsLoading(false), 2500);
          return 100;
        }
        return prev + Math.random() * 4 + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center relative">
            {/* Astronaut Rocket Image */}
            <motion.div
              className="mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={
                showRocketLaunch
                  ? {
                      opacity: 1,
                      // Circular motion first, then straight launch
                      rotate: [0, 360, 360], // Complete circle, then stop rotating
                      x: [
                        0,
                        50,
                        0,
                        -50,
                        0,
                        400, // Circle, then return to center for straight launch
                      ],
                      y: [
                        20,
                        -30,
                        -80,
                        -30,
                        20,
                        20, // Circle, then straight up
                      ],
                      scale: [1, 1, 1, 1, 1, 0.8],
                    }
                  : { opacity: 1, y: 20 }
              }
              transition={
                showRocketLaunch
                  ? {
                      duration: 2,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
                  : { duration: 0.8, delay: 0.2, ease: "easeOut" }
              }
            >
              <div className="w-32 h-32 mx-auto relative">
                <Image
                  src="/loading-image.jpg"
                  alt="Astronaut on Rocket"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>

              {/* Rocket Fire Trail Effect */}
              {showRocketLaunch && (
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 1],
                    scale: [0, 1, 1.5, 2],
                    // Fire trail only rotates during circle, then points down for straight launch
                    rotate: [0, 360, 360, 360],
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.8, 0.9, 1],
                    ease: "easeOut",
                  }}
                >
                  <div className="w-8 h-16 bg-gradient-to-t from-orange-500 via-red-400 to-yellow-300 rounded-full blur-sm opacity-80" />
                </motion.div>
              )}

              {/* Circular Path Indicator */}
              {showRocketLaunch && (
                <motion.div
                  className="absolute inset-0 border border-white/20 rounded-full w-32 h-32"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [0.5, 2, 2.5] }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              )}
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: showRocketLaunch ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl font-light text-white mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Preparing Launch...
              </motion.h1>
              <p className="text-zinc-400 text-sm font-light">
                Portfolio Loading
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-px bg-zinc-800 relative overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: showRocketLaunch ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.p
              className="text-zinc-500 text-xs mt-4 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: showRocketLaunch ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Launch Success Message */}
            {showRocketLaunch && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    🚀 Launch Successful!
                  </h2>
                  <p className="text-zinc-300 text-sm">
                    Welcome to my portfolio
                  </p>
                </div>
              </motion.div>
            )}

            {/* Stars Animation */}
            {showRocketLaunch && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -50, -100],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.5 + 1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
