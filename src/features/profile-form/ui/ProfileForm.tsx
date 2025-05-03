import React, { FC } from 'react';
import { ProfileFormProps } from '../model/types';
import { NameField } from './NameField';
import { AboutField } from './AboutField';
import styles from './ProfileForm.module.css';

export const ProfileForm: FC<ProfileFormProps> = ({ formManager }) => {
  const { handleSubmit, isSubmitting } = formManager;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <NameField formManager={formManager} />
      <AboutField formManager={formManager} />
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        Сохранить
      </button>
    </form>
  );
};
