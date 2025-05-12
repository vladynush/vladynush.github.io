import React, { ComponentProps } from 'react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Нажми на меня',
  },
};

const Template = (args: ComponentProps<typeof Button>) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Недоступно',
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Купить сейчас',
};
