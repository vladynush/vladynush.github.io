import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../../context/ThemeContext';

export default {
  title: 'UI/ThemeSwitcher',
  component: ThemeSwitcher,
};

export const Default = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
