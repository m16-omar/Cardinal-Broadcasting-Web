export interface ServiceCapability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  offerings: string[];
}

export const corporateServices: ServiceCapability[] = [
  {
    id: 'broadcasting',
    number: '01',
    title: 'Broadcasting',
    shortDescription:
      'Creating and operating high-impact media platforms that connect audiences with relevant programming and content.',
    detailedDescription:
      'We engineer and operate robust terrestrial and digital broadcast infrastructure, providing top-tier audio content, insightful talk formats, and music programming that engages millions of listeners daily across Nigeria.',
    iconName: 'Radio',
    offerings: [
      'Terrestrial radio operations & programming',
      'Live studio broadcast engineering',
      'Audience measurement & format design',
      'Syndication & transmission management',
    ],
  },
  {
    id: 'content',
    number: '02',
    title: 'Content',
    shortDescription:
      'Developing engaging audio, visual, and digital content designed to inform, entertain, and inspire.',
    detailedDescription:
      'Our creative production teams conceptualise, script, record, and master culturally resonant multimedia content tailored for multi-platform distribution and high audience retention.',
    iconName: 'Clapperboard',
    offerings: [
      'Audio documentary & podcast production',
      'Visual storytelling & video features',
      'Custom editorial programming',
      'Brand storytelling & creative copy',
    ],
  },
  {
    id: 'digital-media',
    number: '03',
    title: 'Digital Media',
    shortDescription:
      'Extending traditional media experiences through modern digital platforms and interactive streaming.',
    detailedDescription:
      'We leverage digital ecosystems, online streaming architectures, social distribution channels, and mobile interfaces to deliver 24/7 on-demand access to our media content.',
    iconName: 'Globe',
    offerings: [
      'Digital streaming & live online simulcasting',
      'Cross-platform social media strategy',
      'Mobile-first audience engagement apps',
      'Digital publishing & editorial portals',
    ],
  },
  {
    id: 'advertising-partnerships',
    number: '04',
    title: 'Advertising & Partnerships',
    shortDescription:
      'Creating opportunities for brands and organisations to connect with audiences through strategic media partnerships.',
    detailedDescription:
      'We design bespoke sponsorship models, commercial integration, brand alignment campaigns, and performance-driven advertising opportunities that deliver measurable commercial value.',
    iconName: 'TrendingUp',
    offerings: [
      'Targeted on-air & digital advertising campaigns',
      'Bespoke brand activations & sponsorships',
      'Strategic corporate partnerships',
      'Cross-media promotional packages',
    ],
  },
  {
    id: 'media-education',
    number: '05',
    title: 'Media Education',
    shortDescription:
      'Developing the next generation of media professionals through practical hands-on training and mentorship.',
    detailedDescription:
      'Through initiatives like City Media Academy (CMA), we provide structured, practical industry immersion across broadcasting, journalism, digital content creation, and production management.',
    iconName: 'GraduationCap',
    offerings: [
      'Broadcast presentation & on-air skills',
      'Audio & video production workflows',
      'Social media management & strategy',
      'Industry mentorship & career pathways',
    ],
  },
  {
    id: 'events-experiences',
    number: '06',
    title: 'Events & Experiences',
    shortDescription:
      'Creating meaningful audience experiences through large-scale events, activations, and community initiatives.',
    detailedDescription:
      'From annual flagship festivals like Praise in the City to corporate roundtables and grassroots activations, we produce experiential platforms that unite communities and amplify cultural moments.',
    iconName: 'Sparkles',
    offerings: [
      'Large-scale outdoor festival production',
      'Live concert & event management',
      'Corporate conferences & panel forums',
      'Community engagement activations',
    ],
  },
];
