import React from 'react';
import { AppMode } from '../App';

interface ModeSelectionScreenProps {
  setAppMode: (mode: AppMode) => void;
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({ setAppMode }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-green-800">Select Mode</h1>
      <div className="space-y-4 w-full max-w-xs">
        <button onClick={() => setAppMode('female')} className="w-full bg-pink-500 text-white py-3 rounded-lg shadow-md">Female</button>
        <button onClick={() => setAppMode('male')} className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md">Male</button>
        <button onClick={() => setAppMode('children')} className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md">Children</button>
      </div>
    </div>
  );
};