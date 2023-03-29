import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';

import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { Container, Section, Title } from '../components/App.styled';
import { ContactsBlock } from './pages.styled';
import Forms from 'components/Forms/Forms';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Section>
        <ContactsBlock>
          <Title>Phonebook</Title>
          <Forms />

          <Title>Contacts</Title>
          <Filter />
        </ContactsBlock>
        {<ContactList />}
      </Section>
    </Container>
  );
};
