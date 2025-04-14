import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
