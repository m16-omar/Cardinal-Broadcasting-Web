import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { NewsCard } from '../components/ui/NewsCard';
import { corporateNews } from '../data/news';

export const NewsPreview: React.FC = () => {
  const latestNews = corporateNews.slice(0, 3);

  return (
    <section className="py-24 md:py-32 relative bg-[#08090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Corporate Editorial"
            title="From"
            highlightText="Cardinal"
            subtitle="Company announcements, talent initiatives, industry milestones, and updates across our media ecosystem."
          />
          <Button href="/news" variant="secondary" size="md" icon="arrow-right">
            View All News
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
