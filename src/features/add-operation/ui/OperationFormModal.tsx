import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'src/shared/ui/Modal/Modal';
import { AddOperationForm } from './AddOperationForm';
import { Formik } from 'formik';
import { operationFormSchema } from 'src/features/add-operation/model/validation';

export const OperationFormModal: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isNew = !id || id === 'new';

  const initialValues = isNew
    ? {
        title: '',
        amount: 0,
        category: '',
        date: new Date().toISOString().split('T')[0], // текущая дата yyyy-mm-dd
      }
    : {
        title: 'Пример',
        amount: 123,
        category: 'Еда',
        date: '2024-12-01',
      };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Сохранено:', values);
    navigate(-1);
  };

  return (
    <Modal isOpen onClose={() => navigate(-1)}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={operationFormSchema}>
        {(formManager) => <AddOperationForm formManager={formManager} />}
      </Formik>
    </Modal>
  );
};
