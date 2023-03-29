import { useAuth } from 'hooks/useAuth';
import { NavigateList, NavigateItem, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigateList>
        <NavigateItem>
          <Link to={'/'}>Home</Link>
        </NavigateItem>
        {isLoggedIn && (
          <NavigateItem>
            <Link to={'/contacts'}>Contacts</Link>
          </NavigateItem>
        )}
      </NavigateList>
    </nav>
  );
};
