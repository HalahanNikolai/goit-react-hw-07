import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { createSelector } from 'reselect';

export const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfieldGetAllContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const handleFulfieldAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfieldDeleteContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== action.payload.id)

};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfieldGetAllContacts)
      .addCase(addContact.fulfilled, handleFulfieldAddContact)
      .addCase(deleteContact.fulfilled, handleFulfieldDeleteContact)
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleRejected(state, action.payload);
        }
      );
  },
});

export const selectContactsList = state => state.contacts.items;
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

// console.log()

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log('contacts2:', contacts.items)
    console.log('filter2:', filter)
    if (filter > 0) {
      return contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return contacts.items
  }
);

export const contactsReducer = contactsSlice.reducer;
