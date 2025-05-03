import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { LoginFormValues, RegisterFormValues } from '../model/types';

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
        validate={(values) => {
          const errors: Partial<Record<keyof LoginFormValues, string>> = {};
          if (!values.email) {
            errors.email = 'Email обязателен';
          } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            errors.email = 'Неверный формат email';
          }
          if (!values.password) {
            errors.password = 'Пароль обязателен';
          } else if (values.password.length < 6) {
            errors.password = 'Минимум 6 символов';
          }
          return errors;
        }}
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
        validate={(values) => {
          const errors: Partial<Record<keyof RegisterFormValues, string>> = {};
          if (!values.email) {
            errors.email = 'Email обязателен';
          } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            errors.email = 'Неверный формат email';
          }
          if (!values.password) {
            errors.password = 'Пароль обязателен';
          } else if (values.password.length < 6) {
            errors.password = 'Минимум 6 символов';
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Подтвердите пароль';
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Пароли не совпадают';
          }
          return errors;
        }}
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
