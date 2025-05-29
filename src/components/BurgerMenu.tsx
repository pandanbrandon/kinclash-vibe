'use client';

import React, { useState, useRef, useEffect } from 'react';

interface BurgerMenuProps {
  onRestart: () => void;
  onMainMenu: () => void;
}

const BurgerMenu = ({ onRestart, onMainMenu }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Burger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <div className="w-full h-0.5 bg-gray-800 rounded-full"></div>
          <div className="w-full h-0.5 bg-gray-800 rounded-full"></div>
          <div className="w-full h-0.5 bg-gray-800 rounded-full"></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl py-2 w-48 z-50">
          <button
            onClick={() => {
              onRestart();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            Restart Game
          </button>
          <button
            onClick={() => {
              onMainMenu();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-red-600"
          >
            Quit to Main Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu; 