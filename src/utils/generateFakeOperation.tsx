import { Operation } from '../types/Operation';

let id = 0;

export function generateFakeOperation(): Operation {
  return {
    id: (id++).toString(),
    title: `Операция #${id}`,
    category: Math.random() > 0.5 ? 'Доход' : 'Расход',
    amount: Math.floor(Math.random() * 10000 - 5000),
    description: 'Сгенерированная операция',
    date: new Date().toISOString().split('T')[0],
  };
}
