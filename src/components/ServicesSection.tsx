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
    <section className="py-24 bg-white relative overflow-hidden text-[#0f2b5c] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            SYSTEM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] tracking-tight">
            {t.services_title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
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
                className="group relative bg-slate-50/80 rounded-2xl p-8 border border-slate-200 hover:border-[#1d4ed8]/50 hover:bg-white transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-bold text-[#1d4ed8]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0f2b5c] mb-3 group-hover:text-[#1d4ed8] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 group-hover:text-[#1d4ed8] font-bold transition-colors">
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
