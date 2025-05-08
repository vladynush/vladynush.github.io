import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Operation } from 'src/shared/types/Operation';

const DEFAULT_BUFFER = 3;

export const useVirtualOperations = ({
  containerRef,
  items,
  itemHeight,
  buffer = DEFAULT_BUFFER,
  onEndReached,
}: {
  containerRef: React.RefObject<HTMLElement>;
  items: Operation[];
  itemHeight: number;
  buffer?: number;
  onEndReached?: () => void;
}) => {
  const [visibleItems, setVisibleItems] = useState<{ index: number; data: Operation }[]>([]);
  const lastRenderedRef = useRef<string>('');

  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;

    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
    const endIndex = Math.min(items.length, Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer);

    const visible = items.slice(startIndex, endIndex).map((item, i) => ({
      index: startIndex + i,
      data: item,
    }));

    const key = visible.map((v) => v.data.id).join(',');
    if (key !== lastRenderedRef.current) {
      lastRenderedRef.current = key;
      setVisibleItems(visible);
    }

    if (endIndex >= items.length - 1 && onEndReached) {
      onEndReached();
    }
  }, [containerRef, items, itemHeight, buffer, onEndReached]);

  useLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const handleScroll = useCallback(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  return {
    visibleItems,
    handleScroll,
  };
};
