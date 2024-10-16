import React from 'react';
import { Home, HelpCircle, Heart, Users, User, History } from 'lucide-react';

interface NavigationProps {
  setCurrentScreen: (screen: string) => void;
  currentScreen: string;
}

export const Navigation: React.FC<NavigationProps> = ({ setCurrentScreen, currentScreen }) => {
  const NavItem = ({ screen, icon: Icon }) => (
    <li 
      onClick={() => setCurrentScreen(screen)}
      className={`cursor-pointer ${currentScreen === screen ? 'nav-icon active' : 'nav-icon'}`}
    >
      <Icon size={24} />
    </li>
  );

  return (
    <nav className="bg-green-600 text-white p-4 rounded-t-2xl shadow-lg">
      <ul className="flex justify-around">
        <NavItem screen="main" icon={Home} />
        <NavItem screen="faq" icon={HelpCircle} />
        <NavItem screen="liked" icon={Heart} />
        <NavItem screen="mode" icon={Users} />
        <NavItem screen="profile" icon={User} />
        <NavItem screen="history" icon={History} />
      </ul>
    </nav>
  );
};