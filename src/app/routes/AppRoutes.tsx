import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { OperationsPage } from 'src/pages/OperationsPage/OperationsPage';
import ProfilePage from 'src/pages/ProfilePage/ProfilePage';
// import OperationFormModal from 'src/features/add-operation/ui/OperationFormModal';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<OperationsPage />} />
    <Route path="/operations" element={<OperationsPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/*<Route path="/operations/:id" element={<OperationFormModal />} />*/}
  </Routes>
);

export default AppRoutes;
