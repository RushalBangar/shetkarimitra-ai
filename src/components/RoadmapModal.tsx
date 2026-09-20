import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, MessageSquare, CloudRain, Radio, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const t = translations[currentLanguage];

  if (!isOpen) return null;

  const roadmapItems = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />,
      title: currentLanguage === 'mr' ? 'व्हॉट्सअ‍ॅप बॉट एकत्रीकरण (WhatsApp Chatbot)' : currentLanguage === 'hi' ? 'व्हाट्सएप चैटबॉट एकीकरण' : 'WhatsApp Chatbot via Twilio / Meta Business API',
      badge: 'Meta / Twilio Cloud API',
      description: currentLanguage === 'mr'
        ? 'शेतकऱ्यांना कोणत्याही अ‍ॅप इन्स्टॉलशिवाय थेट व्हॉट्सअ‍ॅपवर पानाचा फोटो पाठवून ५ सेकंदात मायबोली व्हॉइस ऑडिओ सल्ला मिळण्याची सुविधा.'
        : currentLanguage === 'hi'
        ? 'किसानों को बिना किसी ऐप डाउनलोड के सीधे व्हाट्सएप पर पत्ती का फोटो भेजकर ५ सेकंड में ऑडियो व टेक्स्ट सलाह पाने की सुविधा।'
        : 'Zero-app friction: Smallholder farmers snap a leaf photo in WhatsApp and immediately receive vernacular voice notes and two-tier remedy slips.',
      status: 'API Ready',
    },
    {
      icon: <CloudRain className="w-6 h-6 text-[#0288D1]" />,
      title: currentLanguage === 'mr' ? 'हायपरलोकल हवामान रडार (Hyperlocal Weather Radar)' : currentLanguage === 'hi' ? 'हाइपरलोकल मौसम रडार' : 'Hyperlocal Weather Runoff Protection Radar',
      badge: 'IMD / OpenWeather API',
      description: currentLanguage === 'mr'
        ? 'फवारणीपूर्वी पुढील ४८ तासांतील स्थानिक पावसाचा व आर्द्रतेचा अंदाज घेऊन रासायनिक वाहून जाणे (Chemical Runoff) आणि शेतकऱ्यांचा हजारो रुपयांचा खर्च वाया जाण्यापासून रोखणे.'
        : currentLanguage === 'hi'
        ? 'छिड़काव से पूर्व अगले ४८ घंटों में वर्षा और अत्यधिक नमी की पूर्व-चेतावनी देकर कीटनाशक बहने और किसानों के खर्च की बचत।'
        : 'Smart spray timing advisor: Predicts rain within 48 hours to delay expensive chemical sprays, preventing pesticide runoff and groundwater contamination.',
      status: 'Pilot Integration',
    },
    {
      icon: <Radio className="w-6 h-6 text-[#F57C00]" />,
      title: currentLanguage === 'mr' ? '५ किमी कम्युनिटी रोग चेतावणी रडार (Outbreak Radar)' : currentLanguage === 'hi' ? '५ किमी सामुदायिक प्रकोप रडार' : '5-km Community Outbreak Radar',
      badge: 'Geospatial Cluster AI',
      description: currentLanguage === 'mr'
        ? 'एखाद्या शिवारात किंवा ५ किमी परिघात केवडा किंवा करपा रोगाचा प्रादुर्भाव आढळल्यास गावातील शेजारील शेतकऱ्यांना त्वरित सेंद्रिय प्रतिबंधक फवारणीचा सावधगिरीचा अलर्ट पाठवणे.'
        : currentLanguage === 'hi'
        ? 'किसी खेत में संक्रमण पाए जाने पर ५ किमी के दायरे के पड़ोसी किसानों को तुरंत जैविक रोकथाम का पूर्व-अलर्ट भेजने की प्रणाली।'
        : 'Early epidemic containment: Detects disease clusters and alerts nearby farms within a 5-km radius to apply preventive organic bio-agents before airborne spores spread.',
      status: 'Architecture Designed',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#DCE7D6] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#1B5E20] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#FFD54F]" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {t.roadmapTitle}
              </h3>
              <p className="text-xs text-[#C8E6C9]">
                Scaling Vernacular Multimodal Diagnostics to 100M+ Smallholder Farmers
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

        {/* Content */}
        <div className="p-6 bg-[#F9FBF7] space-y-4">
          <div className="space-y-3">
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#DEEAD9] shadow-2xs hover:border-[#BFD8B7] transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F4F8F1] border border-[#DEEAD9] shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                      <h4 className="font-extrabold text-sm sm:text-base text-[#1A2E1C]">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#4F684C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] text-xs text-[#1B5E20] flex items-center gap-3">
            <Shield className="w-5 h-5 shrink-0 text-[#2E7D32]" />
            <div>
              <strong className="font-bold">Zero-Carbon Rural Edge Architecture: </strong>
              <span>Lightweight Gemini 3.8 Flash inference ensures ultra-low latency, accessible even on 3G rural mobile networks.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-3.5 border-t border-[#E2EBDC] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1B5E20] hover:bg-[#144A18] text-white text-xs font-bold cursor-pointer transition-colors"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
