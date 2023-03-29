import { Container } from 'components/App.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';
import { Header, NavBlock } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    
    <Header>
      <Container>
        <NavBlock>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </NavBlock>
      </Container>
    </Header>
  );
};