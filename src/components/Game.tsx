'use client';

import React from 'react';
import GameBoard from './GameBoard';
import AnswerInput from './AnswerInput';
import GameOverModal from './GameOverModal';
import BurgerMenu from './BurgerMenu';

interface GameProps {
  onReturnToMenu: () => void;
}

const Game = ({ onReturnToMenu }: GameProps) => {
  const [revealedAnswers, setRevealedAnswers] = React.useState<number[]>([]);
  const [strikes, setStrikes] = React.useState<number>(0);

  const handleAnswer = (answer: string) => {
    const normalizedAnswer = answer.toLowerCase().trim();
    const questionData = {
      answers: [
        { id: 1, text: "apple" },
        { id: 2, text: "orange" },
        { id: 3, text: "watermelon" },
        { id: 4, text: "strawberry" },
        { id: 5, text: "banana" },
        { id: 6, text: "grapes" }
      ]
    };

    const foundAnswer = questionData.answers.find(
      a => a.text === normalizedAnswer && !revealedAnswers.includes(a.id)
    );

    if (foundAnswer) {
      setRevealedAnswers(prev => [...prev, foundAnswer.id]);
    } else {
      setStrikes(prev => Math.min(prev + 1, 3));
    }
  };

  const handleRestart = () => {
    setRevealedAnswers([]);
    setStrikes(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <BurgerMenu onRestart={handleRestart} onMainMenu={onReturnToMenu} />
      <h1 className="text-4xl font-bold mb-8 text-gray-800">KinClash (Λeris)</h1>
      <GameBoard revealedAnswers={revealedAnswers} strikes={strikes} />
      <AnswerInput onSubmit={handleAnswer} />
      {strikes === 3 && (
        <GameOverModal
          onRestart={handleRestart}
          onMainMenu={onReturnToMenu}
        />
      )}
    </main>
  );
};

export default Game; 