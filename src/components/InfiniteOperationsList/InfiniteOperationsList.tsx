import React, { useRef, useState } from 'react';
import { Operation } from '../../types/Operation';
import Modal from '../Modal/Modal';
import OperationDetails from '../OperationDetails/OperationDetails';
import { generateFakeOperation } from '../../utils/generateFakeOperation';
import OperationCard from '../OperationCard/OperationCard';
import styles from './InfiniteOperationsList.module.css';
import { useVirtualOperations } from '../../hooks/useVirtualOperations';

const ITEM_HEIGHT = 120;

const InfiniteOperationsList: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>(() =>
    Array.from({ length: 10 }, () => generateFakeOperation())
  );
  const [selected, setSelected] = useState<Operation | null>(null);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    const newOps = Array.from({ length: 5 }, () => generateFakeOperation());
    setOperations((prev) => [...prev, ...newOps]);
    setLoading(false);
  };

  const { visibleItems, handleScroll } = useVirtualOperations({
    containerRef: wrapperRef,
    items: operations,
    itemHeight: ITEM_HEIGHT,
    buffer: 3,
    onEndReached: loadMore,
  });

  return (
    <>
      <div
        className={styles.wrapper}
        ref={wrapperRef}
        onScroll={handleScroll}
        style={{ position: 'relative', height: '100%', overflowY: 'auto' }}
      >
        <div style={{ height: operations.length * ITEM_HEIGHT, position: 'relative' }}>
          {visibleItems.map((item) => (
            <div
              key={item.data.id}
              style={{
                position: 'absolute',
                top: item.index * ITEM_HEIGHT,
                left: 0,
                right: 0,
                animation: 'fadeIn 0.3s ease',
              }}
            >
              <OperationCard {...item.data} index={item.index} onClick={() => setSelected(item.data)} />
            </div>
          ))}
        </div>
      </div>

      <Modal visible={!!selected} onClose={() => setSelected(null)}>
        {selected && <OperationDetails {...selected} variant="modal" />}
      </Modal>
    </>
  );
};

export default InfiniteOperationsList;
