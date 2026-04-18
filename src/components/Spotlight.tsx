import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wrap any container to give it a cursor-following red brand spotlight.
 * The wrapper is `relative`; pair with the `.spotlight` overlay (auto-injected)
 * which fades in on hover.
 */
export function Spotlight({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight-host relative ${className}`}
    >
      <span className="spotlight" aria-hidden />
      {children}
    </div>
  );
}
