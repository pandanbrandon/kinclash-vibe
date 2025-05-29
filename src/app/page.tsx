'use client';

import { useState } from 'react';
import TitleScreen from '@/components/TitleScreen';
import Game from '@/components/Game';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  return gameStarted ? (
    <Game onReturnToMenu={() => setGameStarted(false)} />
  ) : (
    <TitleScreen onStartGame={() => setGameStarted(true)} />
  );
} 