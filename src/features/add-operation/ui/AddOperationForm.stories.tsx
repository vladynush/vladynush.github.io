import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import { AddOperationForm } from './AddOperationForm';
import { OperationFormValues } from '../model/types';

const meta: Meta<typeof AddOperationForm> = {
  title: 'Features/AddOperationForm',
  component: AddOperationForm,
};

export default meta;
type Story = StoryObj<typeof AddOperationForm>;

export const Default: Story = {
  render: () => {
    const initialValues: OperationFormValues = {
      name: '',
      amount: 0,
      category: '',
      date: '',
    };

    return (
      <Formik<OperationFormValues>
        initialValues={initialValues}
        validate={(values) => {
          const errors: Partial<Record<keyof OperationFormValues, string>> = {};
          if (!values.name) errors.name = 'Название обязательно';
          if (values.amount === 0) errors.amount = 'Сумма не должна быть нулём';
          if (!values.category) errors.category = 'Укажите категорию';
          if (!values.date) errors.date = 'Укажите дату';
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('Operation submit:', values);
          resetForm();
        }}
      >
        {(fm) => <AddOperationForm formManager={fm} categories={[]} />}
      </Formik>
    );
  },
};
