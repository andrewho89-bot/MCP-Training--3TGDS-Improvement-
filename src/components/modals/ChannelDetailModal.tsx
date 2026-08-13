import React from 'react';
import { X, Globe2, Activity, ShieldCheck, DollarSign, ArrowRight, Zap } from 'lucide-react';
import { ChannelItem, Language } from '../../types';

interface ChannelDetailModalProps {
  channel: ChannelItem;
  currentLang: Language;
  onClose: () => void;
  onOpenSupplierModal: () => void;
}

export const ChannelDetailModal: React.FC<ChannelDetailModalProps> = ({
  channel,
  onClose,
  onOpenSupplierModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#191b24] border border-[#282933] rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#282933] text-gray-400 hover:text-white hover:bg-[#32343e] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg font-mono"
            style={{ backgroundColor: channel.accentColor }}
          >
            {channel.logoText.substring(0, 2)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-[#43dedd] uppercase">
                {channel.category} &bull; {channel.region}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">
                {channel.status}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{channel.name}</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 font-light leading-relaxed bg-[#11131c] p-4 rounded-xl border border-[#282933]">
          {channel.descriptionKey}
        </p>

        {/* Technical & Performance Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-[#1d1f29] p-4 rounded-xl border border-[#282933]">
            <div className="text-gray-400 text-[10px]">API Sync Latency</div>
            <div className="text-base font-bold text-[#43dedd] mt-1">{channel.syncLatency}</div>
          </div>

          <div className="bg-[#1d1f29] p-4 rounded-xl border border-[#282933]">
            <div className="text-gray-400 text-[10px]">Active Products</div>
            <div className="text-base font-bold text-[#b0c6ff] mt-1">
              {channel.activeProducts.toLocaleString()}
            </div>
          </div>

          <div className="bg-[#1d1f29] p-4 rounded-xl border border-[#282933] col-span-2 sm:col-span-1">
            <div className="text-gray-400 text-[10px]">Supported Currencies</div>
            <div className="text-xs font-bold text-white mt-1">
              {channel.supportedCurrencies.join(', ')}
            </div>
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase text-gray-400 font-bold">
            Automated Protocol Features
          </h4>
          <ul className="text-xs text-gray-300 space-y-1.5 font-light">
            <li className="flex items-center space-x-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Real-time webhook callback for instant voucher generation</span>
            </li>
            <li className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cryptographic TTT validation token signed at turnstile gates</span>
            </li>
            <li className="flex items-center space-x-2">
              <DollarSign className="w-3.5 h-3.5 text-[#b0c6ff]" />
              <span>Automated cross-currency FX clearing & settlement</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#282933] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenSupplierModal();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#43dedd] hover:bg-[#34c7c6] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <span>Distribute to {channel.logoText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#282933] hover:bg-[#32343e] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
