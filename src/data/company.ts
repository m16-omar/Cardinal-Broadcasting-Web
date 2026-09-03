export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Brands', href: '/brands' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const companyDetails = {
  name: 'Cardinal Broadcasting Limited',
  shortName: 'Cardinal Broadcasting',
  domain: 'https://cardinalbroadcastingltd.com',
  tagline: 'Shaping the Future of Media.',
  supportingStatement: 'Broadcasting ideas. Building platforms. Empowering people.',
  shortDescription:
    'Cardinal Broadcasting Limited is a dynamic Nigerian media organisation creating meaningful experiences through broadcasting, digital media, content, education, and community engagement.',
  footerStatement: 'Building the future of media, people and possibilities.',
  editorialIntro: {
    heading: "More Than Media. We're Building Possibilities.",
    narrative:
      'Operating at the intersection of media, technology, people, and culture, Cardinal Broadcasting empowers brands, communities, and emerging talent across the African media landscape.',
    keywords: ['Inform', 'Entertain', 'Educate', 'Connect', 'Empower'],
  },
  contact: {
    email: 'info@cardinalbroadcastingltd.com',
    businessEmail: 'partnerships@cardinalbroadcastingltd.com',
    careersEmail: 'careers@cardinalbroadcastingltd.com',
    pressEmail: 'press@cardinalbroadcastingltd.com',
    phone: '+234 (0) 1 234 5678',
    address: 'Cardinal Broadcasting House, Lagos, Nigeria',
    officeHours: 'Monday – Friday: 8:00 AM – 6:00 PM (WAT)',
  },
  social: [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/cardinal-broadcasting', icon: 'Linkedin' },
    { name: 'X (Twitter)', url: 'https://x.com/cardinalbroadcasting', icon: 'Twitter' },
    { name: 'Instagram', url: 'https://instagram.com/cardinalbroadcasting', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com/cardinalbroadcasting', icon: 'Facebook' },
    { name: 'YouTube', url: 'https://youtube.com/@cardinalbroadcasting', icon: 'Youtube' },
  ],
  footerLinks: {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Brands', href: '/brands' },
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Our Impact', href: '/impact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    brands: [
      { label: 'City 105.1 FM', href: 'https://city1051fm.com', category: 'Broadcasting', isExternal: true },
      { label: '93.5 Area FM', href: 'https://935areafm.com', category: 'Broadcasting', isExternal: true },
      { label: 'City Media Academy', href: 'https://cma-livid.vercel.app', category: 'Media Education & Talent Development', isExternal: true },
    ],
    initiatives: [
      { label: 'Praise in the City', href: 'https://praiseinthecity.org', category: 'Annual Gospel Music & Thanksgiving Festival', isExternal: true },
    ],
  },
};
