import React from 'react';
import { Users, Award, MapPin, Building2, Globe2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { teamMembersData } from '../data/mockData';

interface ManagementSectionProps {
  currentLang: Language;
}

export const ManagementSection: React.FC<ManagementSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="management" className="py-20 bg-white text-[#0f2b5c] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
            <Users className="w-4 h-4 text-[#30c3b2]" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2b5c] tracking-tight">
            {t.team_title}
          </h2>
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            A seasoned team of travel fintech pioneers, telecom payment executives, and cross-border digital asset architects driving global innovation.
          </p>
        </div>

        {/* 4 Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-[#1d4ed8]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Photo Portrait */}
                <div className="aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 bg-blue-50 relative shadow-sm">
                  <img
                    src={member.avatarUrl}
                    alt={member.nameKey}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#0f2b5c]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold shadow-xs">
                    3T EXECUTIVE
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#0f2b5c] group-hover:text-[#1d4ed8] transition-colors leading-snug">
                    {member.nameKey}
                  </h3>
                  <p className="text-xs font-bold text-[#1d4ed8] mt-1">
                    {member.roleKey}
                  </p>
                </div>

                {/* Bio Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-4 bg-white p-3.5 rounded-xl border border-slate-200/70">
                  {member.bioKey}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2 text-[11px] font-mono text-slate-600 mt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate font-semibold text-slate-800">{member.experience}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1d4ed8]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold">{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Operating Hub Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/40 to-blue-50 p-6 sm:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-md">
              <Globe2 className="w-6 h-6 text-[#30c3b2]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-extrabold text-[#0f2b5c]">
                Global Digital Voucher Switch Offices
              </h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Singapore Head Office | Taipei Operations Center | Seoul Regional Office
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-xs font-mono font-bold text-[#0f2b5c] text-center w-full md:w-auto shadow-2xs">
              ESTABLISHED 2020
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#0f2b5c] text-white text-xs font-mono font-bold text-center w-full md:w-auto shadow-2xs">
              TTT PROTOCOL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
