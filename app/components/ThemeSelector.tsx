'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { THEMES } from '../constants/themes';
import { ITheme } from '../models/ITheme';
import { themeAtom } from '../store/atoms';
import { HiColorSwatch } from 'react-icons/hi';

const ThemeSelector = () => {
  const [currentTheme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = (selectedTheme: ITheme) => {
    setTheme(selectedTheme.name);
    localStorage.setItem('selectedTheme', selectedTheme.name);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && savedTheme !== currentTheme) {
      setTheme(savedTheme);
    }
  }, [currentTheme, setTheme]);

  return (
    <details className='dropdown'>
      <summary className='m-1 btn'>
        <HiColorSwatch />
      </summary>
      <ul className='theme-dropdown'>
        {THEMES.map((theme) => (
          <li key={theme.id}>
            <button onClick={() => handleThemeChange(theme)}>
              {theme.name}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ThemeSelector;
