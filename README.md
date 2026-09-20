# 🌱 ShetkariMitra (शेतकरी मित्र) — AgriVision AI

> **Empowering Farmers with Vernacular Multimodal Diagnostics & Dual-Tier Crop Remedies**  
> Built with Google Gemini 3.8 / 1.5 Flash, React 19, Vite, Express, and Tailwind CSS.

[![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini%20Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![React 19](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌾 Project Overview

**ShetkariMitra (शेतकरी मित्र)** is an agronomy assistant engineered specifically for Indian smallholder farmers. By combining lightweight multimodal computer vision from **Google Gemini** with vernacular voice synthesis, ShetkariMitra identifies crop diseases from leaf photographs within seconds. Crucially, it provides a **Dual-Tier Remedy Architecture** that prioritizes organic, biological interventions before resorting to chemical emergency sprays.

---

## 🎯 Alignment with Core Theme Pillars

| Pillar | How ShetkariMitra Delivers Impact |
| :--- | :--- |
| 🧑‍🌾 **People** | **Eliminates literacy and language barriers** through a voice-first audio advisory player in **Marathi (मराठी)**, **Hindi (हिंदी)**, and **English**, designed for rural comprehension. |
| 🌍 **Planet** | **Enforces an Eco-First Remedy Hierarchy**: Recommends low-cost biological solutions (Dashparni ark, cold-pressed Neem oil, *Trichoderma*, sour buttermilk in copper vessels) before chemical runoff contaminates groundwater. |
| 🚀 **Progress** | **Enterprise-grade multimodal computer vision** brought directly to edge smallholders via Google's low-latency Gemini Flash models, functional even on rural 3G mobile connections. |

---

## ✨ Key Features

- 📸 **Multimodal Leaf Diagnostic Engine**:
  - Drag-and-drop leaf photo upload, file picker, and real-time live device camera capture.
  - Detects fungal sporulation, necrotic lesions, bacterial wilts, and micronutrient deficiencies.
- ⚡ **1-Click Instant Demo Presets**:
  - Instant pre-loaded botanical cases for quick evaluation:
    - 🍇 **Thompson Seedless Grapes** (*Downy Mildew / केवडा*)
    - 🍅 **Hybrid Tomato** (*Late Blight / काळा करपा*)
    - 🧅 **Nashik Red Onion** (*Purple Blotch / जांभळा करपा*)
- 🔊 **Vernacular Voice-First Audio Advisory**:
  - Native Web Speech synthesis reciting an empathetic, natural 3-sentence action plan in Marathi, Hindi, or English.
  - Interactive audio waveforms with Play, Pause, and Replay controls.
- 📊 **Severity Meter & Contagion Velocity**:
  - Visual 1–10 severity gauge with pathogen classification and contagion speed indicator (Low / Moderate / Rapid).
- 💰 **Economic Impact & Yield Loss Prevention Calculator**:
  - Real-time estimation of yield loss prevented per acre (e.g., `₹35,000 – ₹50,000/acre saved`).
- 🛡️ **Dual-Tier Remedy Architecture**:
  - **Tier 1 (Eco Emerald - Organic & Biological)**: Zero-chemical formulations, cultural practices, and biological antagonists.
  - **Tier 2 (Caution Crimson - Chemical Emergency)**: Active ingredients with exact dosage per liter/acre, personal protective gear precautions, and Pre-Harvest Interval (**PHI**) safety wait-time countdowns.
- 📲 **WhatsApp-Ready Farmer Advisory Slip**:
  - Instant **Share to WhatsApp** with formatted Devanagari text ready for farmer group dissemination.
  - **1-Click PNG Slip Download** rendered at high resolution via HTML5 Canvas.
  - 1-Click Clipboard Copy.
- 🗺️ **Scaling Roadmap**:
  - WhatsApp Twilio/Meta Cloud Bot for zero-app installation.
  - Hyperlocal Weather Runoff Protection (48-hr rain radar to prevent wasted sprays).
  - 5-km Community Outbreak Radar for cluster epidemic prevention.

---

## 🎨 Design System & Palette

Designed for high readability in harsh outdoor sunlight:

| Purpose | Name | Hex Code | Visual Impression |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Kisan Green | `#1B5E20` | Agriculture, health, trust |
| **Secondary Accent** | Harvest Amber | `#F57C00` | Alert, sunlight, yield |
| **Organic Badge** | Eco Emerald | `#2E7D32` | Safe biological solutions |
| **Chemical Alert** | Caution Crimson | `#C62828` | Toxicity warning, strict PHI |
| **Background** | Clean Earth | `#F9FBF7` | Low-strain outdoor canvas |
| **Surface** | Pure White | `#FFFFFF` | Card contrast |
| **Text Primary** | Dark Slate | `#1A2E1C` | High readability |

---

## 🏗️ Architecture & Technology Stack

```
shetkarimitra/
├── api/                      # Vercel Serverless Functions
│   ├── diagnose.ts           # Gemini Vision API handler with heuristic fallback
│   └── health.ts             # Health check endpoint
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Brand header with language switcher & roadmap modal
│   │   ├── PresetBar.tsx     # 1-Click evaluation presets
│   │   ├── LeafInputPanel.tsx# Camera live capture & file dropzone
│   │   ├── DiagnosticDashboard.tsx # Severity meter, audio player, dual remedies
│   │   ├── WhatsAppSlipModal.tsx   # Canvas PNG generator & WhatsApp exporter
│   │   └── RoadmapModal.tsx  # Future vision milestones
│   ├── data/
│   │   ├── presets.ts        # Botanical SVG illustrations & agronomic presets
│   │   └── translations.ts   # Marathi, Hindi, and English dictionaries
│   ├── utils/
│   │   └── speech.ts         # Vernacular Web Speech API synthesis engine
│   ├── types.ts              # TypeScript diagnostic interfaces
│   ├── App.tsx               # Primary application coordinator
│   └── main.tsx              # Entry point
├── server.ts                 # Full-stack Express server with Vite middleware
├── vercel.json               # Vercel deployment configuration
└── package.json
```

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Web Speech API, HTML5 Canvas.
- **Backend / API**: Express 4.x (Node/Cloud Run) + Vercel Serverless Functions (`/api/*`).
- **AI / Multimodal Vision**: `@google/genai` (Google Gen AI SDK) using `gemini-3.8-flash` / `gemini-1.5-flash`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** or **bun**
- **Google Gemini API Key**: Obtain from [Google AI Studio](https://aistudio.google.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shetkari-mitra.git
   cd shetkari-mitra
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API key inside `.env`:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

---

## 📦 Production Build & Deployment

### Build the Full-Stack Application
```bash
npm run build
```
This compiles the client-side SPA to `dist/` and bundles the Express server to `dist/server.cjs` via `esbuild`.

### Start in Production (Cloud Run / Node.js)
```bash
npm start
```

### Deploying to Vercel
The repository includes pre-configured `vercel.json`, `.npmrc`, and `/api` serverless handlers.
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. In Vercel Project Settings, add the Environment Variable:
   - `GEMINI_API_KEY`: `<Your_Google_AI_Studio_Key>`
4. Deploy! Vercel will automatically build the frontend and deploy `/api/diagnose` and `/api/health` as serverless functions.

---

## 📄 JSON Diagnostic Schema

The Gemini AI model is constrained to return a strict JSON payload:

```json
{
  "crop_identified": "Grapes (Thompson Seedless)",
  "disease_name_english": "Downy Mildew (Plasmopara viticola)",
  "disease_name_vernacular": "केवडा रोग (Downy Mildew)",
  "pathogen_type": "Fungal",
  "severity_score": 8,
  "urgency_level": "Severe",
  "contagion_risk": "Rapid",
  "estimated_loss_prevention_inr": "₹35,000 - ₹50,000 per acre",
  "organic_remedy": [
    "दशपर्णी अर्क २०० लिटर पाण्यात ५ लिटर मिसळून तात्काळ सकाळी फवारणी करा.",
    "ट्रायकोडर्मा व्हिरिडी (Trichoderma viride) ५ ग्रॅम प्रति लिटर पाण्यात मिसळून पानांवर फवारा."
  ],
  "chemical_remedy": [
    "मॅटॅलॅक्सिल ८% + मॅन्कोझेब ६४% WP २.५ ग्रॅम प्रति लिटर पाण्यात मिसळून फवारा."
  ],
  "safe_phi_days": 14,
  "vernacular_voice_script": "नमस्कार शेतकरी बंधू! तुमच्या द्राक्षाच्या बागेत केवडा रोगाचा प्रादुर्भाव दिसत आहे...",
  "weather_advice": "पुढील २४ तासांत पावसाची शक्यता नसल्यास तात्काळ पहाटेच्या वेळी फवारणी करा."
}
```

---

## 🤝 Contributing

Contributions to enhance vernacular accuracy, add regional crop diseases, or expand bio-organic remedies are warmly welcomed:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewCropRemedy`).
3. Commit your Changes (`git commit -m 'Add Pomegranate bacterial blight remedy'`).
4. Push to the Branch (`git push origin feature/NewCropRemedy`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

- **Google AI Studio & DeepMind** for Gemini multimodal vision models.
- **Indian Council of Agricultural Research (ICAR)** & State Agricultural Universities (Vasantrao Naik Marathwada Krishi Vidyapeeth, MPKV Rahuri) for regional agronomic validation references.
