import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { NewsCard } from '../components/ui/NewsCard';
import { FinalCta } from '../sections/FinalCta';
import { corporateNews } from '../data/news';
import { Search, Filter } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Corporate Announcement',
    'Talent & Education',
    'Events & Community',
    'Partnerships',
  ];

  const filteredNews = corporateNews.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        badge="Press & Editorial"
        title="News &"
        highlightText="Corporate Updates"
        description="Official company announcements, partnership briefings, talent milestones, and dispatches from the Cardinal Broadcasting ecosystem."
        breadcrumbs={[{ label: 'News' }]}
      />

      <section className="py-20 relative bg-[#08090E] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-[#0E1017] border border-white/10">
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#9B111E] text-white font-bold shadow-md shadow-[#9B111E]/30'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search announcements..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-[#D92039] transition-colors"
              />
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-3 bg-[#0E1017] rounded-3xl border border-white/10 p-8">
              <p className="text-lg font-bold text-white">No announcements found</p>
              <p className="text-sm text-slate-400">
                Try adjusting your search query or selecting a different category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
};
