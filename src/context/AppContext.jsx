import { createContext, createSignal, createEffect, useContext } from 'solid-js';
import { useNavigate, useLocation } from '@solidjs/router';
import { translations } from '../translations/translations';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = createSignal(true);
  /* 
   * Main language signal.
   * NOTE: In URL-based routing, this signal should be computed from the URL, 
   * but for compatibility with existing components, we keep it as a signal 
   * that is synced with the URL by the Router wrapper or effects.
   */
  const [language, setLanguage] = createSignal('es');

  const navigate = useNavigate();
  const location = useLocation();

  // Validate supported languages
  const supportedLangs = ['es', 'en', 'de'];

  // Effect: Sync state from URL if present
  createEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    if (supportedLangs.includes(firstSegment)) {
      if (language() !== firstSegment) {
        setLanguage(firstSegment);
        localStorage.setItem('lang', firstSegment);
      }
    } else {
      // If URL doesn't have a language prefix (e.g. root '/'), handling is done in App.jsx via redirect
      // checking localStorage or browser preference there.
    }
  });

  // Leer tema al montar (idioma se maneja via URL/Router principalmente ahora)
  createEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  });

  // Aplicar tema al DOM y guardar en localStorage
  createEffect(() => {
    const theme = isDarkMode() ? 'dark' : 'light';
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const changeLanguage = (lang) => {
    if (!translations[lang] || lang === language()) return;
    
    // Instead of just setting state, we navigate to the new URL
    // Preserving the rest of the path if possible would be ideal, 
    // but mapping routes is complex. Simple approach: go to same path with new prefix?
    // Current path: /es/servicios -> /en/servicios
    const currentPath = location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    
    let newPath = '';
    if (supportedLangs.includes(parts[0])) {
      // Replace existing language
      parts[0] = lang;
      newPath = '/' + parts.join('/');
    } else {
      // No language prefix (shouldn't happen with new router), append
      newPath = `/${lang}${currentPath}`;
    }

    // Edge case: if we are at root /, newPath becomes /en
    if (newPath === '') newPath = `/${lang}`;

    // Update state immediately for UI responsiveness (though nav will trigger effect too)
    setLanguage(lang);
    localStorage.setItem('lang', lang); 
    
    navigate(newPath);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, language, changeLanguage }}>
      {props.children}
    </AppContext.Provider>
  );
};
