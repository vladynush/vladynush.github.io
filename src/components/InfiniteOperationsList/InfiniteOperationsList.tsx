import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Operation } from 'src/shared/types/Operation';
import { Modal } from '../Modal/Modal';
import { OperationDetails } from '../OperationDetails/OperationDetails';
import { generateFakeOperation } from '../../utils/generateFakeOperation';
import styles from './InfiniteOperationsList.module.css';
import { OperationsList } from '../OperationsList/OperationsList';

const InfiniteOperationsListComponent: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>(() =>
    Array.from({ length: 10 }, () => generateFakeOperation())
  );
  const [selected, setSelected] = useState<Operation | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setOperations((prev) => [...prev, ...Array.from({ length: 5 }, () => generateFakeOperation())]);
  }, []);

  const handleSelect = useCallback((op: Operation) => {
    setSelected(op);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMore();
    });
    if (observerRef.current) obs.observe(observerRef.current);
    return () => obs.disconnect();
  }, [loadMore]);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className={styles.wrapper}>
        <OperationsList operations={operations} onSelect={handleSelect} />
        <div ref={observerRef} style={{ height: 1 }} />
      </div>

      <Modal visible={!!selected} onClose={handleClose}>
        {selected && <OperationDetails {...selected} />}
      </Modal>
    </>
  );
};

export const InfiniteOperationsList = React.memo(InfiniteOperationsListComponent);
