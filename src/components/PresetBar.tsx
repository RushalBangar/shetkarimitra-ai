import React from 'react';
import { Language, SamplePreset } from '../types';
import { samplePresets } from '../data/presets';
import { Sparkles, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface PresetBarProps {
  currentLanguage: Language;
  activePresetId: string | null;
  onSelectPreset: (preset: SamplePreset) => void;
}

export const PresetBar: React.FC<PresetBarProps> = ({
  currentLanguage,
  activePresetId,
  onSelectPreset,
}) => {
  const t = translations[currentLanguage];

  return (
    <div className="bg-[#EEF5E8] border-b border-[#D8E6CE] py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B5E20] shrink-0">
          <Sparkles className="w-4 h-4 text-[#F57C00] animate-pulse" />
          <span>{t.demoPresetsTitle}</span>
        </div>

        {/* 3 Instant Presets Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-auto">
          {samplePresets.map((preset) => {
            const isSelected = activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                id={`preset-${preset.id}`}
                onClick={() => onSelectPreset(preset)}
                className={`flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-sm'
                    : 'bg-white text-[#203D1D] hover:bg-[#E5EFE0] border-[#CFDFCB] shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-base">{preset.icon}</span>
                  <span className="truncate">{preset.name[currentLanguage]}</span>
                </div>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-sm font-bold ${
                    preset.severity >= 8
                      ? isSelected
                        ? 'bg-[#C62828] text-white'
                        : 'bg-[#FFEBEE] text-[#C62828]'
                      : isSelected
                      ? 'bg-[#F57C00] text-white'
                      : 'bg-[#FFF3E0] text-[#E65100]'
                  }`}
                >
                  {preset.severity}/10
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
