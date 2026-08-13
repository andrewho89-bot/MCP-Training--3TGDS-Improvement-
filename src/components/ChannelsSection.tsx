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

  const mapBgImage =
    'https://lh3.googleusercontent.com/aida/AP1WRLsCjFpZ0vpf1xmJ_VqSS-ZOEwAA9MjCyyU6VYgpazHeaNNYvg-W_saOocMEouE-5x8MWoTHsQOJiA_hReDNL9c42OeZ-LCjAs7XlFj0VXCRelNhimMlKrqArzEQuA4ySsnIeqijLjrcwG0u9rmGSM7eEvVeXKCN3tkCznCJdH9_fEOpgmWPUyMQYD4XAZw2FC8FPuJkUsbDN4zy8jHkU4MqjXirifp5lZo_Gu2fdO0i2VUBVO3KhSrKIEwI';

  const filteredChannels =
    activeCategory === 'ALL'
      ? channelsData
      : channelsData.filter((c) => c.category === activeCategory);

  return (
    <section className="py-24 bg-[#141622] relative overflow-hidden border-t border-[#282933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1d1f29] border border-[#282933] text-xs font-mono text-[#43dedd]">
            GLOBAL REACH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.channels_title}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            {t.channels_subtitle}
          </p>
        </div>

        {/* Global Distribution Map Showcase Graphic */}
        <div className="relative rounded-3xl bg-[#191b24] border border-[#282933] p-8 lg:p-12 mb-16 overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
            style={{ backgroundImage: `url(${mapBgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191b24] via-[#191b24]/80 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Summary & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-md bg-[#282933] text-[#43dedd] text-xs font-mono font-bold">
                DISTRIBUTION NETWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Connecting 500+ Local Merchants to International OTA Gateways
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {t.channels_summary}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenSupplierModal}
                  className="px-6 py-3 rounded-xl bg-[#43dedd] hover:bg-[#34c7c6] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg flex items-center space-x-2"
                >
                  <span>Connect Your Inventory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Circular Progress Indicators */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Stat 1: 15+ Channels */}
              <div className="bg-[#11131c]/90 rounded-2xl p-6 border border-[#282933] flex flex-col items-center text-center shadow-lg hover:border-[#43dedd]/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#282933" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#43dedd"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-white">+15</span>
                </div>
                <span className="text-xs text-gray-300 font-medium">{t.stat_channels}</span>
              </div>

              {/* Stat 2: 500+ Domestic */}
              <div className="bg-[#11131c]/90 rounded-2xl p-6 border border-[#282933] flex flex-col items-center text-center shadow-lg hover:border-[#b0c6ff]/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#282933" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#b0c6ff"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="50"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-white">+500</span>
                </div>
                <span className="text-xs text-gray-300 font-medium">{t.stat_domestic}</span>
              </div>

              {/* Stat 3: 5000+ Transnational */}
              <div className="bg-[#11131c]/90 rounded-2xl p-6 border border-[#282933] flex flex-col items-center text-center shadow-lg hover:border-amber-400/50 transition-colors">
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="#282933" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#f59e0b"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="200"
                      strokeDashoffset="15"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono text-xl font-black text-white">+5000</span>
                </div>
                <span className="text-xs text-gray-300 font-medium">{t.stat_transnational}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partner Logo Strip & Volume Figures */}
        <div className="mb-12 bg-[#191b24] p-6 rounded-2xl border border-[#282933] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#282933] pb-3">
            <span className="text-xs font-mono uppercase text-[#43dedd] font-bold tracking-wider flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Integrated Channel Distribution Brand Network</span>
            </span>
            <span className="text-[11px] font-mono text-gray-400">
              Real-time API Switch Latency &lt; 150ms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {channelsData.slice(0, 14).map((ch) => (
              <div
                key={ch.id}
                onClick={() => onSelectChannel(ch)}
                className="bg-[#11131c] hover:bg-[#282933] border border-[#282933] hover:border-[#43dedd]/50 p-2.5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white mb-1 shadow-md group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: ch.accentColor }}
                >
                  {ch.logoText.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-gray-200 group-hover:text-[#43dedd] truncate w-full">
                  {ch.logoText}
                </span>
                <span className="text-[10px] text-[#43dedd] font-mono mt-0.5">
                  {ch.activeProducts.toLocaleString()} Goods
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Channel Filter & Grid */}
        <div className="space-y-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#282933] pb-4">
            <div className="flex items-center space-x-2">
              <Globe2 className="w-5 h-5 text-[#43dedd]" />
              <span className="text-lg font-bold text-white">Live Channel Node Status</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['ALL', 'OTA', 'E-Commerce', 'Fintech', 'Bank'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#43dedd] text-slate-950 shadow-md'
                      : 'bg-[#1d1f29] text-gray-400 hover:text-white border border-[#282933]'
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
                className="group relative bg-[#1d1f29] rounded-xl p-5 border border-[#282933] hover:border-[#43dedd] hover:bg-[#282933] transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: channel.accentColor }}
                      >
                        {channel.logoText.slice(0, 2).toUpperCase()}
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase text-white"
                        style={{ backgroundColor: `${channel.accentColor}aa` }}
                      >
                        {channel.category}
                      </span>
                    </div>
                    <span className="flex items-center space-x-1 text-[10px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{channel.status}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#43dedd] transition-colors mb-1">
                    {channel.logoText}
                  </h4>
                  <div className="inline-block px-2 py-0.5 rounded bg-[#11131c] text-[10px] font-mono text-[#43dedd] font-semibold mb-2 border border-[#282933]">
                    {channel.activeProducts.toLocaleString()} Active Goods
                  </div>
                  <p className="text-xs text-gray-400 font-light line-clamp-2">
                    {channel.descriptionKey}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#282933]/60 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Sync: {channel.syncLatency}</span>
                  <span className="text-[#43dedd] group-hover:underline">View Node &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
