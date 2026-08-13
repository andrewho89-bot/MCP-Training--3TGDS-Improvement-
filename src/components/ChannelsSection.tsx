import React, { useState } from 'react';
import { Globe2, Activity, CheckCircle2, ArrowUpRight, Zap, RefreshCw, Layers, Sparkles } from 'lucide-react';
import { Language, ChannelItem } from '../types';
import { translations } from '../data/translations';
import { channelsData } from '../data/mockData';

interface ChannelsSectionProps {
  currentLang: Language;
  onSelectChannel: (channel: ChannelItem) => void;
  onOpenSupplierModal: () => void;
}

export const ChannelsSection: React.FC<ChannelsSectionProps> = ({
  currentLang,
  onSelectChannel,
  onOpenSupplierModal,
}) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredChannels =
    activeCategory === 'ALL'
      ? channelsData
      : channelsData.filter((c) => c.category === activeCategory);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200 text-[#0f2b5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            GLOBAL REACH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2b5c] tracking-tight">
            {t.channels_title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            {t.channels_subtitle}
          </p>
        </div>

        {/* Global Distribution Map Showcase Graphic */}
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 lg:p-12 mb-16 overflow-hidden shadow-xs">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Summary & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-md bg-blue-50 text-[#1d4ed8] text-xs font-mono font-bold">
                DISTRIBUTION NETWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] leading-snug">
                Connecting 500+ Local Merchants to International OTA Gateways
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {t.channels_summary}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenSupplierModal}
                  className="px-6 py-3 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center space-x-2"
                >
                  <span>Connect Your Inventory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Circular Progress Indicators */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Stat 1: 15+ Channels */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-2xs hover:border-[#1d4ed8]/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#1d4ed8"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-[#0f2b5c]">+15</span>
                </div>
                <span className="text-xs text-slate-700 font-bold">{t.stat_channels}</span>
              </div>

              {/* Stat 2: 500+ Domestic */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-2xs hover:border-[#0284c7]/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#0284c7"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="50"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-[#0f2b5c]">+500</span>
                </div>
                <span className="text-xs text-slate-700 font-bold">{t.stat_domestic}</span>
              </div>

              {/* Stat 3: 5000+ Transnational */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-2xs hover:border-amber-500/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#d97706"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="15"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-[#0f2b5c]">+5000</span>
                </div>
                <span className="text-xs text-slate-700 font-bold">{t.stat_transnational}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partner Logo Strip & Volume Figures */}
        <div className="mb-12 bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <span className="text-xs font-mono uppercase text-[#1d4ed8] font-bold tracking-wider flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#30c3b2]" />
              <span>Integrated Channel Distribution Brand Network</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Real-time API Switch Latency &lt; 150ms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {channelsData.slice(0, 14).map((ch) => (
              <div
                key={ch.id}
                onClick={() => onSelectChannel(ch)}
                className="bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#1d4ed8]/40 p-2.5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center group shadow-2xs"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white mb-1 shadow-xs group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: ch.accentColor }}
                >
                  {ch.logoText.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-[#0f2b5c] group-hover:text-[#1d4ed8] truncate w-full">
                  {ch.logoText}
                </span>
                <span className="text-[10px] text-[#1d4ed8] font-mono font-semibold mt-0.5">
                  {ch.activeProducts.toLocaleString()} Goods
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Channel Filter & Grid */}
        <div className="space-y-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-2">
              <Globe2 className="w-5 h-5 text-[#1d4ed8]" />
              <span className="text-lg font-bold text-[#0f2b5c]">Live Channel Node Status</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['ALL', 'OTA', 'E-Commerce', 'Fintech', 'Bank'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1d4ed8] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-[#0f2b5c] border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Channel Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredChannels.map((channel) => (
              <div
                key={channel.id}
                onClick={() => onSelectChannel(channel)}
                className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-[#1d4ed8] hover:bg-blue-50/30 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-xs"
                        style={{ backgroundColor: channel.accentColor }}
                      >
                        {channel.logoText.slice(0, 2).toUpperCase()}
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase text-white"
                        style={{ backgroundColor: channel.accentColor }}
                      >
                        {channel.category}
                      </span>
                    </div>
                    <span className="flex items-center space-x-1 text-[10px] text-emerald-600 font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>{channel.status}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0f2b5c] group-hover:text-[#1d4ed8] transition-colors mb-1">
                    {channel.logoText}
                  </h4>
                  <div className="inline-block px-2 py-0.5 rounded bg-blue-50 text-[10px] font-mono text-[#1d4ed8] font-bold mb-2 border border-blue-100">
                    {channel.activeProducts.toLocaleString()} Active Goods
                  </div>
                  <p className="text-xs text-slate-600 font-normal line-clamp-2">
                    {channel.descriptionKey}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Sync: {channel.syncLatency}</span>
                  <span className="text-[#1d4ed8] font-bold group-hover:underline">View Node &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
