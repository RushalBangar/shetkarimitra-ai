import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Camera, Upload, X, RefreshCw, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface LeafInputPanelProps {
  currentLanguage: Language;
  selectedImage: string | null;
  cropName: string;
  notes: string;
  isAnalyzing: boolean;
  onImageSelected: (base64: string, fileName?: string) => void;
  onCropNameChange: (crop: string) => void;
  onNotesChange: (notes: string) => void;
  onDiagnose: () => void;
  onClear: () => void;
}

export const LeafInputPanel: React.FC<LeafInputPanelProps> = ({
  currentLanguage,
  selectedImage,
  cropName,
  notes,
  isAnalyzing,
  onImageSelected,
  onCropNameChange,
  onNotesChange,
  onDiagnose,
  onClear,
}) => {
  const t = translations[currentLanguage];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Quick crop suggestions in rural India
  const popularCrops = [
    { label: currentLanguage === 'mr' ? 'द्राक्ष' : currentLanguage === 'hi' ? 'अंगूर' : 'Grapes', value: 'Grapes' },
    { label: currentLanguage === 'mr' ? 'टोमॅटो' : currentLanguage === 'hi' ? 'टमाटर' : 'Tomato', value: 'Tomato' },
    { label: currentLanguage === 'mr' ? 'कांदा' : currentLanguage === 'hi' ? 'प्याज' : 'Onion', value: 'Onion' },
    { label: currentLanguage === 'mr' ? 'डाळिंब' : currentLanguage === 'hi' ? 'अनार' : 'Pomegranate', value: 'Pomegranate' },
    { label: currentLanguage === 'mr' ? 'कापूस' : currentLanguage === 'hi' ? 'कपास' : 'Cotton', value: 'Cotton' },
    { label: currentLanguage === 'mr' ? 'सोयाबीन' : currentLanguage === 'hi' ? 'सोयाबीन' : 'Soybean', value: 'Soybean' },
  ];

  // Stop camera when unmounting or deactivated
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      setIsCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 100);
    } catch (err: any) {
      console.error('Camera access error:', err);
      setCameraError('Camera access denied or unavailable in this environment.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      onImageSelected(dataUrl, 'leaf_capture.jpg');
      stopCamera();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onImageSelected(reader.result, file.name);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#DCE7D6] shadow-sm p-4 sm:p-6 flex flex-col justify-between">
      <div>
        
        {/* Panel Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EEF4EB]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#1A2E1C]">
              {t.panelInputTitle}
            </h2>
          </div>
          {selectedImage && (
            <button
              id="btn-clear-leaf"
              onClick={onClear}
              className="text-xs font-semibold text-[#C62828] hover:text-[#B71C1C] flex items-center gap-1 cursor-pointer bg-[#FFEBEE] px-2.5 py-1 rounded-md"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t.clearImage}</span>
            </button>
          )}
        </div>

        {/* Camera Live Stream Modal or Box */}
        {isCameraActive ? (
          <div className="relative rounded-xl overflow-hidden bg-black border-2 border-[#1B5E20] mb-4 aspect-4/3 flex flex-col items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-3 px-4">
              <button
                id="btn-snap-photo"
                onClick={capturePhoto}
                className="px-5 py-2.5 rounded-full bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>फोटो काढा (Capture)</span>
              </button>
              <button
                id="btn-cancel-camera"
                onClick={stopCamera}
                className="px-4 py-2.5 rounded-full bg-[#374151] hover:bg-[#1F2937] text-white font-semibold text-sm cursor-pointer"
              >
                रद्द करा
              </button>
            </div>
          </div>
        ) : selectedImage ? (
          /* Preview Box */
          <div className="relative rounded-xl overflow-hidden border border-[#CDE0C7] bg-[#141B12] mb-4 aspect-4/3 group shadow-inner">
            <img
              src={selectedImage}
              alt="Crop Leaf Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain p-2"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                id="btn-change-photo"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t.clearImage}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Upload & Camera Trigger Zone */
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all mb-4 ${
              isDragging
                ? 'border-[#1B5E20] bg-[#E8F5E9]'
                : 'border-[#CADBC3] bg-[#F7FAF4] hover:bg-[#F0F6EC]'
            }`}
          >
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center shadow-2xs">
              <Upload className="w-7 h-7" />
            </div>
            <p className="text-sm font-bold text-[#1A2E1C] mb-1">
              {t.uploadPrompt}
            </p>
            <p className="text-xs text-[#526B4F] mb-4 max-w-xs mx-auto">
              {t.uploadSubtext}
            </p>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button
                id="btn-browse-file"
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{t.takePhoto}</span>
              </button>

              <button
                id="btn-open-camera"
                type="button"
                onClick={startCamera}
                className="px-4 py-2 rounded-xl bg-white hover:bg-[#F2F7EF] text-[#1B5E20] border border-[#BFD5B8] text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>कॅमेरा (Live Camera)</span>
              </button>
            </div>

            {cameraError && (
              <p className="mt-3 text-xs text-[#C62828] flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{cameraError}</span>
              </p>
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Crop Name & Fast Suggestions */}
        <div className="space-y-3 mb-4">
          <div>
            <label
              htmlFor="crop-input"
              className="block text-xs font-bold text-[#2A4327] mb-1"
            >
              {t.cropLabel}
            </label>
            <input
              id="crop-input"
              type="text"
              value={cropName}
              onChange={(e) => onCropNameChange(e.target.value)}
              placeholder={t.cropPlaceholder}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#CCDDC6] bg-[#FAFCF8] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B5E20] text-[#1A2E1C]"
            />
            {/* Suggestions */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="text-[11px] text-[#637C61] font-medium">जलद निवडा:</span>
              {popularCrops.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => onCropNameChange(c.value)}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-medium border cursor-pointer transition-colors ${
                    cropName.toLowerCase().includes(c.value.toLowerCase())
                      ? 'bg-[#1B5E20] text-white border-[#1B5E20]'
                      : 'bg-[#F2F6ED] text-[#2C4927] hover:bg-[#E3EBD9] border-[#D0DFCB]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Farm Notes & Conditions */}
          <div>
            <label
              htmlFor="notes-input"
              className="block text-xs font-bold text-[#2A4327] mb-1"
            >
              {t.notesLabel}
            </label>
            <textarea
              id="notes-input"
              rows={3}
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder={t.notesPlaceholder}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#CCDDC6] bg-[#FAFCF8] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B5E20] text-[#1A2E1C] resize-none"
            />
          </div>
        </div>

      </div>

      {/* Main Diagnose Button */}
      <div className="pt-2">
        <button
          id="btn-diagnose-action"
          type="button"
          disabled={!selectedImage || isAnalyzing}
          onClick={onDiagnose}
          className={`w-full py-3.5 px-4 rounded-xl text-sm sm:text-base font-extrabold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
            !selectedImage
              ? 'bg-[#D3E0CD] text-[#71886C] cursor-not-allowed'
              : isAnalyzing
              ? 'bg-[#2E7D32] text-white cursor-wait opacity-90'
              : 'bg-[#1B5E20] hover:bg-[#144A18] text-white shadow-md active:scale-[0.99]'
          }`}
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>{t.diagnosing}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-[#F57C00]" />
              <span>{t.diagnoseButton}</span>
            </>
          )}
        </button>
        {!selectedImage && (
          <p className="text-center text-[11px] text-[#6E8569] mt-2 font-medium">
            कृपया प्रथम फोटो निवडा किंवा वरील १-क्लिक चाचणी नमुना वापरा
          </p>
        )}
      </div>

    </div>
  );
};
