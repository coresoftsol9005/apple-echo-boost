type Props = { variant?: "light" | "dark"; className?: string };

export function CoreSoftLogo({ variant = "light", className }: Props) {
  const isDark = variant === "dark";
  const wordmark = isDark ? "#FFFFFF" : "#0D47A1";
  const subtle = isDark ? "#90CAF9" : "#0D47A1";
  const tag = isDark ? "#546E8A" : "#888888";
  const lineStroke = isDark ? "#90CAF9" : "#0D47A1";
  const node = isDark ? "#1565C0" : "#0D47A1";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 160"
      className={className}
      role="img"
      aria-label="CoreSoft Solutions"
    >
      <line x1="60" y1="80" x2="96" y2="52" stroke={lineStroke} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="60" y1="80" x2="96" y2="108" stroke={lineStroke} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="112" cy="40" r="17" fill={node} />
      <circle cx="112" cy="120" r="17" fill={node} />
      <circle cx="48" cy="80" r="32" fill="#E53935" />
      <text x="158" y="74" fontFamily="Inter, 'Helvetica Neue', sans-serif" fontSize="50" fontWeight="900" fill={wordmark} letterSpacing="-1.5">CoreSoft</text>
      <rect x="158" y="82" width="330" height="3" rx="1.5" fill="#E53935" />
      <text x="160" y="118" fontFamily="Inter, 'Helvetica Neue', sans-serif" fontSize="30" fontWeight="300" fill={subtle} letterSpacing="7">SOLUTIONS</text>
      <text x="161" y="144" fontFamily="Inter, 'Helvetica Neue', sans-serif" fontSize="11" fontWeight="300" fill={tag} letterSpacing="2.5">DIGITAL MEDIA  ·  BUSINESS AUDITS</text>
    </svg>
  );
}
