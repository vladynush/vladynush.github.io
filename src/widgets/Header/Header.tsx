import React, { FC } from 'react';
import styles from './Header.module.css';
import Logo from 'src/shared/ui/Logo/Logo';
import ThemeSwitcher from 'src/widgets/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from 'src/widgets/LanguageSwitcher/LanguageSwitcher';

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
