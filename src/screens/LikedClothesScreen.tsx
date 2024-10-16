import React from 'react';

export const LikedClothesScreen: React.FC = () => {
  // This would typically fetch data from an API or local storage
  const likedClothes = [
    { id: 1, name: 'Elegant Abaya', image: 'https://images.unsplash.com/photo-1631132329534-0e7e1b94d494?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Colorful Hijab', image: 'https://images.unsplash.com/photo-1611509533315-d4e9a3d7a9a8?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Classic Thobe', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Liked Clothes</h1>
      <div className="grid grid-cols-2 gap-4">
        {likedClothes.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h2 className="font-semibold text-green-700">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};