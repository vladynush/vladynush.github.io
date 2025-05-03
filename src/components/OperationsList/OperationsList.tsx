import React, { FC } from 'react';
import { Operation } from 'src/shared/types/Operation';
import OperationCard from '../OperationCard/OperationCard';
import styles from './OperationsList.module.css';

type OperationsListProps = {
  operations: Operation[];
  onSelect?: (op: Operation) => void;
};

const OperationsList: FC<OperationsListProps> = ({ operations, onSelect }) => {
  return (
    <div className={styles.list}>
      {operations.map((op, i) => (
        <OperationCard key={op.id} {...op} index={i} onClick={() => onSelect?.(op)} />
      ))}
    </div>
  );
};

export default OperationsList;
