import { useState, useEffect } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState<boolean>(true);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
      setHasConsented(true);
    }else{
      setHasConsented(false);
    }
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setHasConsented(true);

    // Appliquer les préférences
    if (newPreferences.analytics) {
      // Activer Google Analytics ou autre outil d'analyse
      enableAnalytics();
    } else {
      // Désactiver Google Analytics ou autre outil d'analyse
      disableAnalytics();
    }

    if (newPreferences.marketing) {
      // Activer les cookies marketing
      enableMarketing();
    } else {
      // Désactiver les cookies marketing
      disableMarketing();
    }
  };

  const enableAnalytics = () => {
    // Implémentez ici la logique pour activer les outils d'analyse
    // Par exemple, initialiser Google Analytics
  };

  const disableAnalytics = () => {
    // Implémentez ici la logique pour désactiver les outils d'analyse
    // Par exemple, supprimer les cookies de Google Analytics
  };

  const enableMarketing = () => {
    // Implémentez ici la logique pour activer les cookies marketing
    // Par exemple, activer les pixels de suivi publicitaire
  };

  const disableMarketing = () => {
    // Implémentez ici la logique pour désactiver les cookies marketing
    // Par exemple, supprimer les cookies publicitaires
  };

  return {
    preferences,
    hasConsented,
    updatePreferences,
  };
} 