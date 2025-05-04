import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from 'src/features/auth/ui/LoginForm';
import { login } from 'src/entities/auth/model/authSlice';
import { nanoid } from '@reduxjs/toolkit';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values: { email: string; password: string }) => {
    const { email } = values;

    const isAdmin = email === 'admin@site.com';
    const token = isAdmin ? 'admin-token' : nanoid();

    dispatch(login(token));
    navigate('/operations');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={Yup.object({
        email: Yup.string().email('Некорректный email').required('Обязательное поле'),
        password: Yup.string().min(4, 'Минимум 4 символа').required('Обязательное поле'),
      })}
    >
      {(formManager) => <LoginForm formManager={formManager} />}
    </Formik>
  );
};

export default LoginPage;
