import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageProvider } from '../../app/providers/LanguageProvider';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../shared/lib/i18n';

export default {
  title: 'UI/LanguageSwitcher',
  component: LanguageSwitcher,
};

const TextComponent = () => {
  const { t } = useTranslation();
  return (
    <div style={{ marginTop: '16px' }}>
      <p>{t('title')}</p>
      <p>{t('point_1')}</p>
    </div>
  );
};

export const WithText = () => (
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      <LanguageSwitcher />
      <TextComponent />
    </LanguageProvider>
  </I18nextProvider>
);
