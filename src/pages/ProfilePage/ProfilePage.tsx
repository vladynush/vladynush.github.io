// src/pages/ProfilePage/index.tsx
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from 'src/shared/ui/Layout/Layout';
import Input from 'src/shared/ui/Input/Input';
import Button from 'src/shared/ui/Button/Button';
import styles from './ProfilePage.module.css';

export const ProfilePage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
    navigate('/profile');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Профиль</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Имя
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <Button type="submit" className={styles.submit}>
            Сохранить
          </Button>
        </form>
      </div>
    </Layout>
  );
};
export default ProfilePage;
