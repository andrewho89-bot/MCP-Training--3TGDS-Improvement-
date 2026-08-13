import React, { useState } from 'react';
import { X, Calendar, Clock, Newspaper, ArrowRight } from 'lucide-react';
import { Language, NewsArticle } from '../../types';
import { translations } from '../../data/translations';
import { newsArticlesData } from '../../data/mockData';

interface NewsModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ currentLang, onClose }) => {
  const t = translations[currentLang];
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#191b24] border border-[#282933] rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#282933] text-gray-400 hover:text-white hover:bg-[#32343e] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-mono text-[#43dedd]">
            <Newspaper className="w-3.5 h-3.5" />
            <span>PRESS & ANNOUNCEMENTS</span>
          </div>
          <h2 className="text-3xl font-extrabold">{t.news_title}</h2>
          <p className="text-gray-400 text-sm font-light">{t.news_subtitle}</p>
        </div>

        {selectedArticle ? (
          /* Article Detail View */
          <div className="space-y-6 animate-fadeIn">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-xs text-[#43dedd] hover:underline flex items-center space-x-1 cursor-pointer font-bold"
            >
              <span>&larr; Back to all announcements</span>
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#282933]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.titleKey}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-400 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#282933] text-[#43dedd] font-bold">
                {selectedArticle.category}
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedArticle.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedArticle.readTime}</span>
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white leading-snug">
              {selectedArticle.titleKey}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed font-light whitespace-pre-line bg-[#11131c] p-6 rounded-2xl border border-[#282933]">
              {selectedArticle.contentKey}
            </p>
          </div>
        ) : (
          /* News List View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticlesData.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-[#1d1f29] rounded-2xl overflow-hidden border border-[#282933] hover:border-[#43dedd]/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-gray-800 relative">
                    <img
                      src={article.image}
                      alt={article.titleKey}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#11131c]/80 text-[#43dedd] border border-[#43dedd]/30">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[11px] text-gray-400 font-mono flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#43dedd] transition-colors leading-snug">
                      {article.titleKey}
                    </h4>

                    <p className="text-xs text-gray-400 font-light line-clamp-3">
                      {article.summaryKey}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center text-xs font-bold text-[#43dedd] space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-[#282933] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#282933] hover:bg-[#32343e] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
