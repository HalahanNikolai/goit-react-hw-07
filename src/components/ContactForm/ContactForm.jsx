import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { FormWrap, InputContainer, ContactLabel, ContactInput, AddContactButton } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const formName = event.target.elements.name.value;
    const formNumber = event.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ phone }) => phone === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, phone: formNumber }));
    form.reset();
  };

  return (
    <FormWrap type="submit" onSubmit={handleSubmitForm}>
      <InputContainer>
        <ContactLabel>Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputContainer>
      <InputContainer>
        <ContactLabel>Number</ContactLabel>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainer>
      <AddContactButton type="submit">Add contact</AddContactButton>
    </FormWrap>
  );
};

export default ContactForm;
