import React, { useState } from 'react';

interface ClothingItem {
  id: number;
  name: string;
  image: string;
  liked: boolean;
}

export const ClothesHistoryScreen: React.FC = () => {
  const [clothesHistory] = useState<ClothingItem[]>([
    { id: 1, name: 'Elegant Abaya', image: 'https://images.unsplash.com/photo-1631132329534-0e7e1b94d494?auto=format&fit=crop&w=800&q=80', liked: true },
    { id: 2, name: 'Colorful Hijab', image: 'https://images.unsplash.com/photo-1611509533315-d4e9a3d7a9a8?auto=format&fit=crop&w=800&q=80', liked: true },
    { id: 3, name: 'Classic Thobe', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', liked: false },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Clothes History</h1>
      <div className="space-y-4">
        {clothesHistory.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-2">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className={item.liked ? 'text-green-600' : 'text-red-600'}>
                {item.liked ? 'Liked' : 'Disliked'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};