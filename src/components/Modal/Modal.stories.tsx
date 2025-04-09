import React from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    visible: true,
    children: 'Моя кривая модалка',
  },
};

const Template = (args: React.ComponentProps<typeof Modal>) => <Modal {...args} />;

export const Default = Template.bind({});
