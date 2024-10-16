import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { MainScreen } from './screens/MainScreen';
import { FaqScreen } from './screens/FaqScreen';
import { LikedClothesScreen } from './screens/LikedClothesScreen';
import { ModeSelectionScreen } from './screens/ModeSelectionScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ClothesHistoryScreen } from './screens/ClothesHistoryScreen';

export type AppMode = 'female' | 'male' | 'children';

function App() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [appMode, setAppMode] = useState<AppMode>('female');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'main':
        return <MainScreen appMode={appMode} />;
      case 'faq':
        return <FaqScreen />;
      case 'liked':
        return <LikedClothesScreen />;
      case 'mode':
        return <ModeSelectionScreen setAppMode={setAppMode} />;
      case 'profile':
        return <ProfileScreen />;
      case 'history':
        return <ClothesHistoryScreen />;
      default:
        return <MainScreen appMode={appMode} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-green-50">
      <div className="flex-1 overflow-y-auto">
        {renderScreen()}
      </div>
      <Navigation setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />
    </div>
  );
}

export default App;