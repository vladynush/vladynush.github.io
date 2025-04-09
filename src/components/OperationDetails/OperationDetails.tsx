import React from 'react';
import styles from './OperationDetails.module.css';

export type OperationDetailsProps = {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: string;
};

const OperationDetails: React.FC<OperationDetailsProps> = ({ amount, category, title, description, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.amount}>₽ {amount.toFixed(2)}</div>
        <div className={styles.category}>{category}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>Дата: {date}</div>
      <div className={styles.description}>{description}</div>
      <button className={styles.editButton} disabled>
        Редактировать
      </button>
    </div>
  );
};

export default OperationDetails;
