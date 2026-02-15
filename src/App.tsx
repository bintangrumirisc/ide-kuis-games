import { useState, useCallback } from 'react';
import { GameScreen, GameResult } from './types';
import { MainMenu } from './components/MainMenu';
import { SortirGame } from './components/SortirGame';
import { QuizGame } from './components/QuizGame';
import { CatchGame } from './components/CatchGame';
import { ResultScreen } from './components/ResultScreen';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('menu');
  const [lastGame, setLastGame] = useState<GameScreen>('menu');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleSelectGame = useCallback((screen: GameScreen) => {
    setCurrentScreen(screen);
    setLastGame(screen);
  }, []);

  const handleFinish = useCallback((result: GameResult) => {
    setGameResult(result);
    setCurrentScreen('result');
  }, []);

  const handleBack = useCallback(() => {
    setCurrentScreen('menu');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setCurrentScreen(lastGame);
  }, [lastGame]);

  switch (currentScreen) {
    case 'menu':
      return <MainMenu onSelectGame={handleSelectGame} />;
    case 'sortir':
      return <SortirGame onFinish={handleFinish} onBack={handleBack} />;
    case 'quiz':
      return <QuizGame onFinish={handleFinish} onBack={handleBack} />;
    case 'tangkap':
      return <CatchGame onFinish={handleFinish} onBack={handleBack} />;
    case 'result':
      return gameResult ? (
        <ResultScreen
          result={gameResult}
          onPlayAgain={handlePlayAgain}
          onMenu={handleBack}
        />
      ) : (
        <MainMenu onSelectGame={handleSelectGame} />
      );
    default:
      return <MainMenu onSelectGame={handleSelectGame} />;
  }
}
