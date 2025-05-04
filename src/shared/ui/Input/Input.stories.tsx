import React, { ComponentProps } from 'react';
import Input from './Input';

export default {
  title: 'UI/Input',
  component: Input,
  args: {
    placeholder: 'Введите текст...',
  },
};

const Template = (args: ComponentProps<typeof Input>) => <Input {...args} />;

export const Default = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Пример текста',
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  type: 'password',
  placeholder: 'Пароль',
};
