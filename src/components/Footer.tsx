import React from 'react';
import { Globe, MapPin, Mail, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  currentLang: Language;
  onOpenModal: (modalName: 'about' | 'news' | 'supplier' | 'products' | 'team') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenModal }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#0b192e] text-slate-300 border-t border-slate-800 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid: Brand, Nav, Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" darkText={false} />
            <p className="text-slate-300 leading-relaxed font-normal">
              {t.brand_subtitle}
            </p>
            <div className="pt-2 text-slate-400 font-mono">
              <p>{t.footer_rights}</p>
              <p className="text-slate-200 font-medium mt-1">{t.footer_taiwan_company}</p>
            </div>
          </div>

          {/* Quick Nav Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenModal('about')} className="hover:text-[#30c3b2] transition-colors cursor-pointer">
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('news')} className="hover:text-[#30c3b2] transition-colors cursor-pointer">
                  {t.nav_news}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('supplier')} className="hover:text-[#30c3b2] transition-colors cursor-pointer">
                  {t.nav_supplier}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('products')} className="hover:text-[#30c3b2] transition-colors cursor-pointer">
                  {t.nav_services}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('team')} className="hover:text-[#30c3b2] transition-colors cursor-pointer">
                  {t.nav_team}
                </button>
              </li>
            </ul>
          </div>

          {/* Offices List (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Global Offices</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#30c3b2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Taiwan Office</span>
                  <span className="text-slate-300">{t.footer_taiwan_addr}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">{t.footer_singapore_office}</span>
                  <span className="text-slate-300">{t.footer_singapore_addr}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">{t.footer_korea_office}</span>
                  <span className="text-slate-300">{t.footer_korea_addr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div className="flex items-center space-x-4">
            <span>Security Certified ISO/IEC 27001</span>
            <span>&bull;</span>
            <span>Travel Trust Ticket Protocol v2.5</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted Communication</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
