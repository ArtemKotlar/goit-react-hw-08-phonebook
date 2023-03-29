import { WRAPPER } from './UserMenu.styled';
import { getUserName } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <WRAPPER>
      <p>Hello,{name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WRAPPER>
  );
};
