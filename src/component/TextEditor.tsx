import React, { useState } from 'react';
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Link,
  Smile,
  Search,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';

interface TextSource {
  id: string;
  name: string;
  size: string;
  isNew?: boolean;
  createdAt?: Date;
}

const TextEditor: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className="flex-1 p-4 md:p-6 w-full max-w-full md:max-w-4xl mx-auto">
      <div className="">
        <div className="bg-white border border-gray-200 rounded-lg">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-2 md:px-4 py-2 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <select className="text-sm border-none focus:ring-0">
                <option>T</option>
              </select>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Strikethrough className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <List className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ListOrdered className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Link className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Smile className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs text-gray-500">0 B</span>
          </div>
          {/* Editor */}
          <div className="p-2 md:p-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-40 md:h-64 resize-none border-none outline-none text-gray-700"
              placeholder="Enter your text"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-6">
          <button className="px-4 md:px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors w-full md:w-auto">
            Add text snippet
          </button>
        </div>
        {/* Text Sources */}
        <div className="mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
            <h2 className="text-lg font-medium text-gray-900">Text sources</h2>
            <div className="flex items-center space-x-4">
              <div className="relative w-full md:w-auto">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full md:w-48"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
            <button className="text-sm text-blue-600 hover:text-blue-700 w-full md:w-auto text-left md:text-center">
              Select all
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Default</option>
              </select>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-2 md:p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">REFUND POLICES</span>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                    New
                  </span>
                </div>
                <span className="text-sm text-gray-500">10 B</span>
              </div>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;