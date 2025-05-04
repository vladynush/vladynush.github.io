import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store/store';
import Layout from 'src/shared/ui/Layout/Layout';
import styles from './ProfilePage.module.css';
import { EditableField } from 'src/shared/ui/EditableField/EditableField';
import { updateProfileFieldApi } from 'src/shared/api/otus';
import { updateProfileField } from 'src/entities/Profile/model/profileSlice';

const ProfilePage: React.FC = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  if (!profile) {
    return <Layout>Профиль не найден</Layout>;
  }

  const handleSave = async (field: 'email' | 'commandId', value: string) => {
    await updateProfileFieldApi(field, value);
    if (field === 'email') dispatch(updateProfileField({ key: 'email', value }));
    if (field === 'commandId') dispatch(updateProfileField({ key: 'commandId', value }));
  };
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Профиль</h1>

        <EditableField label="Email" value={profile.email} onSave={(newValue) => handleSave('email', newValue)} />
        <EditableField
          label="ID команды"
          value={profile.commandId}
          onSave={(newValue) => handleSave('commandId', newValue)}
        />

        <div className={styles.field}>
          <label className={styles.label}>Дата регистрации</label>
          <div>{new Date(profile.signUpDate).toLocaleString('ru-RU')}</div>
        </div>

        {profile.isAdmin && <p className={styles.admin}>Вы администратор</p>}
      </div>
    </Layout>
  );
};
export default ProfilePage;
