export type GameScreen = 'menu' | 'sortir' | 'quiz' | 'tangkap' | 'result';

export interface FoodItem {
  id: number;
  name: string;
  emoji: string;
  safe: boolean;
  reason: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FallingFood {
  id: number;
  name: string;
  emoji: string;
  safe: boolean;
  x: number;
  y: number;
  speed: number;
}

export interface GameResult {
  game: string;
  score: number;
  maxScore: number;
  message: string;
}
