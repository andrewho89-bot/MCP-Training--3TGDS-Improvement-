import React from 'react';
import { QrCode, ShoppingBag, ShieldCheck, Globe2, Layers, Sliders, ChevronRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/mockData';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onSelectService }) => {
  const t = translations[currentLang];

  const servicesBgImage =
    'https://lh3.googleusercontent.com/aida/AP1WRLv8yxQRcZs_n3tAb3LlOZ_YkVHnBTFHK5P945VTDxRInNE8srjOObn4KChcq6oFrynY-peYWWc4sujx1O_ewOD5ctcHGNtujyHIdSNKhfuCvfQXuafubTzTFsgGf1tX-cl8vABknLvqvWASH15V6tCrntFRigZGWMbFMx_cpfwVWZd6zn4H_xRU4eNN-BUi1UQcnXQOMjQXK5nTx4IL7ppBNRQi46aHqLQ4jhk3TBWRBzxBxF_MR4xClnlh';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'QrCode':
        return QrCode;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Globe2':
        return Globe2;
      case 'Layers':
        return Layers;
      case 'Sliders':
        return Sliders;
      default:
        return QrCode;
    }
  };

  return (
    <section className="py-24 bg-[#11131c] relative overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${servicesBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141622] via-[#11131c]/95 to-[#11131c]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1d1f29] border border-[#282933] text-xs font-mono text-[#b0c6ff]">
            SYSTEM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services_title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Comprehensive Travel Trust Ticket architecture designed to scale merchant sales globally.
          </p>
        </div>

        {/* 6 Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getIcon(service.iconName);
            const title = t[service.titleKey] || service.titleKey;
            const desc = t[service.descKey] || service.descKey;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-[#191b24] rounded-2xl p-8 border border-[#282933] hover:border-[#43dedd]/60 hover:bg-[#1d1f29] transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,222,221,0.15)] cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#282933] border border-[#43dedd]/30 flex items-center justify-center text-[#43dedd] group-hover:bg-[#43dedd] group-hover:text-slate-950 transition-colors shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-[#11131c] border border-[#282933] text-[10px] font-mono text-gray-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#43dedd] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#282933] flex items-center justify-between text-xs text-gray-400 group-hover:text-[#43dedd] font-semibold transition-colors">
                  <span>View Specifications</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
