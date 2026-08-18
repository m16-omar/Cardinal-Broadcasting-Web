export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export const impactStatistics: ImpactStat[] = [
  {
    id: 'portfolio-brands',
    value: '03',
    label: 'Ecosystem Brands',
    subtext: 'Radio platforms & media academy',
  },
  {
    id: 'broadcast-platforms',
    value: '02',
    label: 'Broadcast Platforms',
    subtext: 'Metropolitan & grassroots reach',
  },
  {
    id: 'media-academy',
    value: '01',
    label: 'Media Academy',
    subtext: 'Empowering future media leaders',
  },
  {
    id: 'annual-event',
    value: '01',
    label: 'Annual Flagship Festival',
    subtext: 'Praise in the City Lagos',
  },
];
