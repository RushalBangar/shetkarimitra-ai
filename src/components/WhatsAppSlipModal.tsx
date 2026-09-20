import React, { useRef, useState } from 'react';
import { Language, CropDiagnosisResult } from '../types';
import { translations } from '../data/translations';
import { X, Share2, Download, Copy, Check, ShieldCheck, Sprout, Calendar, Phone } from 'lucide-react';

interface WhatsAppSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  diagnosis: CropDiagnosisResult;
  leafImage?: string | null;
  cropName?: string;
  notes?: string;
}

export const WhatsAppSlipModal: React.FC<WhatsAppSlipModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  diagnosis,
  leafImage,
  cropName,
  notes,
}) => {
  const t = translations[currentLanguage];
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingSlip, setIsGeneratingSlip] = useState<boolean>(false);

  if (!isOpen) return null;

  const todayStr = new Date().toLocaleDateString('mr-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Pre-formatted WhatsApp text with emojis for farmer groups
  const generateWhatsAppMessage = () => {
    const text = `🌱 *शेतकरी मित्र (ShetkariMitra) — पीक रोग निदान सल्ला पत्रिका*
📅 तारीख: ${todayStr}
🌾 पीक (Crop): *${diagnosis.crop_identified}*
🔴 रोग (Disease): *${diagnosis.disease_name_vernacular}* (${diagnosis.disease_name_english})
📊 तीव्रता (Severity): *${diagnosis.severity_score}/10* | धोका: *${diagnosis.urgency_level}*
💰 उत्पन्न बचत अंदाज: *${diagnosis.estimated_loss_prevention_inr}*

🌿 *सेंद्रिय व जैविक उपाय (Organic First):*
${diagnosis.organic_remedy.map((r, i) => `• ${r}`).join('\n')}

⚠️ *रासायनिक फवारणी (Chemical Emergency):*
${diagnosis.chemical_remedy.map((r, i) => `• ${r}`).join('\n')}

⏱️ *कापणी प्रतीक्षा काळ (PHI):* ${diagnosis.safe_phi_days ? `${diagnosis.safe_phi_days} दिवस` : 'शिफारसीनुसार'}
⛅ *हवामान सल्ला:* ${diagnosis.weather_advice || 'पहाटेच्या शांत हवेत फवारा.'}

_सल्ला स्रोत: ShetkariMitra AgriVision AI (Gemini 3.8 Flash)_`;
    return encodeURIComponent(text);
  };

  const handleShareToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const url = `https://api.whatsapp.com/send?text=${message}`;
    window.open(url, '_blank');
  };

  const handleCopyText = () => {
    const plainText = decodeURIComponent(generateWhatsAppMessage());
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // High resolution slip image generator using HTML Canvas
  const handleDownloadImage = () => {
    setIsGeneratingSlip(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 1050;

      // Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top Header Banner
      ctx.fillStyle = '#1B5E20';
      ctx.fillRect(0, 0, canvas.width, 140);

      // Header Text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 34px sans-serif';
      ctx.fillText('🌱 शेतकरी मित्र (ShetkariMitra)', 40, 60);

      ctx.fillStyle = '#C8E6C9';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('AgriVision AI — पीक रोग निदान व दुहेरी सल्ला पत्रिका', 40, 95);

      ctx.fillStyle = '#FFE082';
      ctx.font = '16px sans-serif';
      ctx.fillText(`तारीख: ${todayStr}  •  शेतकरी व्हॉट्सअ‍ॅप सल्ला`, 40, 120);

      // Crop & Diagnosis Card
      ctx.fillStyle = '#F4F9F2';
      ctx.fillRect(40, 160, 720, 150);
      ctx.strokeStyle = '#C8DEC4';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 160, 720, 150);

      ctx.fillStyle = '#1A2E1C';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(`पीक: ${diagnosis.crop_identified}`, 60, 200);

      ctx.fillStyle = '#C62828';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(`रोग: ${diagnosis.disease_name_vernacular}`, 60, 240);

      ctx.fillStyle = '#4E684B';
      ctx.font = '16px sans-serif';
      ctx.fillText(`इंग्रजी नाव: ${diagnosis.disease_name_english} (${diagnosis.pathogen_type})`, 60, 270);

      ctx.fillStyle = '#F57C00';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(`तीव्रता निर्देशांक: ${diagnosis.severity_score}/10  |  धोका: ${diagnosis.urgency_level}  |  उत्पन्न बचत: ${diagnosis.estimated_loss_prevention_inr}`, 60, 295);

      // Tier 1: Organic Remedies
      ctx.fillStyle = '#E8F5E9';
      ctx.fillRect(40, 330, 720, 270);
      ctx.strokeStyle = '#81C784';
      ctx.strokeRect(40, 330, 720, 270);

      ctx.fillStyle = '#1B5E20';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('🌿 स्तर १: सेंद्रिय व जैविक उपाय (Organic Plan - शून्य विषारी अंश)', 60, 365);

      ctx.fillStyle = '#1B3819';
      ctx.font = '16px sans-serif';
      let yOffset = 405;
      diagnosis.organic_remedy.slice(0, 4).forEach((step) => {
        ctx.fillText(`• ${step.substring(0, 70)}`, 60, yOffset);
        yOffset += 32;
      });

      // Tier 2: Chemical Emergency
      ctx.fillStyle = '#FFEBEE';
      ctx.fillRect(40, 620, 720, 240);
      ctx.strokeStyle = '#EF9A9A';
      ctx.strokeRect(40, 620, 720, 240);

      ctx.fillStyle = '#C62828';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('⚠️ स्तर २: रासायनिक औषधोपचार व फवारणी (Chemical Emergency)', 60, 655);

      ctx.fillStyle = '#4A1515';
      ctx.font = '16px sans-serif';
      yOffset = 695;
      diagnosis.chemical_remedy.slice(0, 3).forEach((step) => {
        ctx.fillText(`• ${step.substring(0, 70)}`, 60, yOffset);
        yOffset += 32;
      });

      ctx.fillStyle = '#C62828';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(`कापणी प्रतीक्षा काळ (PHI): ${diagnosis.safe_phi_days || 14} दिवस  |  सुरक्षा: मास्क व हातमोजे वापरा.`, 60, 835);

      // Footer
      ctx.fillStyle = '#F1F5EB';
      ctx.fillRect(40, 880, 720, 130);
      ctx.strokeStyle = '#D5E2CC';
      ctx.strokeRect(40, 880, 720, 130);

      ctx.fillStyle = '#2A4327';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(`⛅ हवामान सल्ला: ${diagnosis.weather_advice || 'पहाटे शांत हवेत फवारणी करावी.'}`, 60, 920);

      ctx.fillStyle = '#557252';
      ctx.font = '13px sans-serif';
      ctx.fillText('Powered by Google AI Studio Gemini 3.8 Flash • ShetkariMitra AgriVision AI', 60, 955);
      ctx.fillText('हा सल्ला कृषी मार्गदर्शनासाठी असून स्थानिक कृषी अधिकाऱ्यांचा सल्ला घ्यावा.', 60, 980);

      // Download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `ShetkariMitra_${diagnosis.crop_identified}_Advisory.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error('Failed to export slip:', e);
    } finally {
      setIsGeneratingSlip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#DCE7D6] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="bg-[#1B5E20] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-[#A5D6A7]" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {t.whatsappSlipTitle}
              </h3>
              <p className="text-xs text-[#C8E6C9]">
                शेतकरी व्हॉट्सअ‍ॅप ग्रुपवर त्वरित शेअर करण्यासाठी तयार सल्ला
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Advisory Card Preview */}
        <div ref={cardRef} className="p-5 sm:p-6 bg-[#F9FBF7] space-y-4 max-h-[70vh] overflow-y-auto">
          
          {/* Slip Header Box */}
          <div className="bg-white rounded-xl p-4 border border-[#D9E7D3] shadow-2xs">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9]">
                  {todayStr} • ShetkariMitra
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#1A2E1C] mt-1">
                  {diagnosis.disease_name_vernacular}
                </h4>
                <p className="text-xs font-semibold text-[#4E684B]">
                  पीक: <strong className="text-[#1B5E20]">{diagnosis.crop_identified}</strong> • {diagnosis.disease_name_english}
                </p>
              </div>

              {leafImage && (
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#D2E4CC] shrink-0 bg-black">
                  <img
                    src={leafImage}
                    alt="Diagnosed Leaf"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="mt-3 pt-3 border-t border-[#EDF4EB] flex items-center justify-between text-xs flex-wrap gap-2">
              <span className="font-bold text-[#C62828]">
                तीव्रता: {diagnosis.severity_score}/10 ({diagnosis.urgency_level})
              </span>
              <span className="font-bold text-[#1B5E20] bg-[#E8F5E9] px-2 py-0.5 rounded">
                उत्पन्न बचत: {diagnosis.estimated_loss_prevention_inr}
              </span>
            </div>
          </div>

          {/* Tier 1 Organic Plan Summary */}
          <div className="bg-[#F3FAF0] rounded-xl p-4 border border-[#CDE5C8]">
            <h5 className="text-xs sm:text-sm font-extrabold text-[#1B5E20] mb-2 flex items-center gap-1.5">
              <span>🌿 स्तर १: सेंद्रिय व जैविक उपाय (Organic Plan)</span>
            </h5>
            <ul className="text-xs text-[#203D1D] space-y-1.5">
              {diagnosis.organic_remedy.map((step, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#2E7D32] font-bold">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 2 Chemical Plan Summary */}
          <div className="bg-[#FFF6F6] rounded-xl p-4 border border-[#FAD4D4]">
            <h5 className="text-xs sm:text-sm font-extrabold text-[#C62828] mb-2 flex items-center gap-1.5">
              <span>⚠️ स्तर २: रासायनिक औषधोपचार (Emergency Chemical Plan)</span>
            </h5>
            <ul className="text-xs text-[#481818] space-y-1.5 mb-2">
              {diagnosis.chemical_remedy.map((step, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#C62828] font-bold">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="text-[11px] font-bold text-[#C62828] pt-1.5 border-t border-[#FCDADA]">
              कापणी प्रतीक्षा काळ (PHI): {diagnosis.safe_phi_days || 14} दिवस. काढणीपूर्वी रासायनिक अवशेष नष्ट होण्याची सुरक्षित मुदत.
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="bg-white p-4 border-t border-[#E2EBDC] flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            id="btn-copy-slip-text"
            onClick={handleCopyText}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#CCDDC6] hover:bg-[#F2F7EF] text-[#2C4927] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#1B5E20]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'मजकूर कॉपी झाला!' : 'मजकूर कॉपी करा (Copy)'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="btn-download-slip-image"
              onClick={handleDownloadImage}
              disabled={isGeneratingSlip}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#144A18] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingSlip ? 'तयार होत आहे...' : t.downloadSlip}</span>
            </button>

            <button
              id="btn-share-whatsapp-direct"
              onClick={handleShareToWhatsApp}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.shareWhatsApp}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
