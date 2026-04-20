import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max pull in px (default 14) */
  strength?: number;
};

/**
 * Magnetic hover — element is gently pulled toward the cursor.
 * Apple-style microinteraction for primary CTAs.
 */
export function Magnetic({ children, className = "", strength = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 220, damping: 18, mass: 0.5 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const cacheRect = () => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = rectRef.current;
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={cacheRect}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
