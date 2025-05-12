import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import { LanguageProvider } from '../src/app/providers/LanguageProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/shared/lib/i18n';
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