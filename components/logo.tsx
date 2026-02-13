export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="2" fill="url(#logo-grad)" />
      {/* Stylized villa roof */}
      <path
        d="M16 7L6 17h3v8h14v-8h3L16 7z"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Door */}
      <rect x="13.5" y="19" width="5" height="6" rx="0.5" fill="none" stroke="white" strokeWidth="1.2" />
      {/* Window left */}
      <rect x="9.5" y="18" width="3" height="3" rx="0.5" fill="none" stroke="white" strokeWidth="1" />
      {/* Window right */}
      <rect x="19.5" y="18" width="3" height="3" rx="0.5" fill="none" stroke="white" strokeWidth="1" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.72 0.12 80)" />
          <stop offset="1" stopColor="oklch(0.62 0.14 78)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
