import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { LoginFormValues, RegisterFormValues } from '../model/types';
import { validateLoginForm, validateRegisterForm } from 'src/features/auth/model/validate';

const meta: Meta = {
  title: 'Features/AuthForms',
  component: LoginForm,
};

export default meta;

type LoginStory = StoryObj<typeof LoginForm>;
type RegisterStory = StoryObj<typeof RegisterForm>;

export const Login: LoginStory = {
  render: () => {
    const initialValues: LoginFormValues = {
      email: '',
      password: '',
    };
    return (
      <Formik<LoginFormValues>
        initialValues={initialValues}
        validate={validateLoginForm}
        onSubmit={(values, { resetForm }) => {
          console.log('Login form submitted:', values);
          resetForm();
        }}
      >
        {(formManager) => <LoginForm formManager={formManager} />}
      </Formik>
    );
  },
};

export const Register: RegisterStory = {
  render: () => {
    const initialValues: RegisterFormValues = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    return (
      <Formik<RegisterFormValues>
        initialValues={initialValues}
        validate={validateRegisterForm}
        onSubmit={(values, { resetForm }) => {
          console.log('Register form submitted:', values);
          resetForm();
        }}
      >
        {(formManager) => <RegisterForm formManager={formManager} />}
      </Formik>
    );
  },
};
