import { NAVLINK } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NAVLINK to="/register">Register</NAVLINK>
      <NAVLINK to="/login">Log In</NAVLINK>
    </div>
  );
};
