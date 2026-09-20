import { Language } from '../types';

export class VoiceAdvisoryPlayer {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;

  public static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static speak(
    text: string,
    language: Language,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: any) => void
  ): boolean {
    if (!this.synth) {
      if (onError) onError('Speech synthesis not supported on this browser');
      return false;
    }

    // Cancel any ongoing speech
    this.stop();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Select matching voice locale
      const voices = this.synth.getVoices();
      let targetLang = 'mr-IN';
      if (language === 'hi') targetLang = 'hi-IN';
      if (language === 'en') targetLang = 'en-IN';

      const matchingVoice = voices.find(
        (v) => v.lang === targetLang || v.lang.startsWith(targetLang.substring(0, 2))
      );

      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }
      utterance.lang = targetLang;
      utterance.rate = 0.92; // slightly calmer speed for clear rural comprehension
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        this.currentUtterance = null;
        console.warn('SpeechSynthesis error:', e);
        if (onEnd) onEnd();
      };

      this.synth.speak(utterance);
      return true;
    } catch (err) {
      console.error('Failed to trigger speech synthesis:', err);
      if (onError) onError(err);
      return false;
    }
  }

  public static stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public static isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }
}
