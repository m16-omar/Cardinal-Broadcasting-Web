import pitcImg from '../assets/PITC.png';

export interface Initiative {
  id: string;
  name: string;
  type: string;
  philosophy: string;
  tagline: string;
  description: string;
  date: string;
  location: string;
  admission: string;
  features: string[];
  websiteUrl: string;
  ctaText: string;
  imageUrl: string;
  backdropUrl: string;
}

export const initiatives: Initiative[] = [
  {
    id: 'praise-in-the-city',
    name: 'Praise in the City',
    type: 'Initiatives & Experiences',
    philosophy: 'Praise Has No Price Tag.',
    tagline: 'A celebration of faith, gospel music, thanksgiving and community.',
    description:
      'Praise in the City is a major annual outdoor gospel music concert and Thanksgiving celebration associated with the Cardinal Broadcasting ecosystem, taking place every December 26th and bringing people together through music, worship, thanksgiving, and community with free admission to all.',
    date: 'December 26th of every year',
    location: 'Police College Ground Ikeja, Lagos',
    admission: 'Free Admission to All',
    features: [
      'Faith & Gospel Music',
      'Collective Thanksgiving',
      'Community & Fellowship',
      'Live Audience Experience',
      'Inspirational Celebration',
    ],
    websiteUrl: 'https://praiseinthecity.org',
    ctaText: 'Explore Praise in the City',
    imageUrl: pitcImg,
    backdropUrl: pitcImg,
  },
];
