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
    <header className="sticky top-0 z-50 bg-[#11131c]/90 backdrop-blur-md border-b border-[#282933] text-[#e1e1ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => onOpenModal('about')}
            className="hover:text-[#43dedd] transition-colors cursor-pointer py-1"
          >
            {t.nav_about}
          </button>
          <button
            onClick={() => onOpenModal('news')}
            className="hover:text-[#43dedd] transition-colors cursor-pointer py-1"
          >
            {t.nav_news}
          </button>
          <button
            onClick={() => onOpenModal('supplier')}
            className="hover:text-[#43dedd] transition-colors cursor-pointer py-1"
          >
            {t.nav_supplier}
          </button>
          <button
            onClick={() => onOpenModal('products')}
            className="hover:text-[#43dedd] transition-colors cursor-pointer py-1"
          >
            {t.nav_services}
          </button>
          <button
            onClick={() => onOpenModal('team')}
            className="hover:text-[#43dedd] transition-colors cursor-pointer py-1"
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
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#1d1f29] border border-[#282933] text-xs font-medium text-gray-200 hover:border-[#43dedd]/50 transition-all cursor-pointer"
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-[#1d1f29] border border-[#282933] shadow-2xl py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center space-x-2 hover:bg-[#282933] transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'text-[#43dedd] font-bold bg-[#282933]/50' : 'text-gray-300'
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
            className="relative group px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(67,222,221,0.3)] transition-all cursor-pointer flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav_join}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 rounded-lg bg-[#1d1f29] border border-[#282933] text-gray-200"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#1d1f29] border border-[#282933] shadow-2xl py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-gray-200 hover:bg-[#282933]"
                  >
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#1d1f29] border border-[#282933] text-gray-300 hover:text-[#43dedd]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181a24] border-b border-[#282933] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => {
              onOpenModal('about');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-[#282933]"
          >
            {t.nav_about}
          </button>
          <button
            onClick={() => {
              onOpenModal('news');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-[#282933]"
          >
            {t.nav_news}
          </button>
          <button
            onClick={() => {
              onOpenModal('supplier');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-[#282933]"
          >
            {t.nav_supplier}
          </button>
          <button
            onClick={() => {
              onOpenModal('products');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-[#282933]"
          >
            {t.nav_services}
          </button>
          <button
            onClick={() => {
              onOpenModal('team');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-[#282933]"
          >
            {t.nav_team}
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenModal('supplier');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 text-center text-sm"
            >
              {t.nav_join}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
