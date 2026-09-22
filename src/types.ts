export interface StockAsset {
  symbol: string;
  name: string;
  market: 'US' | 'NG';
  price: number;
  change24h: number;
  category: 'Tech' | 'Index' | 'Banking' | 'Energy';
  logo: string;
}

export interface VideoScene {
  sceneNumber: number;
  title: string;
  durationSeconds: number;
  visualCue: string;
  narrationScript: string;
  onScreenText: string;
}

export interface FundingStep {
  step: number;
  title: string;
  subtitle: string;
  details: string;
  tokenSupport: string[];
}
