import { createSelector } from "@reduxjs/toolkit";

export const selectContactsList = state => state.contacts.items;
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//     [selectContactsList, getFilter],
//     (items, filter) => {
//         return items.filter(contact =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     }
// );