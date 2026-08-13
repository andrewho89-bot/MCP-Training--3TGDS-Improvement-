import React, { useState } from 'react';
import { X, ShoppingBag, QrCode, Terminal, Check, Copy, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { Language, ProductAsset } from '../../types';
import { translations } from '../../data/translations';
import { productAssetsData } from '../../data/mockData';

interface ProductServicesModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const ProductServicesModal: React.FC<ProductServicesModalProps> = ({ currentLang, onClose }) => {
  const t = translations[currentLang];
  const [selectedAsset, setSelectedAsset] = useState<ProductAsset>(productAssetsData[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [currency, setCurrency] = useState<'USD' | 'TWD' | 'JPY' | 'KRW'>('USD');
  const [simulatedCode, setSimulatedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fxRates = {
    USD: 1,
    TWD: 32.5,
    JPY: 155,
    KRW: 1380,
  };

  const filteredAssets =
    selectedRegion === 'ALL'
      ? productAssetsData
      : productAssetsData.filter((p) => p.region.includes(selectedRegion));

  const formatPrice = (usd: number) => {
    const rate = fxRates[currency];
    const val = usd * rate;
    if (currency === 'USD') return `$${val.toFixed(2)} USD`;
    if (currency === 'TWD') return `NT$${Math.round(val).toLocaleString()}`;
    if (currency === 'JPY') return `¥${Math.round(val).toLocaleString()}`;
    if (currency === 'KRW') return `₩${Math.round(val).toLocaleString()}`;
    return `$${usd} USD`;
  };

  const handleSimulateIssuance = () => {
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const code = `TTT-${selectedAsset.region.substring(0, 3).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}-${randomHex}`;
    setSimulatedCode(code);
  };

  const handleCopyCode = () => {
    if (simulatedCode || selectedAsset.sampleCode) {
      navigator.clipboard.writeText(simulatedCode || selectedAsset.sampleCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#191b24] border border-[#282933] rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#282933] text-gray-400 hover:text-white hover:bg-[#32343e] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#282933] pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1d1f29] border border-[#43dedd]/40 text-xs font-mono text-[#43dedd]">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>LIVE ASSET CATALOG</span>
            </div>
            <h2 className="text-3xl font-extrabold">{t.catalog_title}</h2>
            <p className="text-gray-400 text-sm font-light">{t.catalog_subtitle}</p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center space-x-2 bg-[#11131c] p-1.5 rounded-xl border border-[#282933]">
            <span className="text-xs text-gray-400 font-mono px-2">Currency:</span>
            {(['USD', 'TWD', 'JPY', 'KRW'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === curr
                    ? 'bg-[#43dedd] text-slate-950 shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400 mr-2" />
          {['ALL', 'Taiwan', 'Japan', 'Korea', 'Singapore'].map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-[#b0c6ff] text-slate-950 font-bold'
                  : 'bg-[#1d1f29] text-gray-400 border border-[#282933] hover:text-white'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Main Grid: Products + Live Voucher Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Product List (Col 7) */}
          <div className="lg:col-span-7 space-y-3 max-h-[450px] overflow-y-auto pr-2">
            {filteredAssets.map((asset) => {
              const active = selectedAsset.id === asset.id;
              return (
                <div
                  key={asset.id}
                  onClick={() => {
                    setSelectedAsset(asset);
                    setSimulatedCode(null);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    active
                      ? 'bg-[#1d1f29] border-[#43dedd] shadow-[0_0_20px_rgba(67,222,221,0.2)]'
                      : 'bg-[#11131c] border-[#282933] hover:border-[#b0c6ff]/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={asset.image}
                      alt={asset.nameKey}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#282933]"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#43dedd] font-bold uppercase tracking-wider">
                        {asset.type} &bull; {asset.region}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {asset.nameKey}
                      </h4>
                      <div className="text-xs text-gray-400 font-light mt-0.5">
                        {asset.merchantName}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-[#b0c6ff] font-mono">
                      {formatPrice(asset.priceUSD)}
                    </div>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
                      {asset.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live TTT Digital Voucher & API Sandbox (Col 5) */}
          <div className="lg:col-span-5 bg-[#11131c] rounded-2xl p-6 border border-[#282933] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase font-bold flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-[#43dedd]" />
                  <span>TTT Digital Voucher Pass</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#282933] text-gray-300 font-mono">
                  Validity: {selectedAsset.validityDays} Days
                </span>
              </div>

              {/* Dynamic Simulated Ticket Box */}
              <div className="bg-gradient-to-br from-[#1d1f29] to-[#282933] rounded-2xl p-5 border border-[#43dedd]/40 shadow-xl space-y-4 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-[#43dedd] uppercase tracking-wider block">
                      3T GDS Certified Pass
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {selectedAsset.nameKey}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#b0c6ff] font-mono">
                      {formatPrice(selectedAsset.priceUSD)}
                    </span>
                  </div>
                </div>

                {/* Simulated Barcode / QR Graphic */}
                <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center space-y-2 text-slate-950">
                  <div className="w-24 h-24 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:8px_8px] border-2 border-black rounded-md flex items-center justify-center p-2">
                    <QrCode className="w-16 h-16 text-slate-900" />
                  </div>
                  <span className="font-mono text-xs font-black tracking-widest">
                    {simulatedCode || selectedAsset.sampleCode}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span>Protocol: TTT-v2.5</span>
                  <span>Secured by 256-bit HSM</span>
                </div>
              </div>
            </div>

            {/* Actions: Generate New & Copy Code */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleSimulateIssuance}
                className="w-full py-3 rounded-xl bg-[#43dedd] hover:bg-[#34c7c6] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.catalog_test_api}</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="w-full py-2.5 rounded-xl bg-[#1d1f29] hover:bg-[#282933] border border-[#282933] text-gray-300 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Voucher Token!' : 'Copy Code Payload'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#282933] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#282933] hover:bg-[#32343e] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
