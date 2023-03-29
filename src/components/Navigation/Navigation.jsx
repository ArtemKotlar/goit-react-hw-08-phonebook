import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { NAVLINK } from 'components/AuthNav/AuthNav.styled';
export const Navigation = () => {
  const isLogged = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NAVLINK to="/">Home</NAVLINK>
      {isLogged && <NAVLINK to="/contacts">Contacts</NAVLINK>}
    </nav>
  );
};
