import { useColorScheme as useRNColorScheme } from 'react-native';
import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { Appearance, Platform } from 'react-native';

const STORAGE_KEY = 'color-scheme';

export type ColorScheme = 'light' | 'dark';

type ThemeContextValue = {
  colorScheme: ColorScheme | null;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Theme colors come from NativeWind: use className="bg-background", "bg-card", and dark: variants.
// This context only syncs the user's preference to html.dark and exposes toggle.

function getStoredScheme(): ColorScheme | null {
  if (Platform.OS !== 'web' || typeof window === 'undefined' || !window.localStorage) return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (_) {}
  return null;
}

function applyThemeToDocument(scheme: ColorScheme) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', scheme);
  document.documentElement.classList.toggle('dark', scheme === 'dark');
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useRNColorScheme();
  const [userScheme, setUserScheme] = useState<ColorScheme | null>(() => getStoredScheme());

  const colorScheme: ColorScheme = userScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');

  useLayoutEffect(() => {
    applyThemeToDocument(colorScheme);
  }, [colorScheme]);

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setUserScheme(scheme);
    if (Platform.OS === 'web' && window?.localStorage) {
      try {
        window.localStorage.setItem(STORAGE_KEY, scheme);
      } catch (_) {}
    }
    Appearance.setColorScheme(scheme);
  }, []);

  const toggleColorScheme = useCallback(() => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }, [colorScheme, setColorScheme]);

  const value = useMemo(
    () => ({ colorScheme, setColorScheme, toggleColorScheme }),
    [colorScheme, setColorScheme, toggleColorScheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
