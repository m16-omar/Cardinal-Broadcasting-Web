export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const companyDetails = {
  name: 'Cardinal Broadcasting Limited',
  shortName: 'Cardinal Broadcasting',
  domain: 'https://cardinalbroadcasting.org',
  tagline: 'Shaping the Future of Media.',
  supportingStatement: 'Broadcasting ideas. Building platforms. Empowering people.',
  shortDescription:
    'Cardinal Broadcasting Limited is a dynamic Nigerian media organisation creating meaningful experiences through broadcasting, digital media, content, education, and community engagement.',
  editorialIntro: {
    heading: "More Than Media. We're Building Possibilities.",
    narrative:
      'Operating at the intersection of media, technology, people, and culture, Cardinal Broadcasting empowers brands, communities, and emerging talent across the African media landscape.',
    keywords: ['Inform', 'Entertain', 'Educate', 'Connect', 'Empower'],
  },
  contact: {
    email: 'info@cardinalbroadcasting.org',
    businessEmail: 'partnerships@cardinalbroadcasting.org',
    careersEmail: 'careers@cardinalbroadcasting.org',
    pressEmail: 'press@cardinalbroadcasting.org',
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
      { label: 'Our Portfolio', href: '/portfolio' },
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Our Impact', href: '/impact' },
      { label: 'News & Media', href: '/news' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    portfolio: [
      { label: 'City 105.1 FM', href: 'https://city1051fm.com', isExternal: true },
      { label: '93.5 Area FM', href: 'https://935areafm.com', isExternal: true },
      { label: 'City Media Academy', href: 'https://citymediaacademy.com', isExternal: true },
    ],
    initiatives: [
      { label: 'Praise in the City', href: 'https://praiseinthecity.org', isExternal: true },
    ],
  },
};
