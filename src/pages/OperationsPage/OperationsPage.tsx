import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'src/shared/ui/Button/Button';
import Layout from 'src/shared/ui/Layout/Layout';
import styles from './OperationsPage.module.css';
import { InfiniteOperationsList } from 'src/entities/Operation/ui/InfiniteOperationsList/InfiniteOperationsList';

export const OperationsPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = (id?: string) =>
    navigate(`/operations/${id ?? 'new'}`, {
      state: { backgroundLocation: location },
    });

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Операции</h1>
          <Button className={styles.createButton} onClick={() => openModal()}>
            Добавить
          </Button>
        </div>
        <InfiniteOperationsList />
      </div>
    </Layout>
  );
};
