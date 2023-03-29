import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Forms from './Forms/Forms';
import { Box } from './Box';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/options';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Box
      backgroundImage="url(https://kartinkin.net/uploads/posts/2021-07/1625166379_38-kartinkin-com-p-fon-gori-krasivie-foni-42.jpg)"
      pt={2}
      pb={8}
    >
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms />
      {loading && !error && <Loader />}
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default App;
