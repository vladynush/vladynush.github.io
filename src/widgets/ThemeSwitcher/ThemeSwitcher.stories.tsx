import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../../app/providers/ThemeProvider';

export default {
  title: 'UI/ThemeSwitcher',
  component: ThemeSwitcher,
};

export const Default = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
