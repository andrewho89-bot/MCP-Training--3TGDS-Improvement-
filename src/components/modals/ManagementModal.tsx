import React from 'react';
import { X, Users, MapPin, Award, Building2, Globe2 } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { teamMembersData } from '../../data/mockData';

interface ManagementModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const ManagementModal: React.FC<ManagementModalProps> = ({ currentLang, onClose }) => {
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-800 space-y-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-100 text-slate-500 hover:text-[#0f2b5c] hover:bg-slate-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-slate-100 pb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            <Users className="w-3.5 h-3.5 text-[#30c3b2]" />
            <span>3T GDS EXECUTIVE MANAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] font-sans tracking-tight">
            {t.team_title}
          </h2>
          <p className="text-slate-600 text-sm font-medium max-w-3xl leading-relaxed">
            Leading the revolution in global digital asset distribution, Travel Trust Ticket (TTT) clearing, and cross-border voucher switches.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-[#1d4ed8]/40 hover:bg-white hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-blue-100 bg-blue-50 shadow-sm">
                    <img
                      src={member.avatarUrl}
                      alt={member.nameKey}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-100/80 text-[10px] font-mono text-[#1d4ed8] font-bold">
                      EXECUTIVE BOARD
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0f2b5c] leading-snug">
                      {member.nameKey}
                    </h3>
                    <div className="text-xs text-[#1d4ed8] font-bold">
                      {member.roleKey}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-700 font-normal leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  {member.bioKey}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600 font-mono">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-800">{member.experience}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-[#1d4ed8]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold">{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Offices Summary */}
        <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Globe2 className="w-5 h-5 text-[#30c3b2]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0f2b5c]">Global Headquarters & Operating Hubs</h4>
              <p className="text-xs text-slate-600">Singapore HQ | Taipei Operations Office | Seoul Regional Hub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0f2b5c] hover:bg-[#1d4ed8] text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

