import { Container, Section } from '../components/App.styled';
import { BlockHome, TitleHome, TextHome } from './pages.styled';
export const HomePage = () => {
  return (
    <Container>
      <Section>
        <BlockHome>
          <TitleHome>Your phonebook application</TitleHome>
          <TextHome>
            Here you can store your contacts. It is convenient to add, store,
            and delete the lists you need.
          </TextHome>
        </BlockHome>
      </Section>
    </Container>
  );
};
