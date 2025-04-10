import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
