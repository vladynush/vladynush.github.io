import React, { FC } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.switcher} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeSwitcher;
