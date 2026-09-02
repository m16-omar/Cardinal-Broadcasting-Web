import cityFmBuildingImg from '../assets/city1051fm building.png';
import cmaImg from '../assets/CMA.jpeg';

export interface PortfolioBrand {
  id: string;
  name: string;
  badge: string;
  category: 'Broadcasting' | 'Media Education & Talent Development';
  tagline: string;
  description: string;
  highlights: string[];
  websiteUrl: string;
  ctaText: string;
  imageUrl: string;
  accentColor: string;
}

export const portfolioBrands: PortfolioBrand[] = [
  {
    id: 'city-105-1-fm',
    name: 'City 105.1 FM',
    badge: '01 / Broadcasting Platform',
    category: 'Broadcasting',
    tagline: 'We Run This City',
    description:
      'A dynamic radio platform delivering engaging conversations, entertainment, information, and high-impact programming to its vibrant metropolitan audience.',
    highlights: [
      'Contemporary urban programming',
      'High-engagement talk shows & lifestyle content',
      'Strong digital audio streaming & community reach',
    ],
    websiteUrl: 'https://city1051fm.com',
    ctaText: 'Visit City 105.1 FM',
    imageUrl: cityFmBuildingImg,
    accentColor: '#D92039',
  },

  {
    id: '93-5-area-fm',
    name: '93.5 Area FM',
    badge: '02 / Broadcasting Platform',
    category: 'Broadcasting',
    tagline: 'One VOICE, Every AREA',
    description:
      'A vibrant radio platform connecting audiences through engaging grassroots programming, popular culture, community dialogue, and locally resonant content.',
    highlights: [
      'Authentic community-rooted broadcasting',
      'Interactive audience-driven formats',
      'Mass-market cultural connection across Nigeria',
    ],
    websiteUrl: 'https://935areafm.com',
    ctaText: 'Visit Area FM',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#E65100',
  },
  {
    id: 'city-media-academy',
    name: 'City Media Academy',
    badge: '03 / Talent Development',
    category: 'Media Education & Talent Development',
    tagline: 'Empowering the Next Generation of Media Leaders',
    description:
      'A practical media training platform helping young people develop high-demand creative, technical, and storytelling skills across radio, television, social media, and digital production.',
    highlights: [
      'Broadcast journalism & presentation training',
      'Digital content creation & production mastery',
      'Direct studio immersion & industry mentorship',
    ],
    websiteUrl: 'https://cma-livid.vercel.app',
    ctaText: 'Visit CMA',
    imageUrl: cmaImg,
    accentColor: '#7C3AED',
  },
];
