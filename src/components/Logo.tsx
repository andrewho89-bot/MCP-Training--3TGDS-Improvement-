import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
    xl: 'w-14 h-14 text-lg',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center space-x-3 select-none ${onClick ? 'cursor-pointer hover:opacity-95 transition-opacity' : ''} ${className}`}
    >
      {/* Original 3T GDS Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#1d233a] via-[#11131c] to-[#0d1527] border border-[#43dedd]/50 flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(67,222,221,0.25)] group`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#43dedd]/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Custom 3T Interlocking Icon Graphic */}
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5 transform group-hover:scale-105 transition-transform"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe/Grid Orbit */}
          <circle cx="20" cy="20" r="17" stroke="#43dedd" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 3" />
          <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#b0c6ff" strokeOpacity="0.2" strokeWidth="1" />
          
          {/* Stylized 3 T's forming a triangular global switch */}
          {/* T1 - Top left (Travel) */}
          <path
            d="M12 12H20M16 12V25"
            stroke="#43dedd"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* T2 - Top right (Trust) */}
          <path
            d="M20 12H28M24 12V25"
            stroke="#3b82f6"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* T3 - Bottom Center (Ticket) */}
          <path
            d="M14 28H26M20 28V19"
            stroke="#60a5fa"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Nexus Glow */}
          <circle cx="20" cy="20" r="2.5" fill="#43dedd" className="animate-pulse" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className={`${textSizes[size]} font-black tracking-wider text-white font-mono leading-none flex items-center space-x-1`}>
          <span>3T</span>
          <span className="text-[#43dedd] bg-gradient-to-r from-[#43dedd] to-[#60a5fa] bg-clip-text text-transparent">GDS</span>
        </div>
        {showSubtitle && (
          <div className="flex items-center space-x-1.5 mt-0.5">
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase leading-none">
              GLOBAL DIGITAL DISTRIBUTION
            </span>
            <span className="text-[9px] font-mono text-[#43dedd]/80 font-bold hidden sm:inline">
              | 三禘券鏈通
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
