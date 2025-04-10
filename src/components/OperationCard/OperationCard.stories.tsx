import React from 'react';
import OperationCard from './OperationCard';

export default {
  title: 'Finance/OperationCard',
  component: OperationCard,
  args: {
    amount: 1500,
    category: 'Продукты',
    title: 'Покупка в магазине',
    description: 'Куплены товары для успешного существования завтра: хлеб, сыр, фрукты, овощи и тушенки 10 кг...',
  },
};

const Template = (args: React.ComponentProps<typeof OperationCard>) => <OperationCard {...args} />;

export const Default = Template.bind({});
