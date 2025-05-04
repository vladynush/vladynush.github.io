import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { clearProfile, setProfile } from 'src/entities/profile/model/profileSlice';

const ProfileInitializer: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      const isAdmin = token === 'admin-token';

      dispatch(
        setProfile({
          name: isAdmin ? 'Администратор' : 'Пользователь',
          email: isAdmin ? 'admin@site.com' : 'user@site.com',
          isAdmin,
        })
      );
    } else {
      dispatch(clearProfile());
    }
  }, [token]);

  return null;
};

export default ProfileInitializer;
