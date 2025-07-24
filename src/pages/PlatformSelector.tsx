import React from 'react';
import { MessageCircle, Instagram, Music, Send, Facebook } from 'lucide-react';

const PlatformSelector = () => {
  const platforms = [
    {
      name: 'Instagram',
      description: 'Supercharge your social media marketing with Instagram Automation.',
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      name: 'TikTok',
      description: "Elevate your marketing with TikTok's seamless automation.",
      icon: <Music className="w-8 h-8 text-black" />,
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      name: 'WhatsApp',
      description: 'Reach 2B+ users with the most popular messaging app in the world.',
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-white',
      borderColor: 'border-yellow-400',
      highlighted: true
    },
    {
      name: 'Facebook Messenger',
      description: 'Create Messenger automation to keep your customers happy.',
      icon: <Facebook className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Telegram',
      description: 'Power your business with Telegram automation.',
      icon: <Send className="w-8 h-8 text-blue-400" />,
      bgColor: 'bg-white',
      borderColor: 'border-gray-200'
    }
  ];

  return (
    <div className="bg-gray-50 p-4 md:p-8 overflow-y-auto h-full">
      {/* Logo in top left corner */}
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-gray-800" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Aris</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Centered Header */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where would you like to start?
              </h2>
              <p className="text-lg text-gray-600">
                Don't worry, you can connect other channels later.
              </p>
            </div>
          </div>

          {/* Right Side - Platform Options */}
          <div className="space-y-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`
                  ${platform.bgColor} 
                  ${platform.highlighted ? 'border-2 border-yellow-400' : `border ${platform.borderColor}`}
                  rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105
                `}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;