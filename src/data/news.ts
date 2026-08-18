export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Corporate Announcement' | 'Talent & Education' | 'Events & Community' | 'Partnerships' | 'Industry Insights';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  author: string;
}

export const corporateNews: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'expanding-media-education-city-media-academy-cohort',
    title: 'City Media Academy Opens New Cohort for Aspiring Broadcast & Digital Creators',
    category: 'Talent & Education',
    date: 'August 14, 2026',
    readTime: '3 min read',
    excerpt:
      'Cardinal Broadcasting reaffirms its commitment to youth empowerment by launching the next intensive hands-on media training cohort at City Media Academy.',
    content: [
      'Cardinal Broadcasting Limited has announced the commencement of admissions for the upcoming media training cycle at City Media Academy (CMA). The program is designed to equip young creative professionals with modern, practical capabilities in audio engineering, on-air presentation, television broadcasting, and digital storytelling.',
      'As the African media landscape rapidly evolves, the demand for versatile media practitioners who understand both traditional broadcast ethics and modern digital distribution has never been higher.',
      'Through direct studio immersion at Cardinal Broadcasting facilities, students will gain live studio experience, working alongside seasoned industry producers, sound designers, and content executives.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    author: 'Cardinal Communications Desk',
  },
  {
    id: 'news-2',
    slug: 'cardinal-broadcasting-strategic-media-partnerships-2026',
    title: 'Cardinal Broadcasting Deepens Strategic Brand Collaborations Across Digital and Terrestrial Audio',
    category: 'Partnerships',
    date: 'July 28, 2026',
    readTime: '4 min read',
    excerpt:
      'Cardinal Broadcasting unveils new integrated media partnership solutions, bridging on-air engagement with omni-channel digital storytelling for leading corporate brands.',
    content: [
      'In line with its strategic roadmap to deliver measurable commercial value to corporate partners, Cardinal Broadcasting Limited has rolled out enhanced advertising and content integration frameworks.',
      'The multi-tier offering allows forward-thinking brands to co-create contextual audio experiences, bespoke sponsored segments, and interactive activations across City 105.1 FM, 93.5 Area FM, and associated digital touchpoints.',
      '"Our focus is on building collaborative partnerships that go beyond traditional commercial spots," noted the corporate strategy team. "We are empowering brands to connect authentically with diverse Nigerian audiences across metropolitan and grassroots demographics."',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    author: 'Corporate Partnerships Division',
  },
  {
    id: 'news-3',
    slug: 'praise-in-the-city-annual-thanksgiving-festival-preparations',
    title: 'Preparations Underway for Praise in the City: Uniting Communities in Gratitude',
    category: 'Events & Community',
    date: 'July 10, 2026',
    readTime: '3 min read',
    excerpt:
      'Cardinal Broadcasting initiates planning for the annual Praise in the City festival on the Lagos mainland, upholding the foundational creed that praising God has no price tag.',
    content: [
      'Preparations have commenced for this year’s edition of Praise in the City, the flagship gospel music concert and Thanksgiving festival organized through the Cardinal Broadcasting ecosystem.',
      'Rooted in the philosophy that "Praising God Has No Price Tag," the festival remains completely free to the public, welcoming attendees from all walks of life for an inspiring day of worship, gospel music, and shared community fellowship.',
      'Further official updates, security protocols, and event schedules will be published in subsequent briefings through official channels and dedicated event platforms.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    author: 'Events & Community Team',
  },
  {
    id: 'news-4',
    slug: 'advancing-african-broadcasting-technology-and-digital-workflows',
    title: 'Modernising Broadcast Infrastructure: Cardinal’s Roadmap for Digital Audio Convergence',
    category: 'Corporate Announcement',
    date: 'June 22, 2026',
    readTime: '4 min read',
    excerpt:
      'A look into Cardinal Broadcasting’s continuous technological investments to optimize audio clarity, streaming low-latency delivery, and digital accessibility.',
    content: [
      'Cardinal Broadcasting Limited continues to modernize its engineering architecture to support high-fidelity digital audio delivery, interactive mobile streaming, and energy-resilient transmitter management.',
      'The engineering upgrades enable listeners across regional corridors and global diaspora communities to experience crystal-clear audio feeds with minimal data consumption.',
      'This technological foundation supports both current operations and future media expansion across the West African sub-region.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    author: 'Engineering & Technical Division',
  },
];
