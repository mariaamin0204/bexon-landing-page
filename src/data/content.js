/* ==========================================================================
   Website ka saara text/data yahan hai. Components isi file se data lete hain,
   is liye baad mein koi text ya link badalna ho to sirf yahin badalna hai.
   ========================================================================== */

export const BRAND = {
  name: 'Bexon',
  owner: 'Your Company Name',
}

/* --------------------------------------------------------------------------
   PLACEHOLDER LINK (abhi asli URL nahi hai)
   "Buy now" aur "Explore Demo" buttons abhi is ek link par jayenge.
   Jab aap asli URL bata dengi to sirf yahan badalna hoga.
   -------------------------------------------------------------------------- */
export const PLACEHOLDER_URL = 'https://themeforest.net/'
export const BUY_URL = PLACEHOLDER_URL

/* ---------- Header navigation (ids sections ke id se match karte hain) ---------- */
export const NAV_LINKS = [
  { label: 'Demos', href: '#demos' },
  { label: 'Inner Pages', href: '#inner-pages' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
]

/* ---------- Hero ---------- */
export const HERO = {
  badge: 'Recognized for excellence',
  title: 'Prestige Corporate Business HTML Template',
  ctaLabel: 'Explore Demos',
  ctaHref: '#demos',
}

/* Hero ke neeche 4 chhoti features (icon = Icons.jsx ka naam) */
export const HERO_FEATURES = [
  { icon: 'speed', label: 'Fast load performance' },
  { icon: 'design', label: 'Fresh & clean design' },
  { icon: 'support', label: 'Quick & friendly support' },
  { icon: 'rtl', label: 'RTL Language Support' },
]

/* ---------- Cyan scrolling band ---------- */
export const MARQUEE_ITEMS = [
  'Founders And Vision',
  'Growth And Impact',
  'Team And Values',
  'Innovation And Future',
  'Success And Trust',
]

/* ---------- Demos section ---------- */
export const DEMOS_SECTION = {
  badge: 'Pre-built homepages',
  titleBefore: 'Explore',
  highlight: '11+',
  titleAfter: 'ready-to-use websites for Corporate Business',
  text: 'Experience a clean, modern design built for business success. Intuitive navigation ensures every decision is effortless.',
  ctaLabel: 'Get Bexon Now',
}

/* 11 homepages. tone (1-4) placeholder ka rang/style badalta hai */
export const DEMOS = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: `homepage-${n}`,
    title: `Homepage - ${n}`,
    url: PLACEHOLDER_URL,
    tone: (i % 4) + 1,
  }
})

/* ---------- Inner pages section ---------- */
export const INNER_PAGES_SECTION = {
  badge: 'Pre-built innerpages',
  titleBefore: 'Build faster with',
  highlight: '27+',
  titleAfter: 'Pre-Made inner page layouts',
  text: 'Build faster using 25+ pre-made inner page layouts, saving time and effort while ensuring a consistent, professional website design.',
}

export const INNER_PAGES = [
  { id: 'about', title: 'About Us', tone: 1 },
  { id: 'team', title: 'Our Team', tone: 2 },
  { id: 'team-details', title: 'Team Details', tone: 3 },
  { id: 'services', title: 'Services', tone: 4 },
  { id: 'service-details', title: 'Service Details', tone: 1 },
  { id: 'pricing', title: 'Pricing Plan', tone: 2 },
  { id: 'portfolio', title: 'Portfolio', tone: 3 },
  { id: 'case-study', title: 'Case Study', tone: 4 },
  { id: 'blog', title: 'Blog', tone: 1 },
  { id: 'blog-details', title: 'Blog Details', tone: 2 },
  { id: 'faq', title: 'FAQ', tone: 3 },
  { id: 'contact', title: 'Contact', tone: 4 },
]

/* ---------- Key features (dark section) ---------- */
export const FEATURES_SECTION = {
  badge: 'Key features',
  title: 'Packed with powerful features for seamless website building',
  text: 'Build stunning, responsive websites effortlessly with powerful features designed for speed, flexibility, and user experience.',
}

export const FEATURES = [
  {
    id: 'support',
    icon: 'support',
    title: 'Friendly support',
    text: 'Your satisfaction is our goal. For any question, our support team is ready to help.',
  },
  {
    id: 'updates',
    icon: 'updates',
    title: 'Lifetime updates',
    text: 'Get lifetime updates with new features, fixes and improvements.',
  },
  {
    id: 'colors',
    icon: 'colors',
    title: 'Colors board',
    text: 'Freely rearrange the entire color palette, whether static or gradient colors.',
  },
  {
    id: 'customize',
    icon: 'customize',
    title: 'Template customize',
    text: 'Easily customize various elements to match your brand and style.',
  },
  {
    id: 'seo',
    icon: 'seo',
    title: 'SEO friendly',
    text: 'Clean, well-structured code helps your content reach more visitors on search engines.',
  },
  {
    id: 'fonts',
    icon: 'fonts',
    title: 'Font management',
    text: 'Choose and change font styles with Google Fonts or your own custom fonts.',
  },
  {
    id: 'browsers',
    icon: 'browsers',
    title: 'Browsers support',
    text: 'Works consistently across all major modern browsers.',
  },
  {
    id: 'performance',
    icon: 'performance',
    title: 'Fast performance',
    text: 'Built with best coding practices and optimized for top-quality, fast-loading pages.',
  },
]

/* ---------- Testimonials ---------- */
export const TESTIMONIALS_SECTION = {
  badge: 'Client feedback',
  title: 'Client testimonials that speak for themselves',
}

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Daniel Carter',
    role: 'Customer',
    rating: 5,
    text: 'A very professional design. The layouts are clean and made it easy to launch my business website quickly.',
  },
  {
    id: 't2',
    name: 'Sophia Reed',
    role: 'Customer',
    rating: 5,
    text: 'The support team replied fast and solved every issue I had. Highly recommended for anyone building a corporate site.',
  },
  {
    id: 't3',
    name: 'Michael Brooks',
    role: 'Customer',
    rating: 5,
    text: 'Great quality and top-notch functionality. The design is polished and very easy to customize.',
  },
  {
    id: 't4',
    name: 'Emily Walker',
    role: 'Customer',
    rating: 5,
    text: 'Very good support. They helped me with all the settings, and the template quality is excellent.',
  },
  {
    id: 't5',
    name: 'James Turner',
    role: 'Customer',
    rating: 5,
    text: 'Awesome template with a modern look. It gave my business a professional presence right away.',
  },
  {
    id: 't6',
    name: 'Olivia Harris',
    role: 'Customer',
    rating: 5,
    text: 'Great quality, and the support team went the extra mile to resolve my questions. Worth every penny.',
  },
]

/* ---------- Bottom CTA ---------- */
export const CTA = {
  badge: 'Your next corporate business theme',
  titleBefore: 'Life-time license, free updates and',
  highlight: '6',
  titleAfter: 'months of free support.',
  ctaLabel: 'Buy now on',
  copyright: `© All rights reserved by ${BRAND.owner}`,
}