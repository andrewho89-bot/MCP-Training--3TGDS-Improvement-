import React from 'react';
import { X, ShieldCheck, Globe, Zap, Cpu, Lock, CheckCircle } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../data/translations';

interface AboutModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ currentLang, onClose }) => {
  const t = translations[currentLang];

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
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-mono text-[#43dedd]">
            <Globe className="w-3.5 h-3.5" />
            <span>COMPANY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-[#43dedd]">3T GDS</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Travel Trust Ticket integrated services connecting global channel distribution systems.
          </p>
        </div>

        {/* Core Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1d1f29] p-6 rounded-2xl border border-[#282933] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#43dedd]/10 border border-[#43dedd]/30 flex items-center justify-center text-[#43dedd]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Global Digital Asset Ecosystem</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              3T GDS acts as a high-speed digital bridge between local travel suppliers (theme parks, attractions, transit operators, restaurants) and international distribution giants like Trip.com, Fliggy, Meituan, and ezTravel.
            </p>
          </div>

          <div className="bg-[#1d1f29] p-6 rounded-2xl border border-[#282933] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#b0c6ff]/10 border border-[#b0c6ff]/30 flex items-center justify-center text-[#b0c6ff]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Travel Trust Ticket (TTT) Protocol</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Our proprietary TTT cryptographic verification engine prevents ticket duplication, double-redemption, and unauthorized secondary market reselling while guaranteeing sub-second verification at venue turnstiles.
            </p>
          </div>
        </div>

        {/* TTT System Flow Diagram */}
        <div className="bg-[#11131c] p-6 rounded-2xl border border-[#282933] space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#43dedd] font-bold">
            Travel Trust Ticket Architecture Flow
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-xs">
            <div className="bg-[#191b24] p-4 rounded-xl border border-[#282933]">
              <div className="font-bold text-white mb-1">1. Supplier</div>
              <div className="text-gray-400 text-[11px]">Uploads inventory & rate rules</div>
            </div>

            <div className="bg-[#191b24] p-4 rounded-xl border border-[#43dedd]/40 shadow-[0_0_15px_rgba(67,222,221,0.15)]">
              <div className="font-bold text-[#43dedd] mb-1">2. 3T GDS Engine</div>
              <div className="text-gray-400 text-[11px]">TTT Tokenization & FX Clearing</div>
            </div>

            <div className="bg-[#191b24] p-4 rounded-xl border border-[#282933]">
              <div className="font-bold text-white mb-1">3. Global OTAs</div>
              <div className="text-gray-400 text-[11px]">Trip.com / Fliggy / Meituan</div>
            </div>

            <div className="bg-[#191b24] p-4 rounded-xl border border-emerald-500/40">
              <div className="font-bold text-emerald-400 mb-1">4. Traveler</div>
              <div className="text-gray-400 text-[11px]">Dynamic QR Gate Redemption</div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white">Certifications & Security Guarantees</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center space-x-2 bg-[#1d1f29] p-3 rounded-xl border border-[#282933]">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1d1f29] p-3 rounded-xl border border-[#282933]">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>PCI-DSS Level 1 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1d1f29] p-3 rounded-xl border border-[#282933]">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>99.99% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-[#282933] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#282933] hover:bg-[#32343e] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
