import React, { useState } from 'react';
import { ChevronDown, User, Globe, Pin, EyeOff, Plus, HelpCircle, Facebook, Menu, X } from 'lucide-react';

const tabs = [
  { id: 'accounts', label: 'Accounts' },
  { id: 'templates', label: 'My Templates' },
  { id: 'api', label: 'API Settings' },
  { id: 'reports', label: 'Message Reports' },
];

const accounts = [
  {
    name: 'Acme Corp',
    icon: <Globe className="w-5 h-5 text-blue-500" />, // Example icon
    subscription: 'FREE',
    role: { label: 'Admin', icon: <Facebook className="w-4 h-4 text-blue-600 inline ml-1" /> },
    liveChats: 3,
    contacts: 1200,
    pinned: false,
    hidden: false,
  },
  {
    name: 'Beta LLC',
    icon: <Globe className="w-5 h-5 text-green-500" />, // Example icon
    subscription: 'FREE',
    role: { label: 'Member', icon: <Facebook className="w-4 h-4 text-blue-600 inline ml-1" /> },
    liveChats: 1,
    contacts: 300,
    pinned: true,
    hidden: false,
  },
  // ...more rows
];

const ManyChatDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accounts');
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredAccounts = accounts.filter(acc =>
    acc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
        {/* Left: Logo/Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-semibold text-gray-900 text-lg">Aris</span>
        </div>
        {/* Center: Tabs */}
        <nav className="hidden md:flex space-x-2">
          
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === tab.id ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {/* Right: Language + User + Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-2 py-1 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200">
            EN <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="hidden md:inline text-gray-900 font-medium text-sm">Nidal Ayadi</span>
          </div>
          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
      </header>

      

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
          <div className="relative w-80 max-w-full h-full bg-white shadow-xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-colors text-base ${activeTab === tab.id ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                >
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search + Add Button */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between px-4 py-4 bg-white border-b border-gray-100 gap-2">
        <input
          type="text"
          placeholder="Search accounts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-72 px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
        />
        <button className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg font-medium text-sm shadow-sm hover:bg-gray-800 transition-colors w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add New Account
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-2 md:px-6 py-4">
        {activeTab === 'accounts' ? (
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Subscription</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Role</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Assigned Live Chats</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Contacts</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Pin</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Hide</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-400">No accounts found.</td>
                  </tr>
                ) : (
                  filteredAccounts.map((acc, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 flex items-center space-x-2">
                        {acc.icon}
                        <span className="font-medium text-gray-900">{acc.name}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">{acc.subscription}</span>
                      </td>
                      <td className="px-4 py-3 flex items-center">
                        <span className="text-gray-700 font-medium text-sm">{acc.role.label}</span>
                        {acc.role.icon}
                      </td>
                      <td className="px-4 py-3 text-center">{acc.liveChats}</td>
                      <td className="px-4 py-3 text-center">{acc.contacts}</td>
                      <td className="px-4 py-3 text-center">
                        <button className={`p-1 rounded-full hover:bg-gray-100 ${acc.pinned ? 'bg-gray-100' : ''}`} aria-label="Pin">
                          <Pin className={`w-5 h-5 ${acc.pinned ? 'text-yellow-500' : 'text-gray-400'}`} />
                        </button>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="p-1 rounded-full hover:bg-gray-100" aria-label="Hide">
                          <EyeOff className="w-5 h-5 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex-1 p-6 flex items-center justify-center overflow-y-auto h-full">
            <div className="text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600">This section is coming soon.</p>
            </div>
          </div>
        )}
      </div>

      {/* Help Icon/Section */}
      <div className="fixed left-4 bottom-4 z-40 flex items-center space-x-2 bg-white border border-gray-200 shadow-md rounded-full px-3 py-2 text-gray-700 text-sm hover:bg-gray-50 cursor-pointer">
        <HelpCircle className="w-5 h-5 text-blue-500" />
        <span className="hidden md:inline">Help</span>
      </div>
    </div>
  );
};

export default ManyChatDashboard; 