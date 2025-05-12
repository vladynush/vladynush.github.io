import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Modal } from 'src/shared/ui/Modal/Modal';
import { AddOperationForm } from './AddOperationForm';
import { operationFormSchema } from 'src/features/add-operation/model/validation';
import { RootState } from 'src/app/store/store';
import { addOperation, updateOperation } from 'src/entities/Operation/model/operationsSlice';

export const OperationFormModal: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();
  const isNew = !id || id === 'new';

  const operationToEdit = useSelector((state: RootState) => state.operations.find((op) => op.id === id));

  const initialValues = isNew
    ? {
        title: '',
        amount: 0,
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
      }
    : operationToEdit ?? {
        title: '',
        amount: 0,
        category: '',
        description: '',
        date: '',
      };

  const handleSubmit = (values: typeof initialValues) => {
    if (isNew) {
      dispatch(addOperation({ id: nanoid(), ...values }));
    } else if (id) {
      dispatch(updateOperation({ id, ...values }));
    }
    navigate(-1);
  };

  return (
    <Modal isOpen onClose={() => navigate(-1)}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={operationFormSchema}
        enableReinitialize
      >
        {(formManager) => <AddOperationForm formManager={formManager} />}
      </Formik>
    </Modal>
  );
};
