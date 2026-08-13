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
      color: '#1d4ed8',
      bgGlow: '#eff6ff',
    },
    {
      id: 'immediate',
      icon: Zap,
      title: t.provide_immediate_title,
      desc: t.provide_immediate_desc,
      color: '#d97706',
      bgGlow: '#fffbeb',
    },
    {
      id: 'currency',
      icon: RefreshCw,
      title: t.provide_currency_title,
      desc: t.provide_currency_desc,
      color: '#0284c7',
      bgGlow: '#f0f9ff',
    },
    {
      id: 'merchants',
      icon: Store,
      title: t.provide_merchants_title,
      desc: t.provide_merchants_desc,
      color: '#059669',
      bgGlow: '#ecfdf5',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200 text-[#0f2b5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            VALUE PROPOSITION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] tracking-tight">
            {t.provide_title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] mx-auto rounded-full" />
        </div>

        {/* 4 Feature Circles Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {provides.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onOpenModal('products')}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#1d4ed8]/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center shadow-xs hover:shadow-md"
              >
                {/* Number Badge */}
                <span className="absolute top-4 right-4 font-mono text-xs text-slate-400 font-bold">
                  0{idx + 1}
                </span>

                {/* Circular Icon Holder */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                  style={{
                    backgroundColor: item.bgGlow,
                    border: `1.5px solid ${item.color}30`,
                  }}
                >
                  <IconComponent className="w-9 h-9" style={{ color: item.color }} />
                </div>

                {/* Item Content */}
                <h3 className="text-xl font-bold text-[#0f2b5c] mb-3 group-hover:text-[#1d4ed8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>

                {/* Micro Action link */}
                <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center space-x-1 text-xs text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
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
