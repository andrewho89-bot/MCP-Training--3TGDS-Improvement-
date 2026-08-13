import React, { useState } from 'react';
import { Globe, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenModal: (modalName: 'about' | 'news' | 'supplier' | 'products' | 'team') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = translations[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '繁體中文', flag: '🇹🇼' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 text-[#0f2b5c] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" darkText={true} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          <button
            onClick={() => onOpenModal('about')}
            className="text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors cursor-pointer py-1"
          >
            {t.nav_about}
          </button>
          <button
            onClick={() => onOpenModal('news')}
            className="text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors cursor-pointer py-1"
          >
            {t.nav_news}
          </button>
          <button
            onClick={() => onOpenModal('supplier')}
            className="text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors cursor-pointer py-1"
          >
            {t.nav_supplier}
          </button>
          <button
            onClick={() => onOpenModal('products')}
            className="text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors cursor-pointer py-1"
          >
            {t.nav_services}
          </button>
          <button
            onClick={() => onOpenModal('team')}
            className="text-[#0f2b5c] hover:text-[#1d4ed8] transition-colors cursor-pointer py-1 font-bold text-[#1d4ed8] bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-200/60"
          >
            {t.nav_team}
          </button>
        </nav>

        {/* Right Actions: Language Selector + Join US Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0f2b5c] hover:border-[#1d4ed8]/50 transition-all cursor-pointer shadow-xs"
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center space-x-2 hover:bg-blue-50 transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'text-[#1d4ed8] font-bold bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Join US Button */}
          <button
            onClick={() => onOpenModal('supplier')}
            className="relative group px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white hover:shadow-md hover:brightness-105 transition-all cursor-pointer flex items-center space-x-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#30c3b2]" />
            <span>{t.nav_join}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-blue-50"
                  >
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#1d4ed8]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => {
              onOpenModal('about');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50"
          >
            {t.nav_about}
          </button>
          <button
            onClick={() => {
              onOpenModal('news');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50"
          >
            {t.nav_news}
          </button>
          <button
            onClick={() => {
              onOpenModal('supplier');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50"
          >
            {t.nav_supplier}
          </button>
          <button
            onClick={() => {
              onOpenModal('products');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50"
          >
            {t.nav_services}
          </button>
          <button
            onClick={() => {
              onOpenModal('team');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 font-bold text-[#1d4ed8]"
          >
            {t.nav_team}
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenModal('supplier');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white text-center text-sm shadow-xs"
            >
              {t.nav_join}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
