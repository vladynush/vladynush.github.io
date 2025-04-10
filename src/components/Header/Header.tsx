import React, { FC } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.controls}>
        <div className={styles.controls}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
