import { useSelector } from 'react-redux';
import { getContacts, selectError, selectIsLoading } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from '../ContactsItem/ContactsItem';


const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { items } = useSelector(getContacts);

  return (
    <ContactListWrap>
      {isLoading && 'Is Loading ...'}
      {items && !isLoading && (
        <PhonebookList>
          {filteredContacts.map(contact => (
            <PhonebookItem key={contact.id}>
              <ContactsItem contact={contact}></ContactsItem>
            </PhonebookItem>
          ))}
        </PhonebookList>
      )}
      {error && <b>{error}</b>}
    </ContactListWrap>
  );
};

export default ContactList;
