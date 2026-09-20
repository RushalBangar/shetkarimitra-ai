import React, { useState, useEffect } from 'react';
import { Language, CropDiagnosisResult } from '../types';
import { translations } from '../data/translations';
import { VoiceAdvisoryPlayer } from '../utils/speech';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Flame,
  CloudRain,
  TrendingUp,
  Share2,
  FileDown,
  Clock,
  CheckCircle2,
  Biohazard,
  Sprout
} from 'lucide-react';

interface DiagnosticDashboardProps {
  currentLanguage: Language;
  diagnosis: CropDiagnosisResult | null;
  isAnalyzing: boolean;
  onOpenWhatsAppSlip: () => void;
}

export const DiagnosticDashboard: React.FC<DiagnosticDashboardProps> = ({
  currentLanguage,
  diagnosis,
  isAnalyzing,
  onOpenWhatsAppSlip,
}) => {
  const t = translations[currentLanguage];
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Stop any audio when diagnosis or language changes
  useEffect(() => {
    VoiceAdvisoryPlayer.stop();
    setIsPlayingAudio(false);
  }, [diagnosis, currentLanguage]);

  const handleToggleAudio = () => {
    if (!diagnosis) return;

    if (isPlayingAudio) {
      VoiceAdvisoryPlayer.stop();
      setIsPlayingAudio(false);
    } else {
      const scriptToRead = diagnosis.vernacular_voice_script || `${diagnosis.crop_identified}. ${diagnosis.disease_name_vernacular}.`;
      VoiceAdvisoryPlayer.speak(
        scriptToRead,
        currentLanguage,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(false)
      );
    }
  };

  const handleReplayAudio = () => {
    if (!diagnosis) return;
    VoiceAdvisoryPlayer.stop();
    const scriptToRead = diagnosis.vernacular_voice_script || `${diagnosis.crop_identified}. ${diagnosis.disease_name_vernacular}.`;
    VoiceAdvisoryPlayer.speak(
      scriptToRead,
      currentLanguage,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false),
      () => setIsPlayingAudio(false)
    );
  };

  // Severity indicator color styling
  const getSeverityBadgeClass = (score: number) => {
    if (score >= 8) return 'bg-[#C62828] text-white';
    if (score >= 6) return 'bg-[#F57C00] text-white';
    if (score >= 4) return 'bg-[#FBC02D] text-[#4E342E]';
    return 'bg-[#2E7D32] text-white';
  };

  const getUrgencyIcon = (urgency: string) => {
    if (urgency === 'Critical' || urgency === 'Severe') {
      return <Flame className="w-4 h-4 text-[#C62828]" />;
    }
    return <AlertTriangle className="w-4 h-4 text-[#F57C00]" />;
  };

  if (isAnalyzing) {
    return (
      <div className="bg-white rounded-2xl border border-[#DCE7D6] shadow-sm p-6 sm:p-10 flex flex-col items-center justify-center min-h-[500px] text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-4 border-[#E8F5E9] border-t-[#1B5E20] animate-spin flex items-center justify-center"></div>
          <Sprout className="w-8 h-8 text-[#1B5E20] absolute inset-0 m-auto" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#1A2E1C] mb-2">
          {t.diagnosing}
        </h3>
        <p className="text-xs sm:text-sm text-[#4E634C] max-w-md">
          Multimodal Gemini AI is inspecting leaf lesions, pathogen sporulation patterns, and cross-referencing rural agronomy guidelines...
        </p>
      </div>
    );
  }

  if (!diagnosis) {
    return (
      <div className="bg-white rounded-2xl border border-[#DCE7D6] shadow-sm p-6 sm:p-12 flex flex-col items-center justify-center min-h-[500px] text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#F0F6EC] text-[#1B5E20] flex items-center justify-center mb-4">
          <Sprout className="w-8 h-8 opacity-60" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#1A2E1C] mb-2">
          {t.panelResultsTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#5C7559] max-w-md mb-6 leading-relaxed">
          {t.noDiagnosisPrompt}
        </p>
        <div className="p-4 rounded-xl bg-[#F6FAF3] border border-[#DEEAD9] text-xs text-[#2A4327] max-w-sm text-left">
          <p className="font-bold mb-1">🌟 टिप (Tip):</p>
          <p>वरील 🍇 द्राक्ष, 🍅 टोमॅटो किंवा 🧅 कांदा या १-क्लिक चाचणी नमुन्यांवर क्लिक करून तात्काळ निकाल तपासा.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#DCE7D6] shadow-sm p-4 sm:p-6 space-y-4">
      
      {/* Top Banner: Disease Name, Crop & Urgency */}
      <div className="rounded-xl p-4 bg-[#FBFDF9] border border-[#D9E7D3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold flex items-center gap-1 ${getSeverityBadgeClass(diagnosis.severity_score)}`}>
              {getUrgencyIcon(diagnosis.urgency_level)}
              <span>{diagnosis.urgency_level}: {diagnosis.severity_score}/10</span>
            </span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#1B5E20] font-semibold border border-[#C8E6C9]">
              {diagnosis.pathogen_type}
            </span>
            {diagnosis.scientific_name && (
              <span className="text-[11px] text-[#556F52] italic font-serif">
                ({diagnosis.scientific_name})
              </span>
            )}
          </div>
          
          <h2 className="text-lg sm:text-2xl font-black text-[#1A2E1C] tracking-tight">
            {diagnosis.disease_name_vernacular}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#4F6A4C]">
            {t.cropIdentified}: <span className="text-[#1B5E20]">{diagnosis.crop_identified}</span> • {diagnosis.disease_name_english}
          </p>
        </div>

        {/* Action: WhatsApp Slip Trigger */}
        <button
          id="btn-open-whatsapp-slip"
          onClick={onOpenWhatsAppSlip}
          className="self-start sm:self-center shrink-0 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t.whatsappSlipTitle}</span>
        </button>
      </div>

      {/* Severity Meter & Economic Impact Gauge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        
        {/* Severity Gauge & Spread Risk */}
        <div className="p-3.5 rounded-xl bg-[#FAFCF8] border border-[#DEEAD9]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
            <span className="text-[#2C4A28] flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#F57C00]" />
              {t.severityTitle}
            </span>
            <span className="font-extrabold text-[#C62828]">
              {diagnosis.severity_score} / 10
            </span>
          </div>

          {/* 10-Step Visual Bar */}
          <div className="w-full bg-[#E5EFE1] rounded-full h-3 overflow-hidden flex mb-2">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${diagnosis.severity_score * 10}%`,
                background:
                  diagnosis.severity_score >= 8
                    ? 'linear-gradient(90deg, #F57C00 0%, #C62828 100%)'
                    : diagnosis.severity_score >= 5
                    ? 'linear-gradient(90deg, #2E7D32 0%, #F57C00 100%)'
                    : '#2E7D32',
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#556F52]">
            <span>
              {t.contagion}: <strong className="text-[#C62828] font-bold">{diagnosis.contagion_risk}</strong>
            </span>
            <span className="font-medium text-[#738C6F]">
              {diagnosis.severity_score >= 8 ? 'तातडीने हस्तक्षेप आवश्यक' : 'नियमित देखरेख ठेवा'}
            </span>
          </div>
        </div>

        {/* Economic Impact Calculator */}
        <div className="p-3.5 rounded-xl bg-[#F0F8EC] border border-[#CDE5C4] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs mb-1 font-bold text-[#1B5E20]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              {t.economicTitle}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] font-bold">
              बचत अंदाज
            </span>
          </div>

          <div className="text-base sm:text-xl font-black text-[#1B5E20] my-0.5">
            {diagnosis.estimated_loss_prevention_inr}
          </div>

          <p className="text-[11px] text-[#4E684B] line-clamp-1">
            वेळेत फवारणी व सेंद्रिय उपायांमुळे एकरी उत्पादनाचा थेट बचाव.
          </p>
        </div>

      </div>

      {/* Voice-First Accessibility: Audio Advisory Player */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Volume2 className={`w-5 h-5 text-white ${isPlayingAudio ? 'animate-bounce' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#C8E6C9] uppercase tracking-wider">
                  Voice Advisory
                </span>
                {isPlayingAudio && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.2 rounded-full bg-[#E8F5E9] text-[#1B5E20] animate-pulse">
                    आवाज सुरू आहे...
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#F1F8EE] line-clamp-2 mt-0.5">
                "{diagnosis.vernacular_voice_script}"
              </p>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="btn-play-voice-advisory"
              onClick={handleToggleAudio}
              className="px-4 py-2 rounded-xl bg-white text-[#1B5E20] hover:bg-[#F1F8EE] font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>{t.pauseAudio}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t.listenButton}</span>
                </>
              )}
            </button>

            <button
              id="btn-replay-voice"
              onClick={handleReplayAudio}
              title={t.replayAudio}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Dual-Tier Remedy Architecture */}
      <div className="space-y-3 pt-1">
        
        {/* Tier 1: Organic & Biological (Green Card) */}
        <div className="rounded-xl border-2 border-[#2E7D32]/30 bg-[#F5FAF2] p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-3 border-b border-[#D8EAD3]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-white text-xs font-black flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-[#1B5E20]">
                {t.tier1Title}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] self-start sm:self-auto">
              {t.tier1Badge}
            </span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-[#1F3A1B]">
            {diagnosis.organic_remedy.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 2: Chemical Intervention (Caution Crimson & Amber Card) */}
        <div className="rounded-xl border-2 border-[#C62828]/30 bg-[#FFF9F9] p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-3 border-b border-[#FCE2E2]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#C62828] text-white text-xs font-black flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-[#C62828]">
                {t.tier2Title}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2] self-start sm:self-auto">
              {t.tier2Badge}
            </span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-[#3E1A1A] mb-3">
            {diagnosis.chemical_remedy.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <AlertTriangle className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>

          {/* PHI Safety Interval & Protective Kit Notice */}
          <div className="pt-2 border-t border-[#F8DCDC] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#782828]">
            {diagnosis.safe_phi_days ? (
              <div className="flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#C62828]" />
                <span>{t.phiLabel} <strong className="text-[#C62828] font-black">{diagnosis.safe_phi_days} दिवस (Days)</strong></span>
              </div>
            ) : null}
            <div className="text-[10px] text-[#8C3A3A] italic font-medium">
              {t.safetyNotice}
            </div>
          </div>
        </div>

      </div>

      {/* Weather & Spraying Condition Advice */}
      {diagnosis.weather_advice && (
        <div className="p-3 rounded-xl bg-[#F4F9F2] border border-[#DBE9D7] flex items-start gap-2.5 text-xs text-[#2A4327]">
          <CloudRain className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-[#1B5E20]">{t.weatherTitle}: </strong>
            <span>{diagnosis.weather_advice}</span>
          </div>
        </div>
      )}

    </div>
  );
};
