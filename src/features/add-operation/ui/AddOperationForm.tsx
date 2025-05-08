import React from 'react';
import cn from 'clsx';
import { AddOperationFormProps } from '../model/types';
import styles from './AddOperationForm.module.css';

const AddOperationFormComponent: React.FC<AddOperationFormProps> = ({ formManager }) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, submitCount } = formManager;

  const hasError = (field: keyof typeof values) => (touched[field] || submitCount > 0) && Boolean(errors[field]);

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {/* Название */}
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Название
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Что за операция?"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(styles.input, { [styles.error]: hasError('title') })}
        />
        {hasError('title') && <div className={styles.error}>{errors.title}</div>}
      </div>

      {/* Сумма */}
      <div className={styles.field}>
        <label htmlFor="amount" className={styles.label}>
          Сумма
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="0"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(styles.input, { [styles.error]: hasError('amount') })}
        />
        {hasError('amount') && <div className={styles.error}>{errors.amount}</div>}
      </div>

      {/* Категория */}
      <div className={styles.field}>
        <label htmlFor="category" className={styles.label}>
          Категория
        </label>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="Продукты, Транспорт..."
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(styles.input, { [styles.error]: hasError('category') })}
        />
        {hasError('category') && <div className={styles.error}>{errors.category}</div>}
      </div>

      {/* Дата */}
      <div className={styles.field}>
        <label htmlFor="date" className={styles.label}>
          Дата
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(styles.input, { [styles.error]: hasError('date') })}
        />
        {hasError('date') && <div className={styles.error}>{errors.date}</div>}
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {values.title ? 'Сохранить' : 'Добавить'}
      </button>
    </form>
  );
};

export const AddOperationForm = React.memo(AddOperationFormComponent);
