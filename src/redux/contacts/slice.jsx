import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = () => {};
const handleRejected = () => {};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handleRejected,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
