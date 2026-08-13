import React from 'react';
import { ArrowRight, ShieldCheck, Plane, Zap, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLang: Language;
  onOpenModal: (modalName: 'about' | 'news' | 'supplier' | 'products' | 'team') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onOpenModal }) => {
  const t = translations[currentLang];

  const heroBgImage =
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80';

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white text-[#0f2b5c]">
      {/* Light Background Pattern with Subtle Blue Mesh */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-multiply scale-105"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/60" />

      {/* Decorative Light Blue Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1d4ed8] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#30c3b2]" />
            <span>{t.hero_badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f2b5c] leading-[1.15]">
            {t.hero_title.split('Global').map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-[#1d4ed8]"> Global</span>}
                {part}
              </React.Fragment>
            ))}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
            {t.hero_desc}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenModal('supplier')}
              className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white hover:brightness-105 hover:shadow-lg transition-all cursor-pointer flex items-center space-x-2 shadow-sm"
            >
              <span>{t.hero_get_started}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenModal('products')}
              className="px-8 py-4 rounded-xl text-sm font-bold bg-slate-50 border border-slate-200 text-[#0f2b5c] hover:text-[#1d4ed8] hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer flex items-center space-x-2 shadow-2xs"
            >
              <span>{t.hero_learn_more}</span>
            </button>
          </div>

          {/* Micro Stats Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-lg">
            <div>
              <div className="text-xl font-black font-mono text-[#1d4ed8]">5,000+</div>
              <div className="text-xs text-slate-600 font-medium">Global Digital Assets</div>
            </div>
            <div>
              <div className="text-xl font-black font-mono text-[#0284c7]">15+</div>
              <div className="text-xs text-slate-600 font-medium">OTA Channels</div>
            </div>
            <div>
              <div className="text-xl font-black font-mono text-emerald-600">&lt; 100ms</div>
              <div className="text-xs text-slate-600 font-medium">Voucher Sync</div>
            </div>
          </div>
        </div>

        {/* Right Column: Concentric Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Outer Spinning Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-200 animate-[spin_25s_linear_infinite]" />

            {/* Middle Counter-Spinning Ring */}
            <div className="absolute inset-6 rounded-full border border-dashed border-cyan-300 animate-[spin_18s_linear_infinite_reverse]" />

            {/* Inner Glow Ring */}
            <div className="absolute inset-14 rounded-full border border-blue-300 shadow-md bg-white/90 backdrop-blur-md" />

            {/* Center Core Node */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#0f2b5c] via-[#1d4ed8] to-[#0284c7] text-white flex flex-col items-center justify-center shadow-lg text-center p-2">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#30c3b2] mb-1">
                <Plane className="w-6 h-6 animate-bounce" />
              </div>
              <span className="text-xs font-black tracking-widest font-mono">
                3T <span className="text-[#30c3b2]">TTT</span>
              </span>
              <span className="text-[9px] text-blue-100 uppercase font-mono">Live Node</span>
            </div>

            {/* Floating Orbit Orbiting Badges */}
            <div className="absolute top-2 left-6 px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[11px] font-bold text-[#0f2b5c] shadow-md flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Instant QR</span>
            </div>

            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[11px] font-bold text-[#0f2b5c] shadow-md flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Trip.com / Fliggy</span>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-3 py-1 rounded-lg bg-white border border-emerald-200 text-[11px] font-bold text-emerald-700 shadow-md flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              <span>Multi-Currency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
