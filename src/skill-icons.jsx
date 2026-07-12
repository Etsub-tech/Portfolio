function IconJS() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#F0DB4F" />
      <text x="20" y="27" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="15" fill="#1a1a1a">JS</text>
    </svg>
  );
}

function IconCSS() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#2965F1" />
      <text x="20" y="26" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12.5" fill="#fff">CSS</text>
    </svg>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <circle cx="20" cy="20" r="3.2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.6">
        <ellipse cx="20" cy="20" rx="16.5" ry="6.6" />
        <ellipse cx="20" cy="20" rx="16.5" ry="6.6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16.5" ry="6.6" transform="rotate(120 20 20)" />
      </g>
    </svg>
  );
}

function IconNode() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <path
        d="M20 3 L35 11.5 L35 28.5 L20 37 L5 28.5 L5 11.5 Z"
        fill="none"
        stroke="#3C873A"
        strokeWidth="2"
      />
      <text x="20" y="24" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10" fill="#3C873A">JS</text>
    </svg>
  );
}

function IconFigma() {
  return (
    <svg viewBox="0 0 24 36" width="22" height="32" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" rx="6" fill="#F24E1E" />
      <rect x="0" y="12" width="12" height="12" fill="#A259FF" />
      <circle cx="6" cy="30" r="6" fill="#0ACF83" />
      <path d="M12 12h6a6 6 0 110 12h-6z" fill="#1ABCFE" />
      <circle cx="18" cy="6" r="6" fill="#FF7262" />
    </svg>
  );
}

function IconFlutter() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <path
        d="M8 21L20 9h8L16 21l8 8h-8z"
        fill="#42A5F5"
      />
      <path
        d="M16 29l4-4 8 8h-8z"
        fill="#0D47A1"
      />
    </svg>
  );
}

export const SKILLS = [
  { name: "JavaScript", Icon: IconJS },
  { name: "React", Icon: IconReact },
  { name: "Node.js", Icon: IconNode },
  { name: "Flutter", Icon: IconFlutter },
  { name: "Figma", Icon: IconFigma },
  { name: "CSS", Icon: IconCSS },
];
