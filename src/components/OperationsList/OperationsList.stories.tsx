import React, { useState } from 'react';
import OperationsList from './OperationsList';
import { Operation } from '../../types/Operation';
import Modal from '../Modal/Modal';
import OperationDetails from '../OperationDetails/OperationDetails';

export default {
  title: 'Finance/OperationsList',
  component: OperationsList,
};

const mockOperations: Operation[] = [
  {
    id: '1',
    title: 'Кофе',
    category: 'Еда',
    amount: -250,
    description: 'Утренний капучино',
    date: '2024-04-01',
  },
  {
    id: '2',
    title: 'Зарплата',
    category: 'Доход',
    amount: 120000,
    description: 'Основной доход',
    date: '2024-04-05',
  },
];

export const ClickToShowDetails = () => {
  const [selected, setSelected] = useState<Operation | null>(null);

  return (
    <>
      <OperationsList operations={mockOperations} onSelect={(op) => setSelected(op)} />

      <Modal visible={!!selected} onClose={() => setSelected(null)}>
        <OperationDetails {...selected} variant="modal" />
      </Modal>
    </>
  );
};
