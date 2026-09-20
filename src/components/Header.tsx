import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sprout, Volume2, Leaf, ShieldAlert, Sparkles, Compass } from 'lucide-react';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenRoadmap: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenRoadmap,
}) => {
  const t = translations[currentLanguage];

  return (
    <header className="bg-white border-b border-[#E2EBDC] sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1B5E20] flex items-center justify-center text-white shadow-sm shrink-0">
              <Sprout className="w-7 h-7 text-[#E8F5E9]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1A2E1C]">
                  {t.appTitle}
                </h1>
                <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9]">
                  AgriVision AI
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]">
                  Gemini 3.8 Flash
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4E634C] font-medium line-clamp-1">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Right Controls: Theme Pillars, Roadmap & Vernacular Language Toggle */}
          <div className="flex items-center justify-between md:justify-end gap-2.5 flex-wrap">
            
            {/* Roadmap Trigger */}
            <button
              id="roadmap-button"
              onClick={onOpenRoadmap}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F1F5EB] text-[#2C4A28] hover:bg-[#E3EBD9] transition-colors cursor-pointer border border-[#D5E2CC]"
              title={t.roadmapTitle}
            >
              <Compass className="w-3.5 h-3.5 text-[#F57C00]" />
              <span className="hidden lg:inline">{t.roadmapBtn}</span>
              <span className="lg:hidden">Roadmap</span>
            </button>

            {/* Vernacular Language Selector */}
            <div className="inline-flex rounded-xl bg-[#F0F5EC] p-1 border border-[#DCE8D5] shadow-xs">
              <button
                id="lang-mr"
                type="button"
                onClick={() => onLanguageChange('mr')}
                className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  currentLanguage === 'mr'
                    ? 'bg-[#1B5E20] text-white shadow-xs'
                    : 'text-[#2C4A28] hover:text-[#1B5E20] hover:bg-[#E3EBD9]'
                }`}
              >
                मराठी
              </button>
              <button
                id="lang-hi"
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  currentLanguage === 'hi'
                    ? 'bg-[#1B5E20] text-white shadow-xs'
                    : 'text-[#2C4A28] hover:text-[#1B5E20] hover:bg-[#E3EBD9]'
                }`}
              >
                हिंदी
              </button>
              <button
                id="lang-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  currentLanguage === 'en'
                    ? 'bg-[#1B5E20] text-white shadow-xs'
                    : 'text-[#2C4A28] hover:text-[#1B5E20] hover:bg-[#E3EBD9]'
                }`}
              >
                English
              </button>
            </div>

          </div>

        </div>

        {/* Theme Pillars Bar (People, Planet, Progress) */}
        <div className="mt-2.5 pt-2.5 border-t border-[#EEF3EA] flex items-center justify-between gap-2 overflow-x-auto text-xs text-[#3D523C]">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1B5E20]"></span>
              <strong className="text-[#1B5E20]">People:</strong> {t.pillPeople}
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
              <strong className="text-[#2E7D32]">Planet:</strong> {t.pillPlanet}
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#F57C00]"></span>
              <strong className="text-[#E65100]">Progress:</strong> {t.pillProgress}
            </div>
          </div>
          <div className="hidden md:flex items-center text-[11px] text-[#637C61] font-normal">
            Low Latency Gemini 3.8 Flash • Dual-Tier (Organic vs Chemical)
          </div>
        </div>

      </div>
    </header>
  );
};
