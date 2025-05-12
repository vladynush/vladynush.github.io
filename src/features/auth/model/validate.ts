import { LoginFormValues, RegisterFormValues } from './types';

export function validateLoginForm(values: LoginFormValues) {
  const errors: Partial<Record<keyof LoginFormValues, string>> = {};
  if (!values.email) errors.email = 'Обязательное поле';
  if (!values.password) errors.password = 'Обязательное поле';
  return errors;
}

export function validateRegisterForm(values: RegisterFormValues) {
  const errors: Partial<Record<keyof RegisterFormValues, string>> = {};
  if (!values.email) errors.email = 'Обязательное поле';
  if (!values.password) errors.password = 'Обязательное поле';
  if (!values.confirmPassword) errors.confirmPassword = 'Повторите пароль';
  else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Пароли не совпадают';
  }
  return errors;
}
