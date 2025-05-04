import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOperations } from 'src/entities/Operation/model/useOperations';
import Button from 'src/shared/ui/Button/Button';
import { OperationsList } from 'src/entities/Operation/ui/OperationsList/OperationsList';
import styles from './OperationsPage.module.css';

export const OperationsPage: FC = () => {
  const { operations } = useOperations();
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = (id?: string) =>
    navigate(`/operations/${id ?? 'new'}`, { state: { backgroundLocation: location } });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Операции</h1>
        <Button className={styles.createButton} onClick={() => openModal()}>
          Добавить
        </Button>
      </div>
      <OperationsList operations={operations} onSelect={(op) => openModal(op.id)} />
    </div>
  );
};
