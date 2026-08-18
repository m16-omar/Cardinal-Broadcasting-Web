export interface ApproachPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const approachPrinciples: ApproachPrinciple[] = [
  {
    id: 'people-first',
    number: '01',
    title: 'People First',
    description:
      'Media is ultimately about people, communities, and human connection. We design experiences that resonate emotionally and build enduring social trust.',
    iconName: 'Users',
  },
  {
    id: 'innovation',
    number: '02',
    title: 'Innovation',
    description:
      'We actively embrace evolving technologies, digital workflows, and modern distribution channels to expand our reach and enhance audio-visual storytelling.',
    iconName: 'Lightbulb',
  },
  {
    id: 'relevance',
    number: '03',
    title: 'Relevance',
    description:
      'We curate content, programming, and activations that matter deeply to the Nigerian and African audiences we serve every single day.',
    iconName: 'Target',
  },
  {
    id: 'growth',
    number: '04',
    title: 'Growth',
    description:
      'We invest intentionally in platforms, sustainable ideas, and emerging talent with the potential to create generational impact across the media landscape.',
    iconName: 'TrendingUp',
  },
];
