import { useEffect, useState } from 'react';
import { Operation } from 'src/shared/types/Operation';

const mockOperations: Operation[] = [
  { id: '1', title: 'Salary', category: 'Income', amount: 1000, description: '', date: '2025-05-01' },
  { id: '2', title: 'Groceries', category: 'Food', amount: -150, description: '', date: '2025-05-02' },
];

export function useOperations() {
  const [operations, setOperations] = useState<Operation[]>([]);
  useEffect(() => {
    setOperations(mockOperations);
  }, []);
  return { operations, setOperations };
}
