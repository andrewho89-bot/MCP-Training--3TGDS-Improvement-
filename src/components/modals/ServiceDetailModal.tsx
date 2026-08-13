import React from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { ServiceItem, Language } from '../../types';
import { translations } from '../../data/translations';

interface ServiceDetailModalProps {
  service: ServiceItem;
  currentLang: Language;
  onClose: () => void;
  onOpenSupplierModal: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  currentLang,
  onClose,
  onOpenSupplierModal,
}) => {
  const t = translations[currentLang];
  const title = t[service.titleKey] || service.titleKey;

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

        {/* Modal Header */}
        <div className="space-y-2">
          {service.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-mono text-[#43dedd]">
              {service.badge}
            </span>
          )}
          <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        </div>

        {/* Technical Detail */}
        <p className="text-sm text-gray-300 font-light leading-relaxed bg-[#11131c] p-5 rounded-2xl border border-[#282933]">
          {service.detailKey}
        </p>

        {/* Feature Specifications */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-[#43dedd] font-bold">
            Key Architecture Features
          </h4>
          <div className="space-y-2">
            {service.featuresKey.map((feat, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-[#1d1f29] p-3 rounded-xl border border-[#282933]"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-200 font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#282933] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenSupplierModal();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 font-bold text-xs transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-lg"
          >
            <span>Apply For Integration</span>
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
