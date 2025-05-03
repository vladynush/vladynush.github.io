import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import { ProfileForm } from './ProfileForm';
import { ProfileFormValues } from '../model/types';

const meta: Meta = {
  title: 'Features/ProfileForm',
  component: ProfileForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const initialValues: ProfileFormValues = { name: '', about: '' };
    return (
      <Formik<ProfileFormValues>
        initialValues={initialValues}
        validate={(values) => {
          const errors: Partial<Record<keyof ProfileFormValues, string>> = {};
          if (!values.name) errors.name = 'Имя обязательно';
          if (values.name.length < 2) errors.name = 'Минимум 2 символа';
          if (!values.about) errors.about = 'Опишите себя';
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('Submitted:', values);
          resetForm();
        }}
      >
        {(fm) => <ProfileForm formManager={fm} />}
      </Formik>
    );
  },
};
