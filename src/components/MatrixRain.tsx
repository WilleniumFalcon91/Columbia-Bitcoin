"use client";

import { useEffect, useRef } from "react";

// Hex digits, binary, and Bitcoin symbols for a cryptographic feel
const CHARS = "0123456789ABCDEF₿⚡01";

const COL_WIDTH = 16;
const FONT_SIZE = 13;
const FADE_RATE = 0.035;

interface Column {
  head: number;
  trail: number;
  speed: number;
  progress: number;
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols: Column[] = [];
    let alphaGrid: Float32Array;
    let charGrid: Uint8Array;
    let numCols = 0;
    let numRows = 0;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numCols = Math.floor(canvas.width / COL_WIDTH);
      numRows = Math.floor(canvas.height / FONT_SIZE) + 5;

      alphaGrid = new Float32Array(numCols * numRows);
      charGrid = new Uint8Array(numCols * numRows);

      cols = Array.from({ length: numCols }, () => ({
        head: Math.floor(Math.random() * numRows * -1),
        trail: Math.floor(8 + Math.random() * 20),
        speed: 0.15 + Math.random() * 0.3,
        progress: Math.random(),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      // Decay all alpha values each frame
      for (let i = 0; i < alphaGrid.length; i++) {
        if (alphaGrid[i] > 0) alphaGrid[i] = Math.max(0, alphaGrid[i] - FADE_RATE);
      }

      // Advance each column and stamp new characters at the head
      for (let c = 0; c < numCols; c++) {
        const col = cols[c];
        col.progress += col.speed;

        while (col.progress >= 1) {
          col.progress -= 1;
          col.head++;

          if (col.head >= 0 && col.head < numRows) {
            const idx = c * numRows + col.head;
            alphaGrid[idx] = 1.0;
            charGrid[idx] = Math.floor(Math.random() * CHARS.length);
          }

          if (col.head > numRows + col.trail) {
            cols[c] = {
              head: Math.floor(Math.random() * numRows * -0.5) - 5,
              trail: Math.floor(8 + Math.random() * 20),
              speed: 0.15 + Math.random() * 0.3,
              progress: Math.random(),
            };
          }
        }
      }

      // Render — leading character is brighter than the trail
      for (let c = 0; c < numCols; c++) {
        for (let r = 0; r < numRows; r++) {
          const alpha = alphaGrid[c * numRows + r];
          if (alpha <= 0.01) continue;

          const isHead = r === cols[c].head;
          ctx.fillStyle = isHead
            ? `rgba(247, 147, 26, ${alpha * 0.95})`
            : `rgba(247, 147, 26, ${alpha * 0.55})`;

          ctx.fillText(
            CHARS[charGrid[c * numRows + r]],
            c * COL_WIDTH,
            r * FONT_SIZE,
          );
        }
      }

      animId = requestAnimationFrame(draw);
    };

    // Respect OS-level reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    init();
    animId = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(animId);
        init();
        animId = requestAnimationFrame(draw);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]"
    />
  );
}
