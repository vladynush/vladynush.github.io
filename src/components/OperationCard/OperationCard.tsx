import React, { useEffect, useRef, useState } from 'react';
import styles from './OperationCard.module.css';
import { Tip } from '../Tip/Tip';

type Props = {
  title: string;
  category: string;
  description: string;
  amount: number;
  onClick?: () => void;
  index?: number;
};

const OperationCard: React.FC<Props> = ({ title, category, description, amount, onClick, index }) => {
  const descRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const isOverflowing = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;

    setIsTruncated(isOverflowing);
  }, [description]);

  return (
    <div className={styles.card} onClick={onClick} style={{ animationDelay: `${(index ?? 0) * 50}ms` }}>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.category}>{category}</div>
        {isTruncated ? (
          <Tip title={description}>
            <div className={styles.description}>{description}</div>
          </Tip>
        ) : (
          <div ref={descRef} className={styles.description}>
            {description}
          </div>
        )}
      </div>
      <div className={styles.amount}>{amount > 0 ? `+${amount}` : amount} ₽</div>
    </div>
  );
};

export default OperationCard;
