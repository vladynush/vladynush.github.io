import React, { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`${styles.button} ${language === 'ru' ? styles.active : ''}`}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
