import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { NewsArticle } from '../../data/news';


interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col justify-between rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/40 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#9B111E]/10"
    >
      <div>
        {/* Thumbnail Image */}
        <Link to={`/news/${article.slug}`} className="block relative h-48 sm:h-56 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#08090E]/80 backdrop-blur-md border border-white/15 text-[#D92039] shadow-md">
              {article.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D92039]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#D92039] transition-colors line-clamp-2">
            <Link to={`/news/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 font-normal">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Read More */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-[#D92039] transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};
