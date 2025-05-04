import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { clearProfile, setProfile } from 'src/entities/Profile/model/profileSlice';
import { clearOperations } from 'src/entities/Operation/model/operationsSlice';

const ProfileInitializer: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!token) {
      dispatch(clearProfile());
      dispatch(clearOperations());
    } else {
      const isAdmin = token === 'admin-token';
      dispatch(
        setProfile({
          name: isAdmin ? 'Администратор' : 'Пользователь',
          email: isAdmin ? 'admin@site.com' : 'user@site.com',
          isAdmin,
        })
      );
    }
  }, [token]);

  return null;
};

export default ProfileInitializer;
