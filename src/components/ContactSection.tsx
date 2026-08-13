import React from 'react';
import { Send, FileText, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
  onOpenSupplierModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, onOpenSupplierModal }) => {
  const t = translations[currentLang];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100 text-[#0f2b5c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Header Badges */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1d4ed8] shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#30c3b2]" />
          <span>PARTNERSHIP INVITATION</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-[#0f2b5c] tracking-tight">
          {t.contact_title}
        </h2>

        <p className="text-xl font-bold text-[#1d4ed8]">
          {t.contact_subtitle}
        </p>

        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          {t.contact_desc}
        </p>

        {/* Action Button: Fill Form */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSupplierModal}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white hover:brightness-105 shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>{t.contact_button}</span>
          </button>
        </div>

        {/* Direct Contact Email Cards */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 flex items-center space-x-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1d4ed8] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-mono font-bold">{t.footer_sales_support}</div>
              <a href="mailto:cs@3tgds.com" className="text-sm font-bold text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors">
                cs@3tgds.com
              </a>
            </div>
          </div>

          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 flex items-center space-x-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0284c7] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-mono font-bold">{t.footer_software_sub}</div>
              <a href="mailto:cs@3tez.com" className="text-sm font-bold text-[#0f2b5c] hover:text-[#0284c7] transition-colors">
                cs@3tez.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
