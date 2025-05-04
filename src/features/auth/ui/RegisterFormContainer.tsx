import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterForm } from './RegisterForm';
import { registerUser } from 'src/shared/api/otus';
import { useDispatch } from 'react-redux';
import { login } from 'src/entities/Auth/model/authSlice';
import { useNavigate } from 'react-router-dom';
import { ErrorModal } from 'src/shared/ui/ErrorModal/ErrorModal';
import { parseServerErrors } from 'src/shared/lib/parseServerErrors';
import { ServerErrorCode } from 'src/shared/lib/serverErrorCodes';

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Невалидный email').required('Обязательно'),
    password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательно'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
  });

  const handleSubmit = async (values: typeof initialValues, { setErrors, setSubmitting }: any) => {
    try {
      const token = await registerUser(values.email, values.password);
      dispatch(login(token));
      navigate('/profile');
    } catch (err: any) {
      const server = parseServerErrors(err);
      if (server) {
        const fieldErrors: Record<string, string> = {};
        let modalError: string | null = null;

        server.errors.forEach((e) => {
          if (e.extensions.code === ServerErrorCode.ACCOUNT_ALREADY_EXIST) {
            fieldErrors.email = 'Пользователь уже существует';
          } else if (e.extensions.code === ServerErrorCode.FIELD_REQUIRED && e.fieldName) {
            fieldErrors[e.fieldName] = 'Обязательное поле';
          } else {
            modalError = e.message;
          }
        });

        if (Object.keys(fieldErrors).length > 0) setErrors(fieldErrors);
        if (modalError) setError(modalError);
      } else {
        setError('Ошибка регистрации. Попробуйте позже.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formManager) => <RegisterForm formManager={formManager} />}
      </Formik>

      {error && <ErrorModal message={error} onClose={() => setError(null)} />}
    </>
  );
};

export default RegisterFormContainer;
