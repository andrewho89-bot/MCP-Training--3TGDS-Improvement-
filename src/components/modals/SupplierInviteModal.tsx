import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Building2, Globe, Shield, Bot, Loader2 } from 'lucide-react';
import { Language, SupplierFormData, AIAdvisorResult } from '../../types';
import { translations } from '../../data/translations';

interface SupplierInviteModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const SupplierInviteModal: React.FC<SupplierInviteModalProps> = ({ currentLang, onClose }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<SupplierFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    businessType: 'Theme Park & Attractions',
    country: 'Taiwan',
    targetChannels: ['Trip.com', 'Meituan', 'Fliggy'],
    productCatalogDescription: 'E-tickets for daily observatory and theme park admission passes with fast-track entry.',
    estimatedMonthlyVolume: '1,000 - 5,000 passes / month',
  });

  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<AIAdvisorResult | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const availableChannels = ['Trip.com', 'Meituan', 'Fliggy', 'ezTravel', 'Shopee', 'Taobao', 'Klook', 'KKday', 'Bank Rewards'];

  const toggleChannel = (channel: string) => {
    setFormData((prev) => {
      const exists = prev.targetChannels.includes(channel);
      return {
        ...prev,
        targetChannels: exists
          ? prev.targetChannels.filter((c) => c !== channel)
          : [...prev.targetChannels, channel],
      };
    });
  };

  const handleGenerateAIStrategy = async () => {
    setAiLoading(true);
    setAiResult(null);

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: formData.companyName || 'Travel Merchant',
          businessType: formData.businessType,
          location: formData.country,
          targetMarkets: formData.targetChannels,
          description: formData.productCatalogDescription,
          language: currentLang,
        }),
      });

      const data = await res.json();
      setAiResult(data);
    } catch (err) {
      console.error('Failed to get AI advisor result:', err);
      // Fallback
      setAiResult({
        recommendation: `Recommended strategy for ${formData.companyName || 'your business'} in ${formData.country}: Leverage 3T GDS automated Travel Trust Ticket API to distribute across ${formData.targetChannels.join(', ')}.`,
        recommendedChannels: formData.targetChannels,
        estimatedSpeedUp: '3x faster API onboarding',
        currencyStrategy: 'Multi-currency settlement via TWD/USD/JPY automated clearing',
        complianceNotes: 'Certified for TTT Zero-Trust voucher verification',
      });
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#191b24] border border-[#282933] rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#282933] text-gray-400 hover:text-white hover:bg-[#32343e] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-mono text-[#43dedd]">
            <Building2 className="w-3.5 h-3.5" />
            <span>GLOBAL SUPPLIER ONBOARDING</span>
          </div>
          <h2 className="text-3xl font-extrabold">{t.form_modal_title}</h2>
          <p className="text-gray-400 text-sm font-light">{t.form_modal_subtitle}</p>
        </div>

        {submitted ? (
          /* Submission Success Card */
          <div className="bg-[#11131c] p-8 rounded-2xl border border-emerald-500/50 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto font-light">
              Thank you, <span className="font-bold text-white">{formData.contactName || 'Partner'}</span>. Our 3T GDS channel integration manager will review your submission for <span className="text-[#43dedd] font-bold">{formData.companyName || 'your business'}</span> and contact you within 24 business hours.
            </p>

            <div className="pt-4 p-4 rounded-xl bg-[#1d1f29] border border-[#282933] text-left text-xs font-mono space-y-1">
              <div className="text-gray-400">Reference ID: TTT-APP-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div className="text-gray-400">Target Channels: {formData.targetChannels.join(', ')}</div>
              <div className="text-emerald-400">Status: Under Express API Review</div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-[#43dedd] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmitForm} className="space-y-6">
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_company_name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Taipei Observatory Inc."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_contact_name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="e.g. Arthur Chen"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="partner@merchant.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_phone}
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+886 2 2345 6789"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_business_type}
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                >
                  <option value="Theme Park & Attractions">Theme Park & Attractions</option>
                  <option value="Transit & Rail Passes">Transit & Rail Passes</option>
                  <option value="Restaurant & Dining Vouchers">Restaurant & Dining Vouchers</option>
                  <option value="Hotel Day-Use & Experiences">Hotel Day-Use & Experiences</option>
                  <option value="Retail & Shopping Vouchers">Retail & Shopping Vouchers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {t.form_country}
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
                >
                  <option value="Taiwan">Taiwan</option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">South Korea</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Global">Global / Other</option>
                </select>
              </div>
            </div>

            {/* Target Channels Checkboxes */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-2">
                {t.form_target_channels}
              </label>
              <div className="flex flex-wrap gap-2">
                {availableChannels.map((channel) => {
                  const selected = formData.targetChannels.includes(channel);
                  return (
                    <button
                      type="button"
                      key={channel}
                      onClick={() => toggleChannel(channel)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#43dedd] text-slate-950 font-bold border border-[#43dedd]'
                          : 'bg-[#1d1f29] text-gray-400 border border-[#282933] hover:text-white'
                      }`}
                    >
                      {selected ? '✓ ' : '+ '} {channel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                {t.form_catalog_desc}
              </label>
              <textarea
                rows={3}
                value={formData.productCatalogDescription}
                onChange={(e) => setFormData({ ...formData, productCatalogDescription: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1d1f29] border border-[#282933] text-sm text-white focus:outline-none focus:border-[#43dedd]"
              />
            </div>

            {/* Gemini AI Strategic Advisor Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#11131c] to-[#191b24] border border-[#43dedd]/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#43dedd]">
                  <Bot className="w-4 h-4" />
                  <span>Gemini AI Distribution Advisor</span>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateAIStrategy}
                  disabled={aiLoading}
                  className="px-3.5 py-1.5 rounded-lg bg-[#43dedd]/20 border border-[#43dedd] text-[#43dedd] hover:bg-[#43dedd] hover:text-slate-950 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  {aiLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{t.form_ai_loading}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.form_ai_recommend_btn}</span>
                    </>
                  )}
                </button>
              </div>

              {aiResult && (
                <div className="mt-2 p-4 rounded-xl bg-[#191b24] border border-[#282933] text-xs space-y-2 text-gray-300 animate-fadeIn font-mono">
                  <p className="text-white font-sans font-medium">{aiResult.recommendation}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      ⚡ {aiResult.estimatedSpeedUp}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      💰 {aiResult.currencyStrategy}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#43dedd] to-[#2563eb] text-slate-950 hover:brightness-110 shadow-xl cursor-pointer flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.form_submit}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
