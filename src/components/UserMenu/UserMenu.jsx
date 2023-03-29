import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operation';
import { Button } from '../App.styled';
import { UserBlock, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBlock>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserBlock>
  );
};