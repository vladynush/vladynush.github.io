import React, { FC } from 'react';
import { ProfileFormProps } from '../model/types';
import styles from './ProfileForm.module.css';
import cn from 'clsx';

export const NameField: FC<ProfileFormProps> = ({ formManager }) => {
  const { values, handleChange, handleBlur, errors, touched, submitCount } = formManager;
  const error = (touched.name || submitCount > 0) && errors.name;

  return (
    <div className={styles.field}>
      <label htmlFor="name" className={styles.label}>
        Имя
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn(styles.input, { [styles.inputError]: error })}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
