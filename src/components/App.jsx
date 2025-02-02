import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContatctsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebook">
      <ContactForm></ContactForm>
      <h2 style={{
        margin: '0 auto',
        padding: '20px 0',
        textAlign: 'center',
      }}>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Section>
  );
};

export default App;
