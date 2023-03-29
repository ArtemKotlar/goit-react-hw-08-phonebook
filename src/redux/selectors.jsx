export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.filter;
export const getIsLoading= state => state.contacts.isLoading
export const getError= state => state.contacts.error
export const getStatusFilter = state => state.filters.status;

export const getFilterContacts = state =>
  state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase())
  );
