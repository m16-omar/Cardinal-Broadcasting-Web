export interface Partner {
  id: string;
  name: string;
  category: string;
  logoText?: string;
  logoUrl?: string;
}

export const partnersList: Partner[] = [
  { id: 'p1', name: 'City 105.1 FM', category: 'Broadcasting Partner' },
  { id: 'p2', name: '93.5 Area FM', category: 'Grassroots Radio' },
  { id: 'p3', name: 'City Media Academy', category: 'Talent Incubator' },
  { id: 'p4', name: 'Praise in the City', category: 'Flagship Festival' },
  { id: 'p5', name: 'Commercial Brands', category: 'Advertising Partner [Placeholder]' },
  { id: 'p6', name: 'Media Agencies', category: 'Agency Network [Placeholder]' },
  { id: 'p7', name: 'Broadcast Tech', category: 'Infrastructure [Placeholder]' },
  { id: 'p8', name: 'Creative Studios', category: 'Content Co-Production [Placeholder]' },
  { id: 'p9', name: 'Digital Audio Networks', category: 'Streaming Distribution [Placeholder]' },
];
