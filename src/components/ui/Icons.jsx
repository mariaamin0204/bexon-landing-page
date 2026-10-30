/* ==========================================================================
   Icon: website ke saare icons ek hi jagah (inline SVG, koi library nahi).

   Istemal:
     import Icon from '../ui/Icons.jsx'
     <Icon name="arrow-up-right" size={18} />

   Icons jo maujood hain:
     speed, design, support, rtl, updates, colors, customize, seo, fonts,
     browsers, performance,
     arrow-up-right, arrow-right, arrow-left, arrow-up,
     chevron-left, chevron-right, menu, close, check, star,
     logo, leaf
   ========================================================================== */

const ICONS = {
  /* ---------- Feature icons (outline) ---------- */
  speed: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,

  design: (
    <>
      <path d="M3 21l3.5-.8L19 7.7a2.1 2.1 0 0 0-3-3L3.8 17.5z" />
      <path d="M14 6l3 3" />
    </>
  ),

  support: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M19 20c0 1.5-2 2-5 2" />
    </>
  ),

  rtl: (
    <>
      <path d="M21 6H10M21 12H10M21 18H10" />
      <path d="M6 8l-3 4 3 4" />
    </>
  ),

  updates: (
    <>
      <path d="M20 11a8 8 0 0 0-14.5-4.5L3 9" />
      <path d="M3 4v5h5" />
      <path d="M4 13a8 8 0 0 0 14.5 4.5L21 15" />
      <path d="M21 20v-5h-5" />
    </>
  ),

  colors: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4C21 6.7 17 3 12 3z" />
      <circle cx="7.5" cy="11" r="0.9" fill="currentColor" />
      <circle cx="10" cy="7.5" r="0.9" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="0.9" fill="currentColor" />
      <circle cx="17" cy="11" r="0.9" fill="currentColor" />
    </>
  ),

  customize: (
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),

  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
      <path d="M8.5 12.5l2-2 1.5 1.5 2-3" />
    </>
  ),

  fonts: (
    <>
      <path d="M4 7V5h16v2" />
      <path d="M12 5v14" />
      <path d="M9 19h6" />
    </>
  ),

  browsers: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),

  performance: (
    <>
      <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
      <path d="M12 13l4-4" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),

  /* ---------- Arrows aur controls ---------- */
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),

  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),

  'arrow-left': (
    <>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </>
  ),

  'arrow-up': (
    <>
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </>
  ),

  'chevron-left': <path d="M15 5l-7 7 7 7" />,
  'chevron-right': <path d="M9 5l7 7-7 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="M5 12l5 5 9-10" />,

  /* ---------- Filled icons ---------- */
  star: (
    <path
      d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"
      fill="currentColor"
      stroke="none"
    />
  ),

  /* Logo ka cube: teen rang ke hisse (colors tokens.css se aate hain) */
  logo: (
    <>
      <path
        d="M12 2 21 7 12 12 3 7z"
        stroke="none"
        style={{ fill: 'var(--color-accent-light)' }}
      />
      <path
        d="M3 7l9 5v10L3 17z"
        stroke="none"
        style={{ fill: 'var(--color-accent)' }}
      />
      <path
        d="M21 7v10l-9 5V12z"
        stroke="none"
        style={{ fill: 'var(--color-accent-dark)' }}
      />
    </>
  ),

  /* Ye asli Envato logo nahi, ek simple patte ka placeholder hai */
  leaf: (
    <path
      d="M6 21c0-9 4-16 14-18-.5 9-4.5 14-11 14l-1.5 4z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

export default function Icon({
  name,
  size = 24,
  className,
  title,
  strokeWidth = 1.5,
  ...rest
}) {
  const shapes = ICONS[name]
  if (!shapes) return null

  // title diya ho to screen-reader ko batao, warna sirf sajawat hai (chhupa do)
  const a11y = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': 'true', focusable: 'false' }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...a11y}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {shapes}
    </svg>
  )
}