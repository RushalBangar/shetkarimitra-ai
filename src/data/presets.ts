import { SamplePreset } from '../types';

// High-detail SVG leaf visuals for the 3 key Indian cash crops & diseases
const grapeDownyMildewSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="100%" height="100%">
  <defs>
    <radialGradient id="grapeLeafBase" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#4E8D34"/>
      <stop offset="60%" stop-color="#336E20"/>
      <stop offset="100%" stop-color="#1E4B12"/>
    </radialGradient>
    <radialGradient id="oilSpot1" cx="35%" cy="30%" r="40%">
      <stop offset="0%" stop-color="#F2D136" stop-opacity="0.95"/>
      <stop offset="65%" stop-color="#CCA310" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#8F8C1D" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="oilSpot2" cx="50%" cy="50%" r="45%">
      <stop offset="0%" stop-color="#EFBD24" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="#B28E0D" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#556B2F" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="downyMildewFuzz" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#F7FAF0" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#E1EAD2" stop-opacity="0"/>
    </radialGradient>
    <filter id="mildewTexture">
      <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.45 0"/>
      <feComposite in2="SourceGraphic" in="gl" operator="in"/>
    </filter>
  </defs>
  <!-- Background soil backdrop -->
  <rect width="400" height="320" fill="#202A1E"/>
  
  <!-- Grape Petiole Stem -->
  <path d="M200,310 C198,280 195,245 200,230" stroke="#7A934E" stroke-width="7" stroke-linecap="round" fill="none"/>
  
  <!-- 5-Lobed Vitis vinifera leaf blade -->
  <path d="M200,230 
           C160,240 100,225 70,185 
           C45,150 50,110 75,80 
           C90,60 115,55 140,75 
           C150,55 175,25 200,20 
           C225,25 250,55 260,75 
           C285,55 310,60 325,80 
           C350,110 355,150 330,185 
           C300,225 240,240 200,230 Z" 
        fill="url(#grapeLeafBase)" stroke="#274B16" stroke-width="3"/>

  <!-- Serrated Leaf Edge accents -->
  <path d="M75,80 L80,72 L87,77 L95,68 L104,75 L115,64 L127,73 L140,75
           L146,65 L155,70 L168,52 L178,58 L188,38 L200,20
           L212,38 L222,58 L232,52 L245,70 L254,65 L260,75
           L273,73 L285,64 L296,75 L305,68 L313,77 L320,72 L325,80" 
        stroke="#1E3E11" stroke-width="1.5" fill="none"/>

  <!-- Main Leaf Veins -->
  <g stroke="#8CBF5C" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
    <path d="M200,230 C200,160 200,90 200,25"/>
    <path d="M200,210 C165,160 125,120 78,82"/>
    <path d="M200,210 C235,160 275,120 322,82"/>
    <path d="M200,215 C150,195 110,180 72,185"/>
    <path d="M200,215 C250,195 290,180 328,185"/>
  </g>
  <!-- Secondary fine veins -->
  <g stroke="#7AA84F" stroke-width="1.2" opacity="0.65">
    <path d="M200,170 C175,150 150,140 130,135"/>
    <path d="M200,170 C225,150 250,140 270,135"/>
    <path d="M200,130 C175,115 155,100 140,95"/>
    <path d="M200,130 C225,115 245,100 260,95"/>
    <path d="M200,90 C185,80 170,70 160,65"/>
    <path d="M200,90 C215,80 230,70 240,65"/>
  </g>

  <!-- Downy Mildew Pathological Symptoms (Oil spots & White Sporulation) -->
  <!-- Upper spot 1 -->
  <circle cx="150" cy="115" r="32" fill="url(#oilSpot1)"/>
  <ellipse cx="148" cy="112" rx="20" ry="16" fill="url(#downyMildewFuzz)"/>
  <circle cx="145" cy="110" r="10" fill="#FFFFFF" opacity="0.6"/>

  <!-- Center right severe spot -->
  <circle cx="245" cy="130" r="38" fill="url(#oilSpot2)"/>
  <ellipse cx="246" cy="132" rx="24" ry="20" fill="url(#downyMildewFuzz)"/>
  <circle cx="250" cy="128" r="12" fill="#FFFFFF" opacity="0.65"/>
  <circle cx="235" cy="142" r="8" fill="#806212" opacity="0.7"/>

  <!-- Upper left spot -->
  <circle cx="115" cy="85" r="22" fill="url(#oilSpot1)"/>
  <ellipse cx="114" cy="84" rx="14" ry="11" fill="url(#downyMildewFuzz)"/>

  <!-- Underside cottony bloom spot near lobe -->
  <circle cx="285" cy="165" r="28" fill="url(#oilSpot2)"/>
  <ellipse cx="282" cy="163" rx="19" ry="16" fill="url(#downyMildewFuzz)"/>

  <!-- Necrotic center (Brown dead tissue in older spots) -->
  <path d="M242,126 Q248,122 254,129 Q251,135 244,133 Z" fill="#603813" opacity="0.85"/>
  <path d="M147,108 Q152,106 156,112 Q150,116 146,113 Z" fill="#5A3510" opacity="0.8"/>

  <!-- Diagnostic Badge overlay inside preview -->
  <rect x="15" y="15" width="160" height="28" rx="6" fill="#1B5E20" opacity="0.9"/>
  <text x="25" y="34" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="sans-serif">🍇 द्राक्ष (Thompson Seedless)</text>
</svg>
`)}`;

const tomatoLateBlightSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="100%" height="100%">
  <defs>
    <radialGradient id="tomatoLeafBase" cx="45%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#3E7B27"/>
      <stop offset="70%" stop-color="#285C16"/>
      <stop offset="100%" stop-color="#16380A"/>
    </radialGradient>
    <radialGradient id="blightHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#382E1E" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#4E4424" stop-opacity="0.9"/>
      <stop offset="75%" stop-color="#B2A032" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3E7B27" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="necrosisDark" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1D160E"/>
      <stop offset="60%" stop-color="#34281B"/>
      <stop offset="100%" stop-color="#554426"/>
    </radialGradient>
  </defs>
  
  <rect width="400" height="320" fill="#1A2518"/>
  
  <!-- Central Stem (Rachis) -->
  <path d="M200,310 C198,240 196,160 200,40" stroke="#5E8337" stroke-width="6" stroke-linecap="round" fill="none"/>
  
  <!-- Tomato Terminal Leaflet -->
  <path d="M200,40 
           C170,60 145,95 150,130 
           C155,160 185,185 200,195 
           C215,185 245,160 250,130 
           C255,95 230,60 200,40 Z" 
        fill="url(#tomatoLeafBase)" stroke="#1A400E" stroke-width="2.5"/>

  <!-- Left Side Leaflet -->
  <path d="M190,200 
           C145,180 90,175 60,195 
           C40,210 45,240 75,250 
           C115,260 160,235 185,215 Z" 
        fill="url(#tomatoLeafBase)" stroke="#1A400E" stroke-width="2"/>

  <!-- Right Side Leaflet -->
  <path d="M210,195 
           C255,175 310,170 340,190 
           C360,205 355,235 325,245 
           C285,255 240,230 215,210 Z" 
        fill="url(#tomatoLeafBase)" stroke="#1A400E" stroke-width="2"/>

  <!-- Veins -->
  <path d="M200,190 L200,50" stroke="#7CB052" stroke-width="2" fill="none"/>
  <path d="M200,140 L165,115" stroke="#7CB052" stroke-width="1.4" fill="none"/>
  <path d="M200,140 L235,115" stroke="#7CB052" stroke-width="1.4" fill="none"/>
  <path d="M200,110 L170,90" stroke="#7CB052" stroke-width="1.4" fill="none"/>
  <path d="M200,110 L230,90" stroke="#7CB052" stroke-width="1.4" fill="none"/>

  <!-- Phytophthora infestans (Late Blight) Large Irregular Necrotic Lesions -->
  <!-- Top leaflet apex rot -->
  <ellipse cx="200" cy="55" rx="35" ry="25" fill="url(#blightHalo)"/>
  <ellipse cx="200" cy="52" rx="24" ry="18" fill="url(#necrosisDark)"/>
  <path d="M185,45 Q200,40 215,48 Q210,65 195,62 Z" fill="#150E07"/>

  <!-- Right edge water-soaked decay -->
  <ellipse cx="240" cy="120" rx="32" ry="24" fill="url(#blightHalo)"/>
  <ellipse cx="242" cy="122" rx="22" ry="16" fill="url(#necrosisDark)"/>

  <!-- Left side leaflet spreading rot -->
  <ellipse cx="80" cy="220" rx="38" ry="26" fill="url(#blightHalo)"/>
  <ellipse cx="78" cy="218" rx="26" ry="18" fill="url(#necrosisDark)"/>
  <circle cx="75" cy="216" r="10" fill="#0E0904"/>

  <!-- Delicate white fungal growth ring at edge of lesion (sporulation in humid condition) -->
  <path d="M210,135 C230,145 255,140 265,125" stroke="#E6EFE0" stroke-width="2" stroke-dasharray="3,2" fill="none" opacity="0.75"/>
  <path d="M60,230 C80,242 105,235 115,220" stroke="#E6EFE0" stroke-width="2" stroke-dasharray="3,2" fill="none" opacity="0.75"/>

  <!-- Diagnostic Badge overlay -->
  <rect x="15" y="15" width="145" height="28" rx="6" fill="#C62828" opacity="0.9"/>
  <text x="25" y="34" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="sans-serif">🍅 टोमॅटो (करपा / Blight)</text>
</svg>
`)}`;

const onionPurpleBlotchSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="100%" height="100%">
  <defs>
    <linearGradient id="onionBlade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4B8539"/>
      <stop offset="50%" stop-color="#346825"/>
      <stop offset="100%" stop-color="#204414"/>
    </linearGradient>
    <radialGradient id="purpleBlotch1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#431535"/>
      <stop offset="40%" stop-color="#5E1B46"/>
      <stop offset="70%" stop-color="#9C4158"/>
      <stop offset="85%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#346825" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="purpleBlotch2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#361026"/>
      <stop offset="45%" stop-color="#55193E"/>
      <stop offset="75%" stop-color="#8E3C52"/>
      <stop offset="90%" stop-color="#E1C655"/>
      <stop offset="100%" stop-color="#346825" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="400" height="320" fill="#1C2419"/>
  
  <!-- Soil Ridge -->
  <ellipse cx="200" cy="315" rx="180" ry="25" fill="#3D2E1C"/>
  
  <!-- Onion Hollow Tubular Leaf Blades (Allium cepa) -->
  <!-- Blade 1 (Left bending) -->
  <path d="M160,300 C140,210 100,140 70,60 C68,55 75,55 80,62 C115,130 155,200 175,300 Z" 
        fill="url(#onionBlade)" stroke="#19380E" stroke-width="2"/>

  <!-- Blade 2 (Center prominent) -->
  <path d="M190,305 C185,180 190,110 200,20 C204,18 208,22 206,30 C205,110 208,180 215,305 Z" 
        fill="url(#onionBlade)" stroke="#19380E" stroke-width="2"/>

  <!-- Blade 3 (Right outward sweep) -->
  <path d="M225,300 C240,210 280,140 330,70 C335,65 338,70 334,76 C290,145 255,215 240,300 Z" 
        fill="url(#onionBlade)" stroke="#19380E" stroke-width="2"/>

  <!-- Longitudinal leaf lines -->
  <path d="M198,300 L198,30" stroke="#719F58" stroke-width="1.2" opacity="0.6"/>
  <path d="M203,300 L203,30" stroke="#719F58" stroke-width="1.2" opacity="0.6"/>

  <!-- Alternaria porri: Sunken Elliptical Concentric Purple Lesions with Yellow Halos -->
  <!-- Primary severe blotch on center blade -->
  <g transform="translate(201, 150) rotate(-4)">
    <ellipse cx="0" cy="0" rx="16" ry="38" fill="url(#purpleBlotch1)"/>
    <!-- Concentric zonation rings -->
    <ellipse cx="0" cy="0" rx="10" ry="26" stroke="#2B0B1D" stroke-width="1.8" fill="none"/>
    <ellipse cx="0" cy="0" rx="5" ry="14" fill="#200615"/>
    <!-- Yellow chlorotic border -->
    <path d="M-15,-25 Q0,-42 15,-25 Q18,25 0,42 Q-18,25 -15,-25" stroke="#E3C945" stroke-width="1.5" fill="none" opacity="0.85"/>
  </g>

  <!-- Secondary spot higher up -->
  <g transform="translate(199, 80) rotate(2)">
    <ellipse cx="0" cy="0" rx="10" ry="22" fill="url(#purpleBlotch2)"/>
    <ellipse cx="0" cy="0" rx="5" ry="13" stroke="#2B0B1D" stroke-width="1.2" fill="#29071B"/>
  </g>

  <!-- Spot on left blade -->
  <g transform="translate(115, 125) rotate(28)">
    <ellipse cx="0" cy="0" rx="12" ry="28" fill="url(#purpleBlotch1)"/>
    <ellipse cx="0" cy="0" rx="7" ry="17" fill="#240718"/>
  </g>

  <!-- Spot on right blade (leaf tip dieback) -->
  <g transform="translate(285, 135) rotate(-35)">
    <ellipse cx="0" cy="0" rx="11" ry="24" fill="url(#purpleBlotch2)"/>
  </g>

  <!-- Diagnostic Badge overlay -->
  <rect x="15" y="15" width="165" height="28" rx="6" fill="#F57C00" opacity="0.9"/>
  <text x="25" y="34" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="sans-serif">🧅 कांदा (जांभळा करपा / Blotch)</text>
</svg>
`)}`;

export const samplePresets: SamplePreset[] = [
  {
    id: 'grape-downy-mildew',
    icon: '🍇',
    name: {
      mr: 'द्राक्ष: केवडा रोग (Downy Mildew)',
      hi: 'अंगूर: डाउनी मिल्ड्यू / केवड़ा',
      en: 'Grapes: Downy Mildew (केवडा)'
    },
    cropName: {
      mr: 'द्राक्ष (Thompson Seedless Grapes)',
      hi: 'अंगूर (Thompson Seedless)',
      en: 'Thompson Seedless Grapes'
    },
    diseaseEnglish: 'Downy Mildew (Plasmopara viticola)',
    diseaseVernacular: {
      mr: 'केवडा / भुरी सदृश बुरशी',
      hi: 'केवड़ा / मृदुरोमिल आसिता',
      en: 'Downy Mildew (केवडा)'
    },
    severity: 8,
    urgency: 'Severe',
    imageUri: grapeDownyMildewSvg,
    notes: {
      mr: 'गेल्या ३ दिवसांत सतत ढगाळ हवामान, ९०% आर्द्रता आणि पानांवर पिवळसर तेलकट डाग दिसू लागले आहेत.',
      hi: 'पिछले ३ दिनों से लगातार बादल, ९०% नमी और पत्तियों पर पीले तेलीय धब्बे दिखाई दे रहे हैं।',
      en: 'Cloudy weather for past 3 days, 90% humidity, yellowish translucent oil-spots spreading rapidly on leaf canopy.'
    },
    defaultData: {
      mr: {
        crop_identified: 'द्राक्ष (Thompson Seedless Grapes)',
        disease_name_english: 'Downy Mildew (Plasmopara viticola)',
        disease_name_vernacular: 'केवडा रोग (Downy Mildew)',
        pathogen_type: 'Fungal (ओमायसीट्स बुरशी)',
        severity_score: 8,
        urgency_level: 'Severe',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹३५,००० - ₹५०,००० प्रति एकर',
        organic_remedy: [
          'दशपर्णी अर्क २०० लिटर पाण्यात ५ लिटर मिसळून तात्काळ सकाळी फवारणी करा.',
          'ट्रायकोडर्मा व्हिरिडी (Trichoderma viride) ५ ग्रॅम प्रति लिटर पाण्यात मिसळून पानांच्या खालच्या बाजूवर चांगला ओलावा बसेल असा फवारा.',
          'सेंद्रिय बोर्डो मिश्रण (Bordeaux Mixture ०.५%) ताज्या चुन्यासह तयार करून फवारा. यामुळे बीजाणूंचा प्रसार तात्काळ रोखला जातो.',
          'झाडाखालील जमिनीवर पडलेली बाधित पाने गोळा करून शेताबाहेर नष्ट करा, जेणेकरून ओस्पोअर्स जमिनीत राहणार नाहीत.'
        ],
        chemical_remedy: [
          'मॅटॅलॅक्सिल ८% + मॅन्कोझेब ६४% WP (Metalaxyl + Mancozeb) २.५ ग्रॅम प्रति लिटर पाण्यात मिसळून फवारा.',
          'पर्यायी फवारणी: सायमोक्सॅनील ८% + मॅन्कोझेब ६४% WP २ ग्रॅम प्रति लिटर पाणी.',
          'कापणी प्रतीक्षा काळ (PHI): किमान १४ दिवस. फवारणीनंतर १४ दिवस द्राक्ष काढणी करू नये.'
        ],
        vernacular_voice_script: 'नमस्कार शेतकरी बंधू! तुमच्या द्राक्षाच्या बागेत केवडा रोगाचा गंभीर प्रादुर्भाव झालेला आहे. सध्याच्या दमट हवेमुळे हा रोग वेगाने घडांवर पसरू शकतो. तात्काळ सकाळी ट्रायकोडर्मा किंवा दशपर्णी अर्काची फवारणी करा. प्रादुर्भाव जास्त असल्यास मॅटॅलॅक्सिल २.५ ग्रॅम प्रति लिटरने फवारा आणि सुरक्षा सूचनांचे पालन करा.',
        weather_advice: 'पुढील २४ तासांत पावसाची शक्यता नसल्यास तात्काळ पहाटेच्या वेळी फवारणी करा. दुपारचे कडक ऊन टाळा.',
        detected_symptoms: ['पानांच्या वरच्या भागावर पिवळसर तेलकट डाग', 'पानाच्या खालील भागावर पांढरट कापूस सदृश बुरशीची वाढ', 'शिरांमध्ये मर्यादित कोनीय ठिपके'],
        scientific_name: 'Plasmopara viticola',
        safe_phi_days: 14
      },
      hi: {
        crop_identified: 'अंगूर (Thompson Seedless)',
        disease_name_english: 'Downy Mildew (Plasmopara viticola)',
        disease_name_vernacular: 'केवड़ा / डाउनी मिल्ड्यू',
        pathogen_type: 'Fungal (फफूंद जनित)',
        severity_score: 8,
        urgency_level: 'Severe',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹३५,००० - ₹५०,००० प्रति एकड़',
        organic_remedy: [
          'दशपर्णी अर्क ५ मिली प्रति लीटर पानी में मिलाकर सुबह के समय छिड़काव करें।',
          'ट्राइकोडर्मा विरिडी (Trichoderma viride) ५ ग्राम प्रति लीटर की दर से पत्तियों की निचली सतह पर अच्छी तरह स्प्रे करें।',
          'बोर्डो मिश्रण (Bordeaux Mixture ०.५%) का ताजा घोल बनाकर पत्तियों पर छिड़कें।',
          'संक्रमित गिरी हुई पत्तियों को इकट्ठा कर खेत से बाहर नष्ट करें ताकि बीजाणु न फैलें।'
        ],
        chemical_remedy: [
          'मेटालैक्सिल ८% + मैंकोज़ेब ६४% WP (२.५ ग्राम प्रति लीटर पानी) का छिड़काव करें।',
          'वैकल्पिक दवा: साइमोक्सानिल ८% + मैंकोज़ेब ६४% WP (२ ग्राम प्रति लीटर)।',
          'तुड़ाई प्रतीक्षा अवधि (PHI): न्यूनतम १४ दिन। छिड़काव के १४ दिन बाद ही फल तोड़ें।'
        ],
        vernacular_voice_script: 'किसान भाई नमस्कार! आपकी अंगूर की फसल में डाउनी मिल्ड्यू (केवड़ा) का गंभीर प्रकोप है। मौजूदा नमी से यह गुच्छों को खराब कर सकता है। तुरंत जैविक उपाय में ट्राइकोडर्मा या दशपर्णी अर्क का छिड़काव करें। अधिक फैलाव होने पर मेटालैक्सिल का निर्देशित मात्रा में छिड़काव करें।',
        weather_advice: 'आगामी २४ घंटों में वर्षा न होने पर सुबह के समय हवा की दिशा में छिड़काव करें।',
        detected_symptoms: ['पत्तियों पर पीले तैलीय धब्बे', 'पत्ती के नीचे सफेद रोमिल फफूंद', 'कोणीय फैलाव'],
        scientific_name: 'Plasmopara viticola',
        safe_phi_days: 14
      },
      en: {
        crop_identified: 'Thompson Seedless Grapes',
        disease_name_english: 'Downy Mildew (Plasmopara viticola)',
        disease_name_vernacular: 'Downy Mildew (केवडा)',
        pathogen_type: 'Fungal (Oomycete)',
        severity_score: 8,
        urgency_level: 'Severe',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹35,000 - ₹50,000 per acre',
        organic_remedy: [
          'Apply Dashparni Ark @ 5 ml/liter or freshly fermented bio-neem extract at morning dawn.',
          'Foliar spray of Trichoderma viride @ 5g/liter ensuring thorough coverage under the leaf canopy.',
          'Spray freshly prepared 0.5% neutral Bordeaux mixture to arrest secondary sporangia germination.',
          'Collect and destroy infected dropped foliage away from vineyard to break oospore overwintering.'
        ],
        chemical_remedy: [
          'Metalaxyl 8% + Mancozeb 64% WP @ 2.5g per liter of clean water as systemic curative.',
          'Alternate with Cymoxanil 8% + Mancozeb 64% WP @ 2g/L if resistance is suspected.',
          'Pre-Harvest Interval (PHI): 14 days strict safety withholding period before cluster harvest.'
        ],
        vernacular_voice_script: 'Farmer friend, your grape vineyard shows severe Downy Mildew infection. High ambient humidity is accelerating contagion toward bunch clusters. Immediately apply Trichoderma or Dashparni ark at dawn. For critical containment, apply Metalaxyl at 2.5g/L and maintain a 14-day pre-harvest wait time.',
        weather_advice: 'Ideal to spray in the early morning if zero rain is forecasted for the next 24 hours.',
        detected_symptoms: ['Yellow translucent oil-spot lesions on upper leaf surface', 'White cottony downy sporulation on abaxial underside', 'Vein-delimited angular necrosis'],
        scientific_name: 'Plasmopara viticola',
        safe_phi_days: 14
      }
    }
  },
  {
    id: 'tomato-late-blight',
    icon: '🍅',
    name: {
      mr: 'टोमॅटो: करपा रोग (Late Blight)',
      hi: 'टमाटर: पछेती झुलसा (Late Blight)',
      en: 'Tomato: Late Blight (करपा)'
    },
    cropName: {
      mr: 'टोमॅटो (Solanum lycopersicum)',
      hi: 'टमाटर (Solanum lycopersicum)',
      en: 'Hybrid Tomato'
    },
    diseaseEnglish: 'Late Blight (Phytophthora infestans)',
    diseaseVernacular: {
      mr: 'करपा / पानांचे कुजणे',
      hi: 'पछेती झुलसा / काला करपा',
      en: 'Late Blight (करपा)'
    },
    severity: 9,
    urgency: 'Critical',
    imageUri: tomatoLateBlightSvg,
    notes: {
      mr: 'पानांच्या टोकांवर काळे पाणीदार डाग पडून पाने जळाल्यासारखी वाळत आहेत. थंडी आणि दाट धुके आहे.',
      hi: 'पत्तियों के किनारों पर काले पानी जैसे धब्बे हैं और पत्तियां झुलस रही हैं। ठंडा और कोहरे का मौसम है।',
      en: 'Dark water-soaked necrotic lesions on leaf margins rapidly rotting in cool, foggy weather.'
    },
    defaultData: {
      mr: {
        crop_identified: 'टोमॅटो (Hybrid Tomato)',
        disease_name_english: 'Late Blight (Phytophthora infestans)',
        disease_name_vernacular: 'लेट ब्लाइट (करपा रोग)',
        pathogen_type: 'Fungal (पाणीजन्य बुरशी)',
        severity_score: 9,
        urgency_level: 'Critical',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹४०,००० - ₹६५,००० प्रति एकर',
        organic_remedy: [
          'ताक आणि तांबे (Sour buttermilk aged in copper vessel for 7 days) ५०० मिली प्रति १५ लिटर पंपात मिसळून फवारा.',
          'स्यूडोमोनास फ्ल्यूरोसेन्स (Pseudomonas fluorescens) १० ग्रॅम प्रति लिटर वेगाने संपूर्ण झाडावर फवारा.',
          'कडुलिंब तेल (Neem Oil 10,000 ppm) २ मिली प्रति लिटर नैसर्गिक चिकट द्रवासह फवारा.',
          'झाडांची खालची जमिनीला टेकणारी रोगट पाने तातडीने छाटून खड्ड्यात गाडा.'
        ],
        chemical_remedy: [
          'डायमेथोमॉर्फ ५०% WP (Dimethomorph) १ ग्रॅम + मॅन्कोझेब २ ग्रॅम प्रति लिटर पाण्यात फवारा.',
          'पर्यायी तातडीचे औषध: फेनॅमिडोन १०% + मॅन्कोझेब ५०% WG (Fenamidone) २.५ ते ३ ग्रॅम प्रति लिटर.',
          'कापणी प्रतीक्षा काळ (PHI): किमान ७ दिवस. फवारणीनंतर ७ दिवस फळे तोडू नका.'
        ],
        vernacular_voice_script: 'सावधान शेतकरी मित्रा! टोमॅटो पिकावर अतिशय घातक लेट ब्लाइट करपा आलेला आहे. हा रोग दोन दिवसात संपूर्ण प्लॉट नष्ट करू शकतो. त्वरित आंबट ताक आणि स्यूडोमोनासची फवारणी करा किंवा डायमेथोमॉर्फची शिफारस केलेल्या प्रमाणात फवारणी करून प्लॉट वाचवा.',
        weather_advice: 'धुके व थंड हवेत हा रोग झपाट्याने वाढतो. दुपारच्या उन्हात पाने सुकल्यावरच फवारणी करावी.',
        detected_symptoms: ['पानांच्या कडांवर काळपट पाणीदार डाग', 'पानांवर पांढरट बुरशीची हलकी कडा', 'देठ काळे पडून कुजणे'],
        scientific_name: 'Phytophthora infestans',
        safe_phi_days: 7
      },
      hi: {
        crop_identified: 'टमाटर (Hybrid Tomato)',
        disease_name_english: 'Late Blight (Phytophthora infestans)',
        disease_name_vernacular: 'पछेती झुलसा (Late Blight)',
        pathogen_type: 'Fungal (जलजनित कवक)',
        severity_score: 9,
        urgency_level: 'Critical',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹४०,००० - ₹६५,००० प्रति एकड़',
        organic_remedy: [
          'खट्टी छाछ (तांबे के बर्तन में रखी हुई) ५०० मिली प्रति १५ लीटर पानी में मिलाकर स्प्रे करें।',
          'स्यूडोमोनास फ्लोरोसेंस (Pseudomonas fluorescens) १० ग्राम प्रति लीटर का तुरंत पर्णीय छिड़काव करें।',
          'नीम का तेल (Neem oil 10,000 ppm) २ मिली प्रति लीटर छिड़कें।',
          'निचली संक्रमित पत्तियों को तोड़कर खेत से दूर जमीन में गाड़ दें।'
        ],
        chemical_remedy: [
          'डाइमेथोमॉर्फ ५०% WP (Dimethomorph) १ ग्राम + मैंकोज़ेब २ ग्राम प्रति लीटर पानी का छिड़काव करें।',
          'वैकल्पिक दवा: फेनामिडोन १०% + मैंकोज़ेब ५०% WG (२.५ ग्राम प्रति लीटर)।',
          'तुड़ाई प्रतीक्षा अवधि (PHI): न्यूनतम ७ दिन तक फल की तुड़ाई न करें।'
        ],
        vernacular_voice_script: 'किसान भाई ध्यान दें! आपकी टमाटर की फसल में पछेती झुलसा (लेट ब्लाइट) का गंभीर खतरा है। यह रोग २४ से ४८ घंटे में पूरी फसल चौपट कर सकता है। तुरंत स्यूडोमोनास या डाइमेथोमॉर्फ का छिड़काव करें और खेत में पानी का जमाव न होने दें।',
        weather_advice: 'घने कोहरे और नम मौसम में रोग बढ़ता है। दोपहर में जब पत्तियां सूख जाएं तब स्प्रे करें।',
        detected_symptoms: ['पत्तियों पर काले पानीदार धब्बे', 'पत्तियों का तेजी से झुलसना', 'तने पर भूरे चकत्ते'],
        scientific_name: 'Phytophthora infestans',
        safe_phi_days: 7
      },
      en: {
        crop_identified: 'Hybrid Field Tomato',
        disease_name_english: 'Late Blight (Phytophthora infestans)',
        disease_name_vernacular: 'Late Blight (करपा)',
        pathogen_type: 'Fungal (Oomycete)',
        severity_score: 9,
        urgency_level: 'Critical',
        contagion_risk: 'Rapid',
        estimated_loss_prevention_inr: '₹40,000 - ₹65,000 per acre',
        organic_remedy: [
          'Foliar spray of aged sour buttermilk (incubated in copper vessel) @ 35 ml/liter.',
          'Pseudomonas fluorescens bio-fungicide @ 10g/liter targeting both leaf sides.',
          'Cold-pressed Neem Oil 10,000 ppm @ 2ml/liter with eco-spreader.',
          'Sanitary pruning: strip bottom ground-touching diseased foliage and bury in pit.'
        ],
        chemical_remedy: [
          'Dimethomorph 50% WP @ 1g/L tank-mixed with Mancozeb 75% WP @ 2g/L.',
          'Emergency alternate: Fenamidone 10% + Mancozeb 50% WG @ 2.5-3g/L.',
          'Pre-Harvest Interval (PHI): Strict 7 days waiting period before tomato harvesting.'
        ],
        vernacular_voice_script: 'Urgent farmer advisory! Your tomato crop is under critical Late Blight attack. This pathogen can collapse the entire canopy within 48 hours under cool foggy conditions. Immediately spray Pseudomonas or Dimethomorph with Mancozeb and isolate infected foliage.',
        weather_advice: 'High contagion in cool fog. Ensure leaf surface dries before applying chemical canopy spray.',
        detected_symptoms: ['Large irregular water-soaked lesions expanding rapidly from leaf margins', 'Pale green chlorotic border ring', 'Petiole necrosis'],
        scientific_name: 'Phytophthora infestans',
        safe_phi_days: 7
      }
    }
  },
  {
    id: 'onion-purple-blotch',
    icon: '🧅',
    name: {
      mr: 'कांदा: जांभळा करपा (Purple Blotch)',
      hi: 'प्याज: बैंगनी धब्बा (Purple Blotch)',
      en: 'Onion: Purple Blotch (जांभळा करपा)'
    },
    cropName: {
      mr: 'कांदा (Nashik Red Onion)',
      hi: 'प्याज (Nashik / Lasalgaon Red)',
      en: 'Nashik Red Onion'
    },
    diseaseEnglish: 'Purple Blotch (Alternaria porri)',
    diseaseVernacular: {
      mr: 'जांभळा करपा / लाल करपा',
      hi: 'बैंगनी धब्बा रोग (Purple Blotch)',
      en: 'Purple Blotch (जांभळा करपा)'
    },
    severity: 6,
    urgency: 'Moderate',
    imageUri: onionPurpleBlotchSvg,
    notes: {
      mr: 'कांद्याच्या पाथीवर जांभळट तपकिरी लांबट डाग पडले आहेत आणि पाथी वाळून मधेच वाकत आहेत.',
      hi: 'प्याज की पत्तियों पर बैंगनी-भूरे लंबे धब्बे हैं और पत्तियां बीच से मुड़कर सूख रही हैं।',
      en: 'Sunken elliptical purple lesions with yellow margins on onion tubular foliage causing tip-dieback.'
    },
    defaultData: {
      mr: {
        crop_identified: 'कांदा (Nashik Red Onion)',
        disease_name_english: 'Purple Blotch (Alternaria porri)',
        disease_name_vernacular: 'जांभळा करपा (Purple Blotch)',
        pathogen_type: 'Fungal (अल्टरनेरिया बुरशी)',
        severity_score: 6,
        urgency_level: 'Moderate',
        contagion_risk: 'Moderate',
        estimated_loss_prevention_inr: '₹१८,००० - ₹२८,००० प्रति एकर',
        organic_remedy: [
          'लसूण-मिरची अर्क आणि गोमूत्र (Garlic-Chilli extract + Gomutra) ५०० मिली प्रति पंप फवारा.',
          'कडुलिंब तेल (Neem Oil 1500 ppm) ३ मिली प्रति लिटर पाण्यात १ मिली स्टिकर (Spreader) टाकून फवारा, कारण कांद्याची पात गुळगुळीत असते.',
          'ट्रायकोडर्मा व्हिरिडी किंवा हरझियानम ५ ग्रॅम प्रति लिटरची नियमित फवारणी ठेवा.',
          'शेतात प्रमाणापेक्षा जास्त पाणी साचू देऊ नका, वाफसा स्थितीतच हलके पाणी द्या.'
        ],
        chemical_remedy: [
          'डिफेनोकोनॅझोल २५% EC (Difenoconazole) १ मिली प्रति लिटर पाण्यात स्टिकर मिसळून फवारा.',
          'पर्यायी औषध: टेब्युकोनॅझोल + ट्रायफ्लॉक्सिस्ट्रॉबिन (Nativo) ०.७ ग्रॅम प्रति लिटर पाणी.',
          'कापणी प्रतीक्षा काळ (PHI): १५ दिवस. काढणीपूर्वी १५ दिवस फवारणी थांबवा.'
        ],
        vernacular_voice_script: 'शेतकरी बंधू! तुमच्या कांद्याच्या पिकावर जांभळा करपा रोगाची सुरुवात झालेली आहे. कांद्याची पात मधेच लोंबकळू नये म्हणून लगेच स्टिकर वापरून कडुलिंब तेल किंवा डिफेनोकोनॅझोलची फवारणी करा. यामुळे कांद्याची फुगवण चांगली होईल.',
        weather_advice: 'कांद्याच्या पाथीवर पाणी साचले असल्यास फवारणी टाळा. संध्याकाळी हलक्या उन्हात फवारणी करावी.',
        detected_symptoms: ['पाथीवर अंडाकृती जांभळे खोलगट डाग', 'डागांभोवती पिवळसर कडा', 'पाथी टोकाकडून वाळणे'],
        scientific_name: 'Alternaria porri',
        safe_phi_days: 15
      },
      hi: {
        crop_identified: 'प्याज (Nashik / Lasalgaon Red)',
        disease_name_english: 'Purple Blotch (Alternaria porri)',
        disease_name_vernacular: 'बैंगनी धब्बा (Purple Blotch)',
        pathogen_type: 'Fungal (कवक जनित)',
        severity_score: 6,
        urgency_level: 'Moderate',
        contagion_risk: 'Moderate',
        estimated_loss_prevention_inr: '₹१८,००० - ₹२८,००० प्रति एकड़',
        organic_remedy: [
          'लहसुन-मिर्च अर्क एवं गोमूत्र ५०० मिली प्रति पंप का छिड़काव करें।',
          'नीम का तेल (1500 ppm) ३ मिली प्रति लीटर में स्टिकर (चिपकने वाला पदार्थ) मिलाकर छिड़कें।',
          'ट्राइकोडर्मा ५ ग्राम प्रति लीटर का नियमित छिड़काव करें।',
          'खेत में जलजमाव न होने दें, हल्की सिंचाई करें।'
        ],
        chemical_remedy: [
          'डिफेनोकोनाज़ोल २५% EC (Difenoconazole) १ मिली प्रति लीटर स्टिकर के साथ छिड़कें।',
          'वैकल्पिक दवा: टेबुकोनाज़ोल २५.९% EC (१.२५ मिली प्रति लीटर)।',
          'तुड़ाई प्रतीक्षा अवधि (PHI): १५ दिन।'
        ],
        vernacular_voice_script: 'किसान भाई! प्याज में बैंगनी धब्बा रोग के लक्षण दिखे हैं। पत्तियां चिकनी होने के कारण दवा में स्टिकर जरूर मिलाएं। नीम तेल या डिफेनोकोनाज़ोल का छिड़काव करके अपनी प्याज की फसल को सुरक्षित करें।',
        weather_advice: 'पत्तियों पर ओस सूखने के बाद ही स्प्रे करें। हवा तेज न हो।',
        detected_symptoms: ['पत्तियों पर बैंगनी अंडाकार गड्ढेदार धब्बे', 'पीला घेरा', 'पत्तियों का सूखना'],
        scientific_name: 'Alternaria porri',
        safe_phi_days: 15
      },
      en: {
        crop_identified: 'Nashik Red Onion (Allium cepa)',
        disease_name_english: 'Purple Blotch (Alternaria porri)',
        disease_name_vernacular: 'Purple Blotch (जांभळा करपा)',
        pathogen_type: 'Fungal (Alternaria)',
        severity_score: 6,
        urgency_level: 'Moderate',
        contagion_risk: 'Moderate',
        estimated_loss_prevention_inr: '₹18,000 - ₹28,000 per acre',
        organic_remedy: [
          'Garlic-Chilli bio-concoction (500 ml/15L pump) enriched with organic cow urine.',
          'Neem Oil 1500 ppm @ 3ml/L tank mixed with an agricultural non-ionic wetting agent (sticker) for waxy onion foliage.',
          'Trichoderma harzianum @ 5g/liter bio-protective canopy application.',
          'Avoid excessive nitrogen fertilizer and overhead sprinkler irrigation.'
        ],
        chemical_remedy: [
          'Difenoconazole 25% EC @ 1ml/liter + organic wetting sticker.',
          'Alternate: Tebuconazole 25.9% EC @ 1.25ml/liter or Nativo (Tebuconazole + Trifloxystrobin) @ 0.7g/L.',
          'Pre-Harvest Interval (PHI): 15 days mandatory withdrawal period before bulb harvest.'
        ],
        vernacular_voice_script: 'Farmer notice: Your onion crop has contracted Purple Blotch fungus. Due to the waxy coating on onion leaves, always add a wetting agent or sticker when spraying neem oil or Difenoconazole to prevent leaf collapse and protect bulb expansion.',
        weather_advice: 'Apply in the late afternoon when wind is calm and dew has dried off foliage.',
        detected_symptoms: ['Small sunken water-soaked elliptical spots developing purplish center', 'Chlorotic yellow halo border', 'Leaf tipping and girdling'],
        scientific_name: 'Alternaria porri',
        safe_phi_days: 15
      }
    }
  }
];
