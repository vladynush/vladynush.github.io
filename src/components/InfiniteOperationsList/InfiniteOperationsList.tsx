import React, { useEffect, useRef, useState } from 'react';
import { Operation } from '../../types/Operation';
import OperationsList from '../OperationsList/OperationsList';
import Modal from '../Modal/Modal';
import OperationDetails from '../OperationDetails/OperationDetails';
import { generateFakeOperation } from '../../utils/generateFakeOperation';
import styles from './InfiniteOperationsList.module.css';

const InfiniteOperationsList: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>(() =>
    Array.from({ length: 10 }, () => generateFakeOperation())
  );
  const [selected, setSelected] = useState<Operation | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const newOps = Array.from({ length: 5 }, () => generateFakeOperation());
        setOperations((prev) => [...prev, ...newOps]);
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <OperationsList operations={operations} onSelect={setSelected} />
        <div ref={observerRef} style={{ height: 1 }} />
      </div>

      <Modal visible={!!selected} onClose={() => setSelected(null)}>
        {selected && <OperationDetails {...selected} variant="modal" />}
      </Modal>
    </>
  );
};

export default InfiniteOperationsList;
