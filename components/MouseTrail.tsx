"use client";

import { useEffect, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export default function MouseTrail() {
  const [position, setPosition] = useState<Point | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {position && (
        <div
          className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.55),transparent_60%)] blur-[1px] opacity-70 transition-transform duration-75"
          style={{
            left: position.x,
            top: position.y,
            width: 160,
            height: 160
          }}
        >
          <span className="h-2 w-2 rounded-full bg-sky-100/90 shadow-[0_0_16px_rgba(129,140,248,0.9)]" />
        </div>
      )}
    </div>
  );
}
