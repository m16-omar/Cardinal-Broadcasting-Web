export interface LeaderProfile {
  name?: string;
  role: string;
  department: string;
  bio: string;
  responsibilities: string[];
}

export const leadershipTeam: LeaderProfile[] = [
  {
    name: 'Adedoja Allen',
    role: 'MD / CEO',
    department: 'Executive Office & Group Governance',
    bio: 'Accomplished media executive and business transformation leader steering Cardinal Broadcasting Limited. With extensive broadcasting leadership and deep financial insight, she leads corporate strategy, platform growth, and socio-cultural impact initiatives across the conglomerate.',
    responsibilities: [
      'Group Strategic Direction & Corporate Governance',
      'Media Ecosystem & Brand Portfolio Expansion',
      'Talent Incubation (CMA) & Impact Initiatives (PITC)',
      'Strategic Partnerships & Institutional Relations',
    ],
  },
  {
    role: 'General Manager',
    department: 'Operations & Station Management',
    bio: 'Oversees day-to-day operational execution, broadcast infrastructure, cross-platform programming synergy, and team administration across Cardinal Broadcasting platforms and subsidiaries.',
    responsibilities: [
      'Broadcast Operations, Technology & Compliance',
      'Cross-Platform Content & Programming Synergies',
      'Commercial Sales Coordination & Client Delivery',
      'Station Administration & Talent Performance',
    ],
  },
];
