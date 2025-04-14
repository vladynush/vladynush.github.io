import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { LanguageProvider } from '../src/context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import '../src/app/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </LanguageProvider>
      </I18nextProvider>
    ),
  ],
};

export default preview;