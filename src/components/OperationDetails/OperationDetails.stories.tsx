import React, { ComponentProps } from 'react';
import OperationDetails from './OperationDetails';

export default {
  title: 'Finance/OperationDetails',
  component: OperationDetails,
  args: {
    amount: 3400,
    category: 'Путешествия',
    title: 'Билеты на поезд',
    description: 'Покупка билетов на поезд до Сочи. С учётом скидки и бонусов.',
    date: '2025-04-09',
  },
};

const Template = (args: ComponentProps<typeof OperationDetails>) => <OperationDetails {...args} />;

export const Default = Template.bind({});
