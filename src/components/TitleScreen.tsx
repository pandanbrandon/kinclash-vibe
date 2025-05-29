'use client';

import React from 'react';

interface TitleScreenProps {
  onStartGame: () => void;
}

const TitleScreen = ({ onStartGame }: TitleScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-6xl font-bold mt-24 text-gray-800 tracking-wider">
        KinClash (Λeris)
      </h1>
      <div className="flex-grow flex items-center">
        <button
          onClick={onStartGame}
          className="bg-blue-500 text-white text-2xl font-semibold py-4 px-12 rounded-xl 
                   shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

export default TitleScreen; 