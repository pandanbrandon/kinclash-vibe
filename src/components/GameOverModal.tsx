'use client';

import React from 'react';

interface GameOverModalProps {
  onRestart: () => void;
  onMainMenu: () => void;
}

const GameOverModal = ({ onRestart, onMainMenu }: GameOverModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 transform scale-100 animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Game Over!</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={onRestart}
            className="bg-blue-500 text-white text-xl font-semibold py-3 px-6 rounded-lg
                     shadow-md hover:bg-blue-600 transition-colors"
          >
            Start Over
          </button>
          <button
            onClick={onMainMenu}
            className="bg-gray-500 text-white text-xl font-semibold py-3 px-6 rounded-lg
                     shadow-md hover:bg-gray-600 transition-colors"
          >
            Return to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal; 