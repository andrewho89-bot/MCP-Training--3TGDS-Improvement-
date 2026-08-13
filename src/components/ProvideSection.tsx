import React from 'react';
import { Globe, Zap, RefreshCw, ArrowRight, Store } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProvideSectionProps {
  currentLang: Language;
  onOpenModal: (modalName: 'about' | 'news' | 'supplier' | 'products' | 'team') => void;
}

export const ProvideSection: React.FC<ProvideSectionProps> = ({ currentLang, onOpenModal }) => {
  const t = translations[currentLang];

  const provides = [
    {
      id: 'transnational',
      icon: Globe,
      title: t.provide_transnational_title,
      desc: t.provide_transnational_desc,
      color: '#43dedd',
      bgGlow: 'rgba(67, 222, 221, 0.15)',
    },
    {
      id: 'immediate',
      icon: Zap,
      title: t.provide_immediate_title,
      desc: t.provide_immediate_desc,
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.15)',
    },
    {
      id: 'currency',
      icon: RefreshCw,
      title: t.provide_currency_title,
      desc: t.provide_currency_desc,
      color: '#3b82f6',
      bgGlow: 'rgba(59, 130, 246, 0.15)',
    },
    {
      id: 'merchants',
      icon: Store,
      title: t.provide_merchants_title,
      desc: t.provide_merchants_desc,
      color: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
    },
  ];

  return (
    <section className="py-24 bg-[#141622] relative overflow-hidden border-t border-[#282933]">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#43dedd]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1d1f29] border border-[#282933] text-xs font-mono text-[#43dedd]">
            VALUE PROPOSITION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.provide_title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#43dedd] to-[#2563eb] mx-auto rounded-full" />
        </div>

        {/* 4 Feature Circles Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {provides.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onOpenModal('products')}
                className="group relative bg-[#1d1f29] rounded-2xl p-8 border border-[#282933] hover:border-[#43dedd]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center shadow-lg"
              >
                {/* Number Badge */}
                <span className="absolute top-4 right-4 font-mono text-xs text-gray-500 font-bold">
                  0{idx + 1}
                </span>

                {/* Circular Icon Holder */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                  style={{
                    backgroundColor: item.bgGlow,
                    border: `1.5px solid ${item.color}40`,
                    boxShadow: `0 0 20px ${item.bgGlow}`,
                  }}
                >
                  <IconComponent className="w-9 h-9" style={{ color: item.color }} />
                </div>

                {/* Item Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#43dedd] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Micro Action link */}
                <div className="mt-6 pt-4 border-t border-[#282933] w-full flex items-center justify-center space-x-1 text-xs text-[#43dedd] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
