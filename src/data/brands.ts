import cityFmBuildingImg from '../assets/city1051fm building.png';
import cmaImg from '../assets/CMA.jpeg';

export interface Brand {
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

export const brandsList: Brand[] = [
  {
    id: 'city-105-1-fm',
    name: 'City 105.1 FM',
    badge: '01 — Broadcasting',
    category: 'Broadcasting',
    tagline: 'The Lifestyle & Conversation Station',
    description:
      'A dynamic radio platform delivering engaging conversations, entertainment, information and programming to its audience.',
    highlights: [
      'Contemporary urban programming & lifestyle conversations',
      'High-impact broadcast shows & vibrant metropolitan resonance',
      'Strong digital audio streaming & multi-channel audience reach',
    ],
    websiteUrl: 'https://city1051fm.com',
    ctaText: 'Visit City 105.1 FM',
    imageUrl: cityFmBuildingImg,
    accentColor: '#D92039',
  },
  {
    id: '93-5-area-fm',
    name: '93.5 Area FM',
    badge: '02 — Broadcasting',
    category: 'Broadcasting',
    tagline: 'One VOICE, Every AREA',
    description:
      'A vibrant radio platform connecting audiences through engaging programming, entertainment, conversations and relevant content.',
    highlights: [
      'Authentic community-rooted broadcasting & local storytelling',
      'Interactive audience-driven formats & cultural dialogues',
      'Deep mass-market connection and indigenous engagement',
    ],
    websiteUrl: 'https://935areafm.com',
    ctaText: 'Visit Area FM',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#E65100',
  },
  {
    id: 'city-media-academy',
    name: 'City Media Academy',
    badge: '03 — Media Education & Talent Development',
    category: 'Media Education & Talent Development',
    tagline: 'Empowering the Next Generation of Media Leaders',
    description:
      'A practical media training platform helping young people develop the skills needed to build careers across radio, television, social media and digital content.',
    highlights: [
      'Hands-on radio presentation, voice artistry & studio production',
      'Modern digital content creation, storytelling & broadcast ethics',
      'Direct studio immersion & industry mentorship from seasoned pros',
    ],
    websiteUrl: 'https://cma-livid.vercel.app',
    ctaText: 'Visit CMA',
    imageUrl: cmaImg,
    accentColor: '#7C3AED',
  },
];
