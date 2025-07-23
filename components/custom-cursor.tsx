"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mobileCheck = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    if (mobileCheck()) {
      setHidden(true);
      return;
    }

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document
        .querySelectorAll(
          "a, button, [role='button'], input, textarea, select, details, [tabindex]:not([tabindex='-1'])"
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setLinkHovered(true));
          el.addEventListener("mouseleave", () => setLinkHovered(false));
        });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="custom-cursor">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - (linkHovered ? 16 : 4),
          y: position.y - (linkHovered ? 16 : 4),
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <svg
          width={linkHovered ? 32 : 8}
          height={linkHovered ? 32 : 8}
          viewBox="0 0 20 20"
        >
          <motion.circle
            cx="10"
            cy="10"
            r="5"
            fill={
              clicked
                ? "#FF0080"
                : linkHovered
                  ? "rgba(255, 0, 128, 0.5)"
                  : "#7928CA"
            }
            animate={{
              opacity: clicked ? 0.5 : 1,
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: clicked ? 1.2 : linkHovered ? 2 : 1,
          opacity: clicked || linkHovered ? 0.5 : 0.15,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 20 20">
          <motion.circle
            cx="10"
            cy="10"
            r="5"
            stroke={clicked ? "#FF0080" : linkHovered ? "#00D9F5" : "#7928CA"}
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>
      </motion.div>
    </div>
  );
}
