'use client';

import React, { useState, FormEvent } from 'react';

interface AnswerInputProps {
  onSubmit: (answer: string) => void;
}

const AnswerInput = ({ onSubmit }: AnswerInputProps) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mt-8">
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer..."
        className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
      />
    </form>
  );
};

export default AnswerInput; 