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
    'https://lh3.googleusercontent.com/aida/AP1WRLtXU8oQYSDu5qnyRrfSdAQybvxoMuSRjjYQt1i1necBVSM9LpYZC33YkMrkliWlGuFah1ew9tjGgUrzFtxMB_sJ_XtzJ2VodLCX0W24Sbq_pH07Je7GQt4iQmE2V2YexyyeG6oKJXNHy8cvDGDGoTqCx7AjqdxTcoU6pe6FYmpbGhWz2RnMcqG31LR6jTzD9-kb5ev_3LEBIIIJuTISj2MCM6ZM7lYxAIalecOcPdVZ-rcj1vVKHJw7bx_n';

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#11131c]">
      {/* Background Image Overlay with Dark Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11131c] via-[#11131c]/90 to-[#11131c]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#11131c]/50 via-transparent to-[#11131c]" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2333_1px,transparent_1px),linear-gradient(to_bottom,#1f2333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1d1f29] border border-[#43dedd]/30 text-xs font-semibold text-[#43dedd] shadow-[0_0_15px_rgba(67,222,221,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#43dedd]" />
            <span>{t.hero_badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            {t.hero_title.split('Global').map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="bg-gradient-to-r from-[#43dedd] to-[#b0c6ff] bg-clip-text text-transparent"> Global</span>}
                {part}
              </React.Fragment>
            ))}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
            {t.hero_desc}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenModal('supplier')}
              className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 hover:shadow-[0_0_25px_rgba(67,222,221,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center space-x-2 shadow-lg"
            >
              <span>{t.hero_get_started}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenModal('products')}
              className="px-8 py-4 rounded-xl text-sm font-bold bg-[#1d1f29] border border-[#282933] text-gray-200 hover:text-white hover:border-[#43dedd]/50 hover:bg-[#282933] transition-all cursor-pointer flex items-center space-x-2"
            >
              <span>{t.hero_learn_more}</span>
            </button>
          </div>

          {/* Micro Stats Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#282933]/80 max-w-lg">
            <div>
              <div className="text-xl font-bold font-mono text-[#43dedd]">5,000+</div>
              <div className="text-xs text-gray-400">Global Digital Assets</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-[#b0c6ff]">15+</div>
              <div className="text-xs text-gray-400">OTA Channels</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-emerald-400">&lt; 100ms</div>
              <div className="text-xs text-gray-400">Voucher Sync</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Concentric Ring Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Outer Spinning Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#43dedd]/30 animate-[spin_25s_linear_infinite]" />

            {/* Middle Counter-Spinning Ring */}
            <div className="absolute inset-6 rounded-full border border-dashed border-[#b0c6ff]/40 animate-[spin_18s_linear_infinite_reverse]" />

            {/* Inner Glow Ring */}
            <div className="absolute inset-14 rounded-full border border-[#43dedd]/50 shadow-[0_0_30px_rgba(67,222,221,0.2)] bg-[#191b24]/80 backdrop-blur-md" />

            {/* Center Core Node */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#191b24] via-[#1d1f29] to-[#282933] border-2 border-[#43dedd] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(67,222,221,0.4)] text-center p-2">
              <div className="w-12 h-12 rounded-full bg-[#43dedd]/10 border border-[#43dedd]/40 flex items-center justify-center text-[#43dedd] mb-1">
                <Plane className="w-6 h-6 animate-bounce" />
              </div>
              <span className="text-xs font-bold text-white tracking-widest font-mono">
                3T <span className="text-[#43dedd]">TTT</span>
              </span>
              <span className="text-[9px] text-gray-400 uppercase">Live Node</span>
            </div>

            {/* Floating Orbit Orbiting Badges */}
            <div className="absolute top-2 left-6 px-3 py-1.5 rounded-lg bg-[#1d1f29]/90 border border-[#43dedd]/40 text-[11px] font-medium text-gray-200 shadow-xl flex items-center space-x-1.5 animate-pulse">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant QR</span>
            </div>

            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#1d1f29]/90 border border-[#b0c6ff]/40 text-[11px] font-medium text-gray-200 shadow-xl flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-[#b0c6ff]" />
              <span>Trip.com / Fliggy</span>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-3 py-1 rounded-lg bg-[#1d1f29]/90 border border-emerald-500/40 text-[11px] font-medium text-emerald-400 shadow-xl flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Multi-Currency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
