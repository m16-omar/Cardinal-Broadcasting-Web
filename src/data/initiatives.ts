export interface Initiative {
  id: string;
  name: string;
  type: string;
  philosophy: string;
  tagline: string;
  description: string;
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
    type: 'Annual Flagship Initiative & Festival',
    philosophy: 'Praising God Has No Price Tag',
    tagline: 'Annual Gospel Music & Thanksgiving Festival',
    description:
      'Praise in the City is a major annual outdoor gospel music concert and Thanksgiving celebration on the Lagos mainland, bringing people together through music, worship, thanksgiving, and community. Powered by the Cardinal Broadcasting ecosystem and associated with City 105.1 FM, this event provides free admission, uniting diverse audiences in a spirit of collective gratitude.',
    location: 'Lagos Mainland, Nigeria',
    admission: 'Free Admission to All',
    features: [
      'Gospel Music & Worship',
      'Collective Thanksgiving',
      'Community & Fellowship',
      'Live Outdoor Experience',
      'Inspirational Celebration',
    ],
    websiteUrl: 'https://praiseinthecity.org',
    ctaText: 'Explore Praise in the City',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
  },
];
