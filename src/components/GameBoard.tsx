'use client';

import React from 'react';

interface GameBoardProps {
  revealedAnswers: number[];
  strikes: number;
}

const GameBoard = ({ revealedAnswers, strikes }: GameBoardProps) => {
  // Define the question and answers data
  const questionData = {
    question: "What fruit do people like to eat?",
    answers: [
      { id: 1, text: "apple" },
      { id: 2, text: "orange" },
      { id: 3, text: "watermelon" },
      { id: 4, text: "strawberry" },
      { id: 5, text: "banana" },
      { id: 6, text: "grapes" }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-center mb-4">
        <div className="text-4xl font-bold tracking-wider">
          <span className="text-gray-800">Strikes: </span>
          <span className="text-red-600">
            {Array.from({ length: strikes }, (_, i) => (
              <span key={i} className="mx-1">✗</span>
            ))}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {questionData.answers.map((answer) => (
          <div
            key={answer.id}
            className="bg-blue-500 text-white rounded-xl p-6 h-24 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-blue-600 transition-colors cursor-pointer"
          >
            {revealedAnswers.includes(answer.id) ? answer.text : answer.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard; 