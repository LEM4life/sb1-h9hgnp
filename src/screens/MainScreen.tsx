import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { AppMode } from '../App';

interface Clothing {
  id: number;
  image: string;
  name: string;
}

interface MainScreenProps {
  appMode: AppMode;
}

export const MainScreen: React.FC<MainScreenProps> = ({ appMode }) => {
  const [currentClothing, setCurrentClothing] = useState<Clothing | null>(null);
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);

  useEffect(() => {
    fetchNextClothing();
  }, [appMode]);

  const fetchNextClothing = () => {
    // In a real app, this would be an API call
    const clothingItems: Record<AppMode, Clothing[]> = {
      female: [
        { id: 1, image: 'https://images.unsplash.com/photo-1631132329534-0e7e1b94d494?auto=format&fit=crop&w=800&q=80', name: 'Elegant Abaya' },
        { id: 2, image: 'https://images.unsplash.com/photo-1611509533315-d4e9a3d7a9a8?auto=format&fit=crop&w=800&q=80', name: 'Colorful Hijab' },
        { id: 3, image: 'https://images.unsplash.com/photo-1594575126233-c9b4e47c7b6d?auto=format&fit=crop&w=800&q=80', name: 'Modern Jilbab' },
      ],
      male: [
        { id: 4, image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', name: 'Classic Thobe' },
        { id: 5, image: 'https://images.unsplash.com/photo-1603284569248-821525309698?auto=format&fit=crop&w=800&q=80', name: 'Embroidered Kurta' },
        { id: 6, image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80', name: 'Traditional Kaftan' },
      ],
      children: [
        { id: 7, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', name: 'Kids Jubba' },
        { id: 8, image: 'https://images.unsplash.com/photo-1603644448048-73b64c43d787?auto=format&fit=crop&w=800&q=80', name: 'Girls Abaya' },
        { id: 9, image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80', name: 'Boys Kurta Set' },
      ],
    };

    const randomIndex = Math.floor(Math.random() * clothingItems[appMode].length);
    setCurrentClothing(clothingItems[appMode][randomIndex]);
    setFeedback(null);
  };

  const handleSwipe = (liked: boolean) => {
    setFeedback(liked ? 'like' : 'dislike');
    // In a real app, send this data to the backend for the learning algorithm
    setTimeout(fetchNextClothing, 500);
  };

  if (!currentClothing) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 fade-in">
      <div className="app-logo mb-6"></div>
      <h1 className="text-3xl font-bold mb-8 text-green-800">Hayah App</h1>
      <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-xl swipe-card">
        <img src={currentClothing.image} alt={currentClothing.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
          <h2 className="text-xl font-semibold">{currentClothing.name}</h2>
        </div>
        {feedback && (
          <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${feedback === 'like' ? 'bg-green-500' : 'bg-red-500'} bg-opacity-70`}>
            {feedback === 'like' ? <Check size={80} color="white" /> : <X size={80} color="white" />}
          </div>
        )}
      </div>
      <div className="flex mt-8 space-x-4">
        <button 
          onClick={() => handleSwipe(false)} 
          className="bg-red-500 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <X size={32} />
        </button>
        <button 
          onClick={() => handleSwipe(true)} 
          className="bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <Check size={32} />
        </button>
      </div>
    </div>
  );
};