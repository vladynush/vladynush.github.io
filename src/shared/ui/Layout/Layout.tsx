import React, { FC, ReactNode } from 'react';
import Header from 'src/widgets/Header/Header';
import styles from './Layout.module.css';

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
