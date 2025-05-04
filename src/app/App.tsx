import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from 'src/app/providers/ThemeProvider';
import { LanguageProvider } from 'src/app/providers/LanguageProvider';
import { useDispatch } from 'react-redux';
import { syncToken } from 'src/entities/auth/model/authSlice';
import ProfileInitializer from 'src/app/ProfileInitializer';

const AppInitializer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.key === 'token') {
        dispatch(syncToken(e.newValue));
      }
    };
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, [dispatch]);

  return null;
};

const App: FC = () => (
  <LanguageProvider>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
        <AppInitializer />
        <ProfileInitializer />
      </BrowserRouter>
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
