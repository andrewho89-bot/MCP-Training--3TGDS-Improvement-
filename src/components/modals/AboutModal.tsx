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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#0f2b5c] space-y-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-[#0f2b5c] hover:bg-slate-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            <Globe className="w-3.5 h-3.5" />
            <span>COMPANY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2b5c]">
            About <span className="text-[#1d4ed8]">3T GDS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Travel Trust Ticket integrated services connecting global channel distribution systems.
          </p>
        </div>

        {/* Core Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1d4ed8]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0f2b5c]">Global Digital Asset Ecosystem</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              3T GDS acts as a high-speed digital bridge between local travel suppliers (theme parks, attractions, transit operators, restaurants) and international distribution giants like Trip.com, Fliggy, Meituan, and ezTravel.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0284c7]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0f2b5c]">Travel Trust Ticket (TTT) Protocol</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Our proprietary TTT cryptographic verification engine prevents ticket duplication, double-redemption, and unauthorized secondary market reselling while guaranteeing sub-second verification at venue turnstiles.
            </p>
          </div>
        </div>

        {/* TTT System Flow Diagram */}
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#1d4ed8] font-bold">
            Travel Trust Ticket Architecture Flow
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-[#0f2b5c] mb-1">1. Supplier</div>
              <div className="text-slate-500 text-[11px]">Uploads inventory & rate rules</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-300 shadow-xs">
              <div className="font-bold text-[#1d4ed8] mb-1">2. 3T GDS Engine</div>
              <div className="text-slate-500 text-[11px]">TTT Tokenization & FX Clearing</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="font-bold text-[#0f2b5c] mb-1">3. Global OTAs</div>
              <div className="text-slate-500 text-[11px]">Trip.com / Fliggy / Meituan</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-emerald-300 shadow-2xs">
              <div className="font-bold text-emerald-700 mb-1">4. Traveler</div>
              <div className="text-slate-500 text-[11px]">Dynamic QR Gate Redemption</div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[#0f2b5c]">Certifications & Security Guarantees</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-[#0f2b5c]">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-[#0f2b5c]">PCI-DSS Level 1 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-[#0f2b5c]">99.99% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0f2b5c] font-bold text-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
