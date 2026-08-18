export interface JobOpening {
  id: string;
  title: string;
  department: 'Broadcast Operations' | 'Digital & Creative' | 'Commercial & Partnerships' | 'Technical Engineering' | 'Media Education';
  type: 'Full-time' | 'Contract' | 'Fellowship / Internship';
  location: 'Lagos, Nigeria' | 'Hybrid';
  description: string;
  requirements: string[];
}

export const careerOpenings: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Broadcast Producer',
    department: 'Broadcast Operations',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description:
      'Lead program conceptualization, rundown management, and live audio execution across flagship programming platforms.',
    requirements: [
      'Proven experience in radio / multimedia production workflows',
      'Strong storytelling, editorial judgement, and team leadership',
      'Familiarity with digital audio workstations and broadcast consoles',
    ],
  },
  {
    id: 'job-2',
    title: 'Digital Content & Multimedia Strategist',
    department: 'Digital & Creative',
    type: 'Full-time',
    location: 'Hybrid',
    description:
      'Drive multi-channel visual content, short-form video formats, and digital community growth across the Cardinal ecosystem.',
    requirements: [
      'Expertise in digital video editing, motion graphics, and social storytelling',
      'Analytical mindset for audience engagement and retention metrics',
      'Passion for contemporary African culture and media innovation',
    ],
  },
  {
    id: 'job-3',
    title: 'Media Sales & Brand Partnerships Executive',
    department: 'Commercial & Partnerships',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description:
      'Cultivate high-impact commercial relationships with corporate brands, advertising agencies, and prospective sponsors.',
    requirements: [
      'Demonstrated track record in media sales or commercial sponsorships',
      'Strong negotiation, pitching, and consultative partnership skills',
      'Deep network within Nigerian corporate and advertising sectors',
    ],
  },
  {
    id: 'job-4',
    title: 'City Media Academy Graduate Fellowship',
    department: 'Media Education',
    type: 'Fellowship / Internship',
    location: 'Lagos, Nigeria',
    description:
      'An immersive 6-month hands-on fellowship for promising graduates in broadcast journalism, production, and audio engineering.',
    requirements: [
      'Recent graduate or emerging talent passionate about media careers',
      'Eagerness to learn in real-time fast-paced live studio environments',
      'Strong communication, discipline, and creative curiosity',
    ],
  },
];

export const careerValues = [
  {
    title: 'Creative Freedom',
    description: 'We foster an open environment where original ideas, bold formats, and fresh perspectives are welcomed.',
    iconName: 'Sparkles',
  },
  {
    title: 'Continuous Growth',
    description: 'We provide structured mentorship, industry immersion, and opportunities to lead multi-platform projects.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Collaborative Culture',
    description: 'We operate as a unified media family across broadcasting, digital, events, and education.',
    iconName: 'Users',
  },
  {
    title: 'Real World Impact',
    description: 'Your work will directly inform, entertain, and inspire millions of listeners and communities every day.',
    iconName: 'Globe',
  },
];
