import { FormProps } from 'src/shared/types/FormProps';

export interface OperationFormValues {
  title: string;
  amount: number;
  category: string;
  date: string;
}

export type AddOperationFormProps = FormProps<OperationFormValues>;
