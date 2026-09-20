import { Language } from '../types';

export const translations = {
  mr: {
    appTitle: 'शेतकरी मित्र',
    appSubtitle: 'AgriVision AI — पीक रोग निदान व दुहेरी सल्ला प्रणाली',
    tagline: 'शेतकऱ्यांना मायबोलीत त्वरित अचूक पीक निदान आणि पर्यावरणपूरक उपाय',
    pillPeople: 'मायबोली आवाज सल्ला',
    pillPlanet: 'जैविक व सेंद्रिय प्रथम',
    pillProgress: 'AI व्हिजन तंत्रज्ञान',
    
    // Quick presets
    demoPresetsTitle: '⚡ १-क्लिक चाचणी नमुने (Instant Demos):',
    grapeDemo: 'द्राक्ष: केवडा रोग (Downy Mildew)',
    tomatoDemo: 'टोमॅटो: करपा (Late Blight)',
    onionDemo: 'कांदा: जांभळा करपा (Purple Blotch)',
    
    // Left panel: Input
    panelInputTitle: 'पानाचे छायाचित्र व माहिती',
    uploadPrompt: 'रोगट पानाचा फोटो येथे टाका किंवा निवडा',
    uploadSubtext: 'कॅमेरा किंवा गॅलरीतून स्पष्ट फोटो अपलोड करा (JPG, PNG)',
    takePhoto: 'फोटो काढा / अपलोड करा',
    cropLabel: 'पिकाचे नाव (ऐच्छिक)',
    cropPlaceholder: 'उदा. द्राक्ष, टोमॅटो, कांदा, डाळिंब, सोयाबीन',
    notesLabel: 'लक्षणे किंवा शेताची स्थिती (ऐच्छिक)',
    notesPlaceholder: 'उदा. पानांवर पिवळे तेलकट डाग, जास्त दमट हवामान, काल पाणी दिले...',
    diagnoseButton: '🚀 पीक रोग निदान करा (Diagnose Now)',
    diagnosing: 'AI द्वारे पानावरील रोगाचे विश्लेषण सुरू आहे...',
    clearImage: 'फोटो बदला',
    
    // Right panel: Results
    panelResultsTitle: 'निदान अहवाल व तज्ज्ञ कृषी सल्ला (Diagnostic Dashboard)',
    noDiagnosisPrompt: 'कृपया डाव्या बाजूने पानाचा फोटो अपलोड करा किंवा वरील कोणत्याही १-क्लिक नमुन्यावर क्लिक करा.',
    severeAlert: 'धोका पातळी',
    cropIdentified: 'ओळखलेले पीक',
    pathogen: 'रोगाचा प्रकार',
    contagion: 'प्रसार गती (Contagion Velocity)',
    severityTitle: 'तीव्रता निर्देशांक (Severity Meter)',
    economicTitle: 'अंदाजित उत्पन्न बचत (Yield Loss Prevention)',
    weatherTitle: 'हवामान व फवारणी सल्ला (Weather Advisory)',
    
    // Voice player
    listenButton: '🔊 आवाजात ऐका (Listen to Advisory)',
    playingAudio: 'सल्ला सुरू आहे... (Playing)',
    pauseAudio: 'सल्ला थांबवा (Pause)',
    replayAudio: 'पुन्हा ऐका (Replay)',
    
    // Dual-Tier Remedy
    tier1Title: '🌿 स्तर १: सेंद्रिय व जैविक उपाय (Organic & Biological Plan)',
    tier1Badge: 'प्राधान्य: पर्यावरणपूरक व कमी खर्चिक',
    tier2Title: '⚠️ स्तर २: रासायनिक उपाय व तातडीची फवारणी (Chemical Intervention)',
    tier2Badge: 'अति-तीव्रतेच्या वेळीच वापरा',
    phiLabel: 'कापणीपूर्वी प्रतीक्षा काळ (Pre-Harvest Interval - PHI):',
    safetyNotice: 'सुरक्षा सूचना: फवारणी करताना मास्क, हातमोजे वापरा व वाऱ्याच्या दिशेने फवारा.',
    
    // WhatsApp Slip & Actions
    whatsappSlipTitle: 'शेतकरी व्हॉट्सअ‍ॅप सल्ला पत्रिका (WhatsApp Advisory Slip)',
    shareWhatsApp: 'व्हॉट्सअ‍ॅप ग्रुपवर पाठवा (Share to WhatsApp)',
    downloadSlip: 'सल्ला पत्रिका डाउनलोड करा (Download Slip)',
    slipDownloaded: 'सल्ला पत्रिका सेव्ह झाली!',
    
    // Future Roadmap
    roadmapBtn: 'भविष्यकालीन वैशिष्ट्ये (Roadmap)',
    roadmapTitle: 'शेतकरी मित्र — पुढील टप्पे व नावीन्यपूर्ण योजना',
    roadmapTwilio: 'व्हॉट्सअ‍ॅप बॉट एकत्रीकरण (Meta / Twilio API द्वारे थेट शेतातून मेसेजवर निदान)',
    roadmapWeather: 'हायपरलोकल हवामान रडार (४८ तासांत पावसाचा इशारा असल्यास फवारणी पुढे ढकलण्याची सूचना)',
    roadmapOutbreak: '५ किमी कम्युनिटी रोग चेतावणी रडार (शेजारच्या शेतात प्रादुर्भाव आढळल्यास गावातील शेतकऱ्यांना अलर्ट)',
    close: 'बंद करा'
  },
  hi: {
    appTitle: 'शेतकरी मित्र',
    appSubtitle: 'AgriVision AI — फसल रोग निदान एवं द्वि-स्तरीय उपचार प्रणाली',
    tagline: 'किसानों को अपनी भाषा में सटीक फसल निदान और पर्यावरण-अनुकूल उपाय',
    pillPeople: 'मातृभाषा आवाज़ सलाह',
    pillPlanet: 'जैविक व पर्यावरण हितैषी',
    pillProgress: 'AI विज़न तकनीक',
    
    // Quick presets
    demoPresetsTitle: '⚡ १-क्लिक टेस्ट नमूने (Instant Demos):',
    grapeDemo: 'अंगूर: डाउनी मिल्ड्यू / केवड़ा',
    tomatoDemo: 'टमाटर: अगेती/पछेती झुलसा (Blight)',
    onionDemo: 'प्याज: बैंगनी धब्बा (Purple Blotch)',
    
    // Left panel: Input
    panelInputTitle: 'पत्ती का फोटो एवं विवरण',
    uploadPrompt: 'संक्रमित पत्ती की तस्वीर यहाँ डालें या चुनें',
    uploadSubtext: 'कैमरा या गैलरी से स्पष्ट तस्वीर अपलोड करें (JPG, PNG)',
    takePhoto: 'फोटो खींचे / अपलोड करें',
    cropLabel: 'फसल का नाम (वैकल्पिक)',
    cropPlaceholder: 'उदा. अंगूर, टमाटर, प्याज, अनार, कपास',
    notesLabel: 'लक्षण या खेत की स्थिति (वैकल्पिक)',
    notesPlaceholder: 'उदा. पत्तियों पर पीले धब्बे, अधिक नमी, कल सिंचाई की थी...',
    diagnoseButton: '🚀 फसल रोग निदान करें (Diagnose Now)',
    diagnosing: 'AI द्वारा पत्ती के लक्षणों का विश्लेषण जारी है...',
    clearImage: 'फोटो बदलें',
    
    // Right panel: Results
    panelResultsTitle: 'निदान रिपोर्ट एवं विशेषज्ञ कृषि सलाह (Diagnostic Dashboard)',
    noDiagnosisPrompt: 'कृपया बाईं तरफ से पत्ती का फोटो अपलोड करें या ऊपर दिए गए किसी १-क्लिक नमूने को चुनें।',
    severeAlert: 'खतरे का स्तर',
    cropIdentified: 'पहचानी गई फसल',
    pathogen: 'रोग का प्रकार',
    contagion: 'फैलाव गति (Contagion Velocity)',
    severityTitle: 'रोग गंभीरता मीटर (Severity Meter)',
    economicTitle: 'अनुमानित फसल नुकसान बचाव (Yield Loss Prevention)',
    weatherTitle: 'मौसम एवं छिड़काव सलाह (Weather Advisory)',
    
    // Voice player
    listenButton: '🔊 आवाज़ में सुनें (Listen to Advisory)',
    playingAudio: 'सलाह चल रही है... (Playing)',
    pauseAudio: 'रोकें (Pause)',
    replayAudio: 'फिर से सुनें (Replay)',
    
    // Dual-Tier Remedy
    tier1Title: '🌿 स्तर १: जैविक एवं प्राकृतिक उपचार (Organic & Biological Plan)',
    tier1Badge: 'प्राथमिकता: पर्यावरण सुरक्षित एवं कम खर्चीला',
    tier2Title: '⚠️ स्तर २: रासायनिक उपचार एवं आपातकालीन छिड़काव (Chemical Intervention)',
    tier2Badge: 'अति-गंभीर स्थिति में ही प्रयोग करें',
    phiLabel: 'तुड़ाई पूर्व प्रतीक्षा अवधि (Pre-Harvest Interval - PHI):',
    safetyNotice: 'सुरक्षा निर्देश: छिड़काव के समय मास्क और दस्ताने पहनें, हवा की दिशा में छिड़कें।',
    
    // WhatsApp Slip & Actions
    whatsappSlipTitle: 'किसान व्हाट्सएप परामर्श पर्ची (WhatsApp Advisory Slip)',
    shareWhatsApp: 'व्हाट्सएप ग्रुप पर साझा करें (Share to WhatsApp)',
    downloadSlip: 'पर्ची डाउनलोड करें (Download Slip)',
    slipDownloaded: 'सलाह पर्ची सुरक्षित कर ली गई!',
    
    // Future Roadmap
    roadmapBtn: 'आगामी सुविधाएं (Roadmap)',
    roadmapTitle: 'शेतकरी मित्र — भावी योजनाएं एवं उन्नत तकनीक',
    roadmapTwilio: 'व्हाट्सएप चैटबॉट एकीकरण (Meta / Twilio API द्वारा सीधे संदेश पर निदान)',
    roadmapWeather: 'हाइपरलोकल मौसम रडार (४८ घंटे में वर्षा की चेतावनी पर छिड़काव स्थगित करने का सुझाव)',
    roadmapOutbreak: '५ किमी सामुदायिक प्रकोप रडार (पड़ोसी खेतों में संक्रमण मिलने पर निकटवर्ती किसानों को चेतावनी)',
    close: 'बंद करें'
  },
  en: {
    appTitle: 'ShetkariMitra',
    appSubtitle: 'AgriVision AI — Vernacular Multimodal Crop Diagnostics & Dual-Tier Remedies',
    tagline: 'Empowering smallholders with vernacular voice guidance, organic-first remedies & computer vision',
    pillPeople: 'Vernacular Voice Advisory',
    pillPlanet: 'Organic & Bio-First',
    pillProgress: 'Gemini Vision AI',
    
    // Quick presets
    demoPresetsTitle: '⚡ 1-Click Evaluation Presets (Instant Demos):',
    grapeDemo: 'Grapes: Downy Mildew (केवडा)',
    tomatoDemo: 'Tomato: Late Blight (करपा)',
    onionDemo: 'Onion: Purple Blotch (जांभळा करपा)',
    
    // Left panel: Input
    panelInputTitle: 'Leaf Capture & Context',
    uploadPrompt: 'Drop leaf photo here or click to browse',
    uploadSubtext: 'Upload a clear leaf photo via camera or storage (JPG, PNG)',
    takePhoto: 'Take Photo / Upload Leaf',
    cropLabel: 'Crop Name (Optional)',
    cropPlaceholder: 'e.g., Grapes, Tomato, Onion, Pomegranate, Soybean',
    notesLabel: 'Symptoms / Farm Conditions (Optional)',
    notesPlaceholder: 'e.g., Yellow oily spots, high humidity, watered yesterday...',
    diagnoseButton: '🚀 Diagnose Crop Disease (AI Vision)',
    diagnosing: 'AI Pathologist inspecting leaf symptoms...',
    clearImage: 'Change Photo',
    
    // Right panel: Results
    panelResultsTitle: 'Diagnostic Dashboard & Agronomy Advisory',
    noDiagnosisPrompt: 'Upload a leaf photo on the left or select any 1-Click Demo Preset above to inspect results.',
    severeAlert: 'Urgency Status',
    cropIdentified: 'Identified Crop',
    pathogen: 'Pathogen Type',
    contagion: 'Contagion Velocity',
    severityTitle: 'Severity Meter',
    economicTitle: 'Estimated Yield Loss Prevention',
    weatherTitle: 'Weather & Spraying Advisory',
    
    // Voice player
    listenButton: '🔊 Listen to Advisory (आवाजात ऐका)',
    playingAudio: 'Playing Advisory...',
    pauseAudio: 'Pause Audio',
    replayAudio: 'Replay Advisory',
    
    // Dual-Tier Remedy
    tier1Title: '🌿 Tier 1: Organic & Biological Remedies (Priority)',
    tier1Badge: 'Eco-Safe, Low Cost & Zero Runoff',
    tier2Title: '⚠️ Tier 2: Targeted Chemical Intervention (Emergency Only)',
    tier2Badge: 'Controlled Dosage & Safety Interval',
    phiLabel: 'Pre-Harvest Interval (PHI Wait Time):',
    safetyNotice: 'Safety Notice: Wear face mask & gloves during spray; spray along wind direction in early morning.',
    
    // WhatsApp Slip & Actions
    whatsappSlipTitle: 'WhatsApp-Ready Farmer Advisory Slip',
    shareWhatsApp: 'Share to Farmer WhatsApp Group',
    downloadSlip: 'Download Advisory Slip (PNG)',
    slipDownloaded: 'Advisory slip saved successfully!',
    
    // Future Roadmap
    roadmapBtn: 'Future Roadmap',
    roadmapTitle: 'ShetkariMitra — Innovation & Scaling Roadmap',
    roadmapTwilio: 'WhatsApp Chatbot via Twilio / Meta Business API (Instant camera upload from fields)',
    roadmapWeather: 'Hyperlocal Weather Radar (Detects 48h rain forecast to prevent chemical runoff)',
    roadmapOutbreak: '5-km Community Contagion Radar (Notifies nearby cluster farms when outbreak starts)',
    close: 'Close'
  }
};
