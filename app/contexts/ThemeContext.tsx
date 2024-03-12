'use client';

import { ReactNode, createContext } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../store/atoms';

interface ContextProps {
  theme: string;
}

interface ProviderProps {
  children: ReactNode;
}

const storedTheme = localStorage.getItem('theme');

export const ThemeContext = createContext<ContextProps>({
  theme: JSON.stringify(storedTheme),
});

const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme] = useAtom(themeAtom);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
