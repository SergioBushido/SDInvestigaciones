import { createContext, createSignal, createEffect, useContext } from 'solid-js';
import { translations } from '../translations/translations';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("❌ useAppContext llamado fuera de AppProvider");
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = createSignal(true);
  const [language, setLanguage] = createSignal('es');

  // Leer tema e idioma al montar
  createEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang  = localStorage.getItem('lang');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      console.log(`[🌗] Tema cargado desde localStorage: ${savedTheme}`);
    }
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
      console.log(`[🌍] Idioma cargado desde localStorage: ${savedLang}`);
    }
  });

  // Aplicar tema al DOM y guardar en localStorage
  createEffect(() => {
    const theme = isDarkMode() ? 'dark' : 'light';
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
    console.log(`[🌐] Tema aplicado: ${theme}`);
  });

  const toggleTheme = () => {
    const next = !isDarkMode();
    setIsDarkMode(next);
    console.log(`[🎛️] Cambiando a modo ${next ? 'oscuro' : 'claro'}`);
  };

  const changeLanguage = (lang) => {
    if (!translations[lang]) return;
    setLanguage(lang);
    localStorage.setItem('lang', lang);
    console.log(`[🌍] Idioma cambiado a: ${lang}`);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, language, changeLanguage }}>
      {props.children}
    </AppContext.Provider>
  );
};
