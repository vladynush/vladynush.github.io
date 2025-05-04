import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/widgets/Header/Header';
import styles from './Layout.module.css';

const Layout: React.FC = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
);

export default Layout;
