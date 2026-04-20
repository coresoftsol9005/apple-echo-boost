import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees (default 8) */
  max?: number;
  /** Perspective in px (default 1000) */
  perspective?: number;
  /** Lift the element on hover in px (default 0) */
  lift?: number;
  /** Add a subtle glare highlight (default true) */
  glare?: boolean;
  /** Pop children forward in 3D (default 0) */
  depth?: number;
};

/**
 * Mouse-tracked 3D tilt with springy easing.
 * Pure visual layer — children remain fully interactive.
 */
export function Tilt3D({
  children,
  className = "",
  max = 2,
  perspective = 1600,
  lift = 0,
  glare = true,
  depth = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const liftMv = useSpring(0, spring);

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const translateY = useTransform(liftMv, [0, 1], [0, -lift]);

  const glareXPct = useTransform(sx, (v) => `${v * 100}%`);
  const glareYPct = useTransform(sy, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(0, spring);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareXPct} ${glareYPct}, rgba(255,255,255,0.7), rgba(255,255,255,0) 45%)`;

  const cacheRect = () => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = rectRef.current;
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareOpacity.set(0.09);
    if (lift) liftMv.set(1);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
    liftMv.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={cacheRect}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective, transformStyle: "preserve-3d" }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full will-change-transform"
      >
        <div
          style={{
            transform: depth ? `translateZ(${depth}px)` : undefined,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
            style={{ opacity: glareOpacity, background: glareBg }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
