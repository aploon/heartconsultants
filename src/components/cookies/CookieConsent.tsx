import React, { useState } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import type { CookiePreferences } from '../../hooks/useCookieConsent';

export const CookieConsent: React.FC = () => {
  const { preferences, hasConsented, updatePreferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  const handleAcceptAll = () => {
    updatePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
  };

  const handleRefuseAll = () => {
    updatePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
  };

  const handleSavePreferences = () => {
    updatePreferences(tempPreferences);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    setTempPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    !hasConsented &&
    <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/95 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-bold text-gray-800">🍪 Cookie Settings</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
              We use cookies to enhance your experience on our website. 
              You can customize your preferences or accept the default settings.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 text-sm font-medium bg-white/50 hover:bg-white"
            >
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>
            <button
              onClick={handleRefuseAll}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 text-sm font-medium bg-white/50 hover:bg-white"
            >
              Decline All
            </button>
            {showDetails ? (
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
              >
                Accept All
              </button>
            )}
          </div>
        </div>

        {showDetails && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Essential Cookies</h3>
                  <p className="text-sm text-gray-500 mt-1">Required for the website to function</p>
                </div>
                <label className="inline-flex items-center cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked={tempPreferences.essential}
                    disabled
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Analytics Cookies</h3>
                  <p className="text-sm text-gray-500 mt-1">To analyze website usage</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempPreferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Marketing Cookies</h3>
                  <p className="text-sm text-gray-500 mt-1">For targeted advertising</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempPreferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Personalization Cookies</h3>
                  <p className="text-sm text-gray-500 mt-1">To customize your experience</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempPreferences.personalization}
                    onChange={() => handlePreferenceChange('personalization')}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}; 