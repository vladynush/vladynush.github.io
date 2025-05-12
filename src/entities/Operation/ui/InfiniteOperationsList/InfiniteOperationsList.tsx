import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store';
import { Operation } from 'src/shared/types/Operation';
import { Modal } from 'src/shared/ui/Modal/Modal';
import { OperationDetails } from 'src/features/add-operation/ui/OperationDetails';
import { OperationsList } from 'src/entities/Operation/ui/OperationsList/OperationsList';
import styles from './InfiniteOperationsList.module.css';

const BATCH_SIZE = 5;
const INITIAL_SIZE = 10;

const InfiniteOperationsListComponent: React.FC = () => {
  const allOperations = useSelector((state: RootState) => state.operations);
  const [visibleCount, setVisibleCount] = useState(INITIAL_SIZE);
  const [selected, setSelected] = useState<Operation | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const visibleOps = allOperations.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, allOperations.length));
  }, [allOperations.length]);

  const handleSelect = useCallback((op: Operation) => {
    setSelected(op);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(() => {
    if (visibleCount >= allOperations.length) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMore();
    });

    if (observerRef.current) obs.observe(observerRef.current);
    return () => obs.disconnect();
  }, [loadMore, visibleCount, allOperations.length]);

  return (
    <>
      <div className={styles.wrapper}>
        <OperationsList operations={visibleOps} onSelect={handleSelect} />
        {visibleCount < allOperations.length && <div ref={observerRef} style={{ height: 1 }} />}
      </div>

      <Modal isOpen={!!selected} onClose={handleClose}>
        {selected && <OperationDetails {...selected} />}
      </Modal>
    </>
  );
};

export const InfiniteOperationsList = React.memo(InfiniteOperationsListComponent);
