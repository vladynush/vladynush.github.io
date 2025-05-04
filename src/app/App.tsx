import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from 'src/app/providers/ThemeProvider';
import { LanguageProvider } from 'src/app/providers/LanguageProvider';

const App: FC = () => (
  <LanguageProvider>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
