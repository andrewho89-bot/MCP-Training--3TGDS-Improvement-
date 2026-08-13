import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
  darkText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
  darkText = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center space-x-3 select-none ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
    >
      {/* Exact 3TGDS Geometric Teal Logo Symbol */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main geometric delta/arrow ribbon in 3TGDS Teal (#30c3b2) */}
          <path
            d="M 68,12 L 18,38 L 54,62 L 58,54 L 38,42 L 68,26 L 68,12 Z"
            fill="#30c3b2"
          />
          <path
            d="M 18,38 L 56,86 L 62,80 L 32,46 L 18,38 Z"
            fill="#30c3b2"
          />
          <path
            d="M 40,24 L 68,12 L 68,36 L 40,24 Z"
            fill="#22a898"
            opacity="0.9"
          />
          {/* Lower Right Circle Dot */}
          <circle cx="68" cy="52" r="11" fill="#30c3b2" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className={`${textSizes[size]} font-extrabold tracking-wider font-sans leading-none flex items-center space-x-1.5`}>
          <span className={darkText ? 'text-[#0f2b5c]' : 'text-white'}>3T</span>
          <span className="text-[#30c3b2]">GDS</span>
        </div>
        {showSubtitle && (
          <div className="flex items-center space-x-1.5 mt-1">
            <span className={`text-[10px] font-mono tracking-widest uppercase leading-none ${darkText ? 'text-slate-600' : 'text-slate-300'}`}>
              Global Digital Distribution
            </span>
            <span className="text-[10px] font-mono text-[#30c3b2] font-bold hidden sm:inline">
              | 三禘券鏈通
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

