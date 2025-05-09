import React from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import type { CookiePreferences } from '../../hooks/useCookieConsent';

export const CookieManager: React.FC = () => {
  const { preferences, updatePreferences } = useCookieConsent();

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    const newPreferences = {
      ...preferences,
      [key]: !preferences[key],
    };
    updatePreferences(newPreferences);
  };

  return (
    <div className="space-y-4" id="cookie-preferences">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Essential Cookies</h3>
        <p className="text-sm">Required for the website to function properly. They cannot be disabled.</p>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs bg-primary text-white rounded">Always active</span>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Analytics Cookies</h3>
        <p className="text-sm">Help us understand how you use our website.</p>
        <div className="mt-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={preferences.analytics}
              onChange={() => handlePreferenceChange('analytics')}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Personalization Cookies</h3>
        <p className="text-sm">Allow us to adapt content to your preferences.</p>
        <div className="mt-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={preferences.personalization}
              onChange={() => handlePreferenceChange('personalization')}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Marketing Cookies</h3>
        <p className="text-sm">Used to provide you with relevant content and measure the effectiveness of our campaigns.</p>
        <div className="mt-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={preferences.marketing}
              onChange={() => handlePreferenceChange('marketing')}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );
}; 