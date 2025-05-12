import { FormProps } from 'src/shared/types/FormProps';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues extends LoginFormValues {
  confirmPassword: string;
}

export type LoginFormProps = FormProps<LoginFormValues>;
export type RegisterFormProps = FormProps<RegisterFormValues>;
