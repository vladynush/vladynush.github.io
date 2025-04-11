import React from 'react';
import styles from './OperationCard.module.css';

type Props = {
  title: string;
  category: string;
  description: string;
  amount: number;
  onClick?: () => void;
  index?: number;
};

const OperationCard: React.FC<Props> = ({ title, category, description, amount, onClick, index }) => {
  return (
    <div className={styles.card} onClick={onClick} style={{ animationDelay: `${(index ?? 0) * 50}ms` }}>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.category}>{category}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.amount}>{amount > 0 ? `+${amount}` : amount} ₽</div>
    </div>
  );
};

export default OperationCard;
