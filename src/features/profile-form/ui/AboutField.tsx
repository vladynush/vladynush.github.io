import React, { FC } from 'react';
import { ProfileFormProps } from '../model/types';
import styles from './ProfileForm.module.css';
import cn from 'clsx';

export const AboutField: FC<ProfileFormProps> = ({ formManager }) => {
  const { values, handleChange, handleBlur, errors, touched, submitCount } = formManager;
  const error = (touched.about || submitCount > 0) && errors.about;

  return (
    <div className={styles.field}>
      <label htmlFor="about" className={styles.label}>
        О себе
      </label>
      <textarea
        id="about"
        name="about"
        rows={4}
        value={values.about}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn(styles.input, { [styles.inputError]: error })}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
