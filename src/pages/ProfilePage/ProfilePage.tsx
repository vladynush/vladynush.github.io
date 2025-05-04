import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store';
import Layout from 'src/shared/ui/Layout/Layout';
import Input from 'src/shared/ui/Input/Input';
import Button from 'src/shared/ui/Button/Button';
import styles from './ProfilePage.module.css';

export const ProfilePage: FC = () => {
  const profile = useSelector((state: RootState) => state.profile);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма профиля не сохраняется — данные фейковые');
  };

  if (!profile) {
    return <Layout>Профиль не найден</Layout>;
  }

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
