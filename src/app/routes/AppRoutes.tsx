import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { OperationsPage } from 'src/pages/OperationsPage/OperationsPage';
import ProfilePage from 'src/pages/ProfilePage/ProfilePage';
import { OperationFormModal } from 'src/features/add-operation/ui/OperationFormModal';

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  const state = (location.state as { backgroundLocation?: Location }) || {};

  return (
    <>
      {/* Основной рендер без модалки */}
      <Routes location={state.backgroundLocation || location}>
        <Route path="/" element={<OperationsPage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* Показываем модалку поверх, если есть backgroundLocation */}
      {state.backgroundLocation && (
        <Routes>
          <Route path="/operations/:id" element={<OperationFormModal />} />
        </Routes>
      )}
    </>
  );
};
