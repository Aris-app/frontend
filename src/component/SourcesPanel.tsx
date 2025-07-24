import React from 'react';
import { Type } from 'lucide-react';

const SourcesPanel: React.FC = () => {
  return (
    <div className="w-full md:w-80 bg-white border-t md:border-t-0 md:border-l border-gray-200 p-4 md:p-6 h-80 md:h-full overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Sources</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Type className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">1 Text File</span>
          </div>
          <span className="text-sm text-gray-500">10 B</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Total size</span>
            <span className="text-sm text-gray-500">10 B / 400 KB</span>
          </div>
          <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
            Create agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourcesPanel;