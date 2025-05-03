import React, { FC, useCallback, useMemo } from 'react';
import styles from './OperationsList.module.css';
import { Operation } from 'src/shared/types/Operation';
import { OperationCard } from '../OperationCard/OperationCard';

export type OperationsListProps = {
  operations: Operation[];
  onSelect: (op: Operation) => void;
};

export const OperationsList: FC<OperationsListProps> = ({ operations, onSelect }) => {
  const handleSelect = useCallback((op: Operation) => onSelect(op), [onSelect]);

  const cards = useMemo(
    () => operations.map((op, i) => <OperationCard key={op.id} {...op} index={i} onClick={() => handleSelect(op)} />),
    [operations, handleSelect]
  );

  return <div className={styles.list}>{cards}</div>;
};
