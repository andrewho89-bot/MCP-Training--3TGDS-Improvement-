import React from 'react';
import { X, Users, MapPin, Award, ExternalLink } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#191b24] border border-[#282933] rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-8 max-h-[90vh] overflow-y-auto">
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
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl font-extrabold">{t.team_title}</h2>
          <p className="text-gray-400 text-sm font-light">{t.team_subtitle}</p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="bg-[#1d1f29] rounded-2xl p-6 border border-[#282933] hover:border-[#43dedd]/50 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-square w-full rounded-xl overflow-hidden border border-[#282933] bg-[#11131c]">
                  <img
                    src={member.avatarUrl}
                    alt={member.nameKey}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{member.nameKey}</h3>
                  <div className="text-xs text-[#43dedd] font-semibold mt-0.5">{member.roleKey}</div>
                </div>

                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {member.bioKey}
                </p>
              </div>

              <div className="pt-4 border-t border-[#282933] space-y-1.5 text-[11px] text-gray-400 font-mono">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#b0c6ff] shrink-0" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#282933] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#282933] hover:bg-[#32343e] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
