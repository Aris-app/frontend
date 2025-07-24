import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 relative">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">Nidal Ayadi's Team</span>
          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Free</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      {/* Desktop right menu only */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-sm text-gray-600 hover:text-gray-900">Changelog</button>
        <button className="text-sm text-gray-600 hover:text-gray-900">Docs</button>
        <button className="text-sm text-gray-600 hover:text-gray-900">Help</button>
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">N</span>
        </div>
      </div>
    </header>
  );
};

export default Header;