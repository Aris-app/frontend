import React from 'react';
import { 
  Files, 
  Type, 
  Globe, 
  HelpCircle, 
  BookOpen 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    const menuItems: MenuItem[] = [
        { id: 'files', label: 'Files', icon: Files },
        { id: 'text', label: 'Text', icon: Type },
        { id: 'website', label: 'Website', icon: Globe },
        { id: 'qa', label: 'Q&A', icon: HelpCircle },
        { id: 'notion', label: 'Notion', icon: BookOpen },
    ];

    return (
        <aside className="w-full md:w-64 bg-gray-50 border-r border-gray-200 h-auto md:h-full p-4 flex flex-col justify-between">
            <nav>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors text-base md:text-sm ${activeTab === item.id
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
            {/* Mobile-only: extra menu at bottom */}
            <div className="block md:hidden mt-8 border-t border-gray-200 pt-4">
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-base">Changelog</button>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-base">Docs</button>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-base">Help</button>
                <div className="flex items-center space-x-2 mt-4 px-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">N</span>
                    </div>
                    <span className="text-gray-900 font-medium">Profile</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;