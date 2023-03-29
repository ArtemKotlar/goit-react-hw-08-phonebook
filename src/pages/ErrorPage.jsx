import { Container, Section } from '../components/App.styled';
import { ErrorPage, ErrorPageText, Link } from './pages.styled';

export const NotFoundPage = () => {
  return (
    <Container>
      <Section>
        <ErrorPage>
          <ErrorPageText>OOOOOOpppssssssssssss!</ErrorPageText>
          <ErrorPageText>There is no such page</ErrorPageText>
          <Link to={'/'}>Phone book</Link>
        </ErrorPage>
      </Section>
    </Container>
  );
};
