import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AtmosphereContext = createContext();

export const AtmosphereProvider = ({ children }) => {
  const [atmosphere] = useState({
    phase: 'day',
    intensity: 1,
    hour: 12,
    isOverride: false
  });

  // Locked to day, setOverride is now a no-op
  const setOverride = () => { };

  const value = useMemo(() => ({
    atmosphere,
    setOverride
  }), [atmosphere]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('atmosphere-dawn', 'atmosphere-dusk', 'atmosphere-night');
    root.classList.add('atmosphere-day');
  }, []);

  return (
    <AtmosphereContext.Provider value={value}>
      {children}
    </AtmosphereContext.Provider>
  );
};

export const useAtmosphere = () => {
  const context = useContext(AtmosphereContext);
  if (!context) throw new Error('useAtmosphere must be used within an AtmosphereProvider');
  return context;
};

// Keep compatibility with old useTheme imports to avoid immediate breaking
export const useTheme = () => {
  const { atmosphere } = useAtmosphere();
  return { theme: (atmosphere.phase === 'day' || atmosphere.phase === 'dawn') ? 'light' : 'dark', atmosphere };
};
