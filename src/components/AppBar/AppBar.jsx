import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export default function AppBAr() {
  const logIN = useSelector(getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {logIN ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
