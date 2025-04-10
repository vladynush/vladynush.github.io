import React from 'react';
import Header from '../Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>{children}</main>
    </>
  );
};

export default Layout;
