import React, { FC } from 'react';
import styles from './OperationCard.module.css';

export type OperationCardProps = {
  amount: number;
  category: string;
  title: string;
  description: string;
};

const OperationCard: FC<OperationCardProps> = ({ amount, category, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.amount}>₽ {amount.toFixed(2)}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        {description.slice(0, 60)}
        {description.length > 60 && '...'}
      </div>
    </div>
  );
};

export default OperationCard;
