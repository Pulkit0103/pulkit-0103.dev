"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [clicking, setClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check whether we're hovering an interactive element
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='pointer']"
      );
      setPointer(isInteractive);
    };

    // Ring lags smoothly using RAF interpolation
    const animate = () => {
      const speed = 0.18;
      ringPosRef.current.x +=
        (mouseRef.current.x - ringPosRef.current.x) * speed;
      ringPosRef.current.y +=
        (mouseRef.current.y - ringPosRef.current.y) * speed;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Solid dot — instant tracking */}
      <div
        ref={dotRef}
        aria-hidden
        className={`fixed top-0 left-0 pointer-events-none z-[100] w-1.5 h-1.5 rounded-full bg-blue-400 mix-blend-difference transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${clicking ? "scale-50" : ""}`}
        style={{ willChange: "transform" }}
      />
      {/* Outer ring — trails smoothly */}
      <div
        ref={ringRef}
        aria-hidden
        className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full border transition-[width,height,background-color,border-color,opacity,scale] duration-200 ${
          pointer
            ? "w-12 h-12 border-blue-400 bg-blue-400/10"
            : "w-8 h-8 border-blue-400/50 bg-transparent"
        } ${clicking ? "scale-75" : ""} ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
