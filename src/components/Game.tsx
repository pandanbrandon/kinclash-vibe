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
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Bar */}
      <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">KinClash (Λeris)</h1>
        <BurgerMenu onRestart={handleRestart} onMainMenu={onReturnToMenu} />
      </header>
      
      {/* Question Prompt */}
      <div className="w-full bg-blue-50 border-b border-blue-100 px-4 py-3 text-center">
        <h2 className="text-xl text-blue-800 font-medium">What fruit do people like to eat?</h2>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <GameBoard revealedAnswers={revealedAnswers} strikes={strikes} />
        <AnswerInput onSubmit={handleAnswer} />
        {strikes === 3 && (
          <GameOverModal
            onRestart={handleRestart}
            onMainMenu={onReturnToMenu}
          />
        )}
      </main>
    </div>
  );
};

export default Game; 