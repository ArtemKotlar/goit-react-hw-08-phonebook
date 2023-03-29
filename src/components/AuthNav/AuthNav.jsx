import { AuthNavList, Link, AuthNavItem } from './AuthNav.styled.jsx';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <Link to={'/register'}>Register</Link>
      </AuthNavItem>
      <AuthNavItem>
        <Link to={'/login'}>Log in</Link>
      </AuthNavItem>
    </AuthNavList>
  );
};
