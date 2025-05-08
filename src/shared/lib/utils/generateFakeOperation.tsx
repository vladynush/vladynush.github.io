import { Operation } from 'src/shared/types/Operation';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Продукты', 'Транспорт', 'Развлечения', 'Образование', 'Путешествия'];
const titles = ['Покупка в магазине', 'Оплата подписки', 'Поездка на такси', 'Билеты в кино', 'Онлайн-курс'];
const descriptions = [
  'Короткое описание.',
  'Оплата прошла успешно.',
  'Списано со счёта.',
  'Очень длинное описание операции, которое должно не помещаться в карточку и активировать тултип при наведении.',
  'Ещё одно тестовое длинное описание, чтобы убедиться, что компонент Tip работает корректно.',
  'Средней длины текст для проверки отображения в карточке.',
];

export const generateFakeOperation = (): Operation => {
  const title = titles[Math.floor(Math.random() * titles.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];

  const description = descriptions[Math.floor(Math.random() * descriptions.length)];

  const amount = Math.floor(Math.random() * 2000 - 1000);
  const date = new Date(Date.now() - Math.random() * 1000000000).toISOString();

  return {
    id: uuidv4(),
    title,
    category,
    description,
    amount,
    date,
  };
};
