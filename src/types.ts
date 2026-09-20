export type Language = 'mr' | 'hi' | 'en';

export interface CropDiagnosisResult {
  crop_identified: string;
  disease_name_english: string;
  disease_name_vernacular: string;
  pathogen_type: 'Fungal' | 'Bacterial' | 'Viral' | 'Pest' | 'Nutritional Deficiency' | string;
  severity_score: number; // 1 to 10
  urgency_level: 'Low' | 'Moderate' | 'Severe' | 'Critical';
  contagion_risk: 'Low' | 'Moderate' | 'Rapid';
  estimated_loss_prevention_inr: string; // e.g. "₹20,000 - ₹35,000 per acre"
  organic_remedy: string[];
  chemical_remedy: string[];
  vernacular_voice_script: string;
  weather_advice: string;
  detected_symptoms?: string[];
  scientific_name?: string;
  safe_phi_days?: number; // Pre-harvest interval
}

export interface SamplePreset {
  id: string;
  name: Record<Language, string>;
  cropName: Record<Language, string>;
  diseaseEnglish: string;
  diseaseVernacular: Record<Language, string>;
  severity: number;
  urgency: 'Low' | 'Moderate' | 'Severe' | 'Critical';
  imageUri: string;
  icon: string;
  notes: Record<Language, string>;
  defaultData: Record<Language, CropDiagnosisResult>;
}

export interface FarmerAdvisorySlipData {
  farmerName?: string;
  location?: string;
  date: string;
  result: CropDiagnosisResult;
  imageUri?: string;
  notes?: string;
}
