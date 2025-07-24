import React, { useState } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import SourcesPanel from '../component/SourcesPanel';
import WebsiteTab from '../component/WebsiteTab';
import TextEditor from '../component/TextEditor';

type TabType = 'files' | 'text' | 'website' | 'qa' | 'notion';

const AgentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('website');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderMainContent = () => {
    switch (activeTab) {
      case 'website':
        return <WebsiteTab />;
      case 'text':
        return <TextEditor />;
      default:
        return (
          <div className="flex-1 p-6 flex items-center justify-center overflow-y-auto h-full">
            <div className="text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600">This section is coming soon.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="relative z-20">
        <Header />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden flex items-center px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar: hidden on mobile, visible on md+ */}
        <div className="hidden md:block h-full">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab as (tab: string) => void} />
        </div>

        {/* Sidebar Drawer for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 flex md:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
            <div className="relative w-64 max-w-full h-full bg-gray-50 border-r border-gray-200 shadow-xl animate-slide-in-left">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Close sidebar"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab as TabType); setSidebarOpen(false); }} />
            </div>
          </div>
        )}

        {/* Main content and sources panel: responsive layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 overflow-y-auto order-2 md:order-1">
            {renderMainContent()}
          </div>
          <div className="order-1 md:order-2 md:w-80 w-full border-t md:border-t-0 md:border-l border-gray-200 bg-white overflow-y-auto max-h-80 md:max-h-none scrollbar-hide">
            <SourcesPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;
