import React, { useState } from 'react';
import { Info, ChevronDown } from 'lucide-react';

interface WebsiteConfig {
  url: string;
  includePaths: string;
  excludePaths: string;
}

const WebsiteTab: React.FC = () => {
  const [url, setUrl] = useState('www.example.com');
  const [includePaths, setIncludePaths] = useState('');
  const [excludePaths, setExcludePaths] = useState('');

  return (
    <div className="flex-1 p-4 md:p-6 w-full max-w-full md:max-w-4xl mx-auto">
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2 md:gap-0">
          <h1 className="text-2xl font-semibold text-gray-900">Website</h1>
          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
            <Info className="w-4 h-4" />
            <span>Learn more</span>
          </button>
        </div>
        <p className="text-gray-600 mb-4 md:mb-8">
          Crawl web pages or submit sitemaps to update your AI with the latest content.
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-2 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-2 md:gap-0">
            <h2 className="text-lg font-medium text-gray-900">Add links</h2>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
              Crawl links
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              Sitemap
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              Individual link
            </button>
          </div>
          <div className="mb-4 md:mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
            <div className="flex">
              <select className="px-3 py-2 border border-gray-300 border-r-0 rounded-l-lg bg-gray-50 text-sm">
                <option>https://</option>
                <option>http://</option>
              </select>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="www.example.com"
              />
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 md:p-4 mb-4 md:mb-6">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-700">
                Links found during crawling or sitemap retrieval may be updated if new links are discovered or some links are invalid.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Include only paths
              </label>
              <input
                type="text"
                value={includePaths}
                onChange={(e) => setIncludePaths(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Ex: blog/*, dev/*"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exclude paths
              </label>
              <input
                type="text"
                value={excludePaths}
                onChange={(e) => setExcludePaths(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Ex: blog/*, dev/*"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-4 md:px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors w-full md:w-auto">
              Fetch links
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTab;