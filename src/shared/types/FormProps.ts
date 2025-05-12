import type { FormikContextType } from 'formik';

export interface FormProps<T> {
  formManager: FormikContextType<T>;
}
