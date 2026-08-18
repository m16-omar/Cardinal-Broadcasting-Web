import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag, UserCheck } from 'lucide-react';
import { corporateNews } from '../data/news';
import { NewsCard } from '../components/ui/NewsCard';


export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = corporateNews.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedArticles = corporateNews
    .filter((item) => item.id !== article.id)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#08090E] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B111E]/15 border border-[#D92039]/30 text-[#D92039] text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D92039]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <UserCheck className="w-4 h-4 text-slate-400" />
                {article.author}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-96 md:h-[450px]">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed border-l-2 border-[#D92039] pl-4 italic">
            {article.excerpt}
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        {/* Official Editorial Tag */}
        <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/10 space-y-2">
          <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block">
            Official Statement
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            Issued by the Corporate Communications & Institutional Affairs desk at Cardinal Broadcasting Limited. For press inquiries, contact <a href="mailto:press@cardinalbroadcasting.org" className="text-[#D92039] hover:underline">press@cardinalbroadcasting.org</a>.
          </p>
        </div>

        {/* Related News Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-12 border-t border-white/10 space-y-8">
            <h3 className="text-2xl font-bold text-white">More From Cardinal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel, index) => (
                <NewsCard key={rel.id} article={rel} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
