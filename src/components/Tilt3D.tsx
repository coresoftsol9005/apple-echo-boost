import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees (default 8) */
  max?: number;
  /** Perspective in px (default 1000) */
  perspective?: number;
  /** Lift the element on hover (default 0 = none) */
  lift?: number;
  /** Add a subtle glare highlight (default true) */
  glare?: boolean;
  /** Make children pop forward in 3D (default 0) */
  depth?: number;
};

/**
 * Mouse-tracked 3D tilt with springy easing.
 * Pure visual layer — children remain fully interactive.
 */
export function Tilt3D({
  children,
  className = "",
  max = 8,
  perspective = 1000,
  lift = 0,
  glare = true,
  depth = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(0, spring);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareOpacity.set(0.18);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: lift ? useTransform(glareOpacity, [0, 0.18], [0, -lift]) : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full will-change-transform"
      >
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: "preserve-3d" }}>
          {children}
        </div>
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
            style={{
              opacity: glareOpacity,
              background: useTransform(
                [glareX, glareY] as never,
                ([x, y]: string[]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.7), rgba(255,255,255,0) 45%)`
              ),
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
