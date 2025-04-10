import React from 'react';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  args: {
    children: (
      <div>
        <p>Это основной контент страницы</p>
        <p>Можно добавлять любые блоки внутрь children</p>
      </div>
    ),
  },
};

const Template = (args: React.ComponentProps<typeof Layout>) => <Layout {...args} />;

export const Default = Template.bind({});
