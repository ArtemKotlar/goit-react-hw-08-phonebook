import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../../redux/contacts/selectors';
import { Wraper, Btn } from './Contacts.styled';
import { deleteContact } from 'redux/contacts/options';

const ContactsList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  return (
    <>
      <Wraper>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Btn>
          </li>
        ))}
      </Wraper>
    </>
  );
};

export default ContactsList;
