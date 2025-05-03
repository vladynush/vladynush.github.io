import React, { FC, memo } from 'react';
import styles from './OperationDetails.module.css';
import { Operation } from 'src/shared/types/Operation';

export type OperationDetailsProps = Operation & {
  variant?: 'card' | 'modal';
};

const OperationDetailsComponent: FC<OperationDetailsProps> = ({
  title,
  category,
  description,
  amount,
  date,
  variant = 'card',
}) => (
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

export const OperationDetails = memo(OperationDetailsComponent);
