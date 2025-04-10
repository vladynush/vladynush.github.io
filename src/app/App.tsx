import React from 'react';
import './App.css';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import Layout from '../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout>
          <h1>{t('title')}</h1>
          <p>{t('point_1')}</p>
          <p>{t('point_2')}</p>
          <p>{t('point_3')}</p>
          <p>{t('point_4')}</p>
        </Layout>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
