import { FormProps } from 'src/shared/types/FormProps';

export interface ProfileFormValues {
  name: string;
  about: string;
}

export type ProfileFormProps = FormProps<ProfileFormValues>;
