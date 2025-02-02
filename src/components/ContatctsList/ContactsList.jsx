import { useSelector } from 'react-redux';
import { getContacts, getFilter, selectError, selectIsLoading } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from '../ContactsItem/ContactsItem';


const ContactList = () => {

  const contacts = useSelector(selectFilteredContacts);
  console.log("conactList.jsx:", contacts)

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    : items;

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
