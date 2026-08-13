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

  const contactBgImage =
    'https://lh3.googleusercontent.com/aida/AP1WRLS2iwlaYzeUZJfUMdepkLwYdMZQOXKndsZHQmbkfdkA9SCEZJhk5QLtpSoLJVCAQqccNYz6pweYTj5w_BwgkDQzMjpF8U6oeZ9pIxlTZ4GngDpPDxbkPUx4sj0DOz35e5ZFTceXBmICLi4ueLQTBCReArUcfb_5kk8tll8N5qB36xoPM2LYOv6pA7aSgtTJQiMCyILbFJFx9-1uaDucc2Ai7lcq_P2VqBaCJfPuRvN97ZBPzbPo7Pjnzyd';

  return (
    <section className="py-24 bg-[#11131c] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${contactBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-[#11131c]/90 to-[#11131c]/70" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Header Badges */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-semibold text-[#43dedd] shadow-[0_0_20px_rgba(67,222,221,0.2)]">
          <Sparkles className="w-4 h-4 text-[#43dedd]" />
          <span>PARTNERSHIP INVITATION</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          {t.contact_title}
        </h2>

        <p className="text-xl font-bold bg-gradient-to-r from-[#43dedd] to-[#b0c6ff] bg-clip-text text-transparent">
          {t.contact_subtitle}
        </p>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          {t.contact_desc}
        </p>

        {/* Action Button: Fill Form */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSupplierModal}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 hover:brightness-110 shadow-[0_0_30px_rgba(67,222,221,0.35)] transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>{t.contact_button}</span>
          </button>
        </div>

        {/* Direct Contact Email Cards */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          <div className="bg-[#191b24]/90 p-5 rounded-2xl border border-[#282933] flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#43dedd]/10 border border-[#43dedd]/30 flex items-center justify-center text-[#43dedd] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-mono">{t.footer_sales_support}</div>
              <a href="mailto:cs@3tgds.com" className="text-sm font-bold text-white hover:text-[#43dedd] transition-colors">
                cs@3tgds.com
              </a>
            </div>
          </div>

          <div className="bg-[#191b24]/90 p-5 rounded-2xl border border-[#282933] flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#b0c6ff]/10 border border-[#b0c6ff]/30 flex items-center justify-center text-[#b0c6ff] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-mono">{t.footer_software_sub}</div>
              <a href="mailto:cs@3tez.com" className="text-sm font-bold text-white hover:text-[#b0c6ff] transition-colors">
                cs@3tez.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
