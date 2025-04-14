import React, { FC } from 'react';
import styles from './OperationDetails.module.css';

type Props = {
  title: string;
  category: string;
  amount: number;
  description: string;
  date: string;
  variant?: 'card' | 'modal';
};

const OperationDetails: FC<Props> = ({ title, category, amount, description, date, variant = 'card' }) => {
  return (
    <div className={`${styles.details} ${styles[variant]}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.category}>{category}</div>
      <div className={styles.amount}>{amount > 0 ? `+${amount}` : amount} ₽</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.date}>📅 {date}</div>
      <button className={styles.button} disabled>
        ✏️ Редактировать
      </button>
    </div>
  );
};

export default OperationDetails;
