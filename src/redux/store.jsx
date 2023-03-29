import { configureStore, } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authslise';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authReducer),
  },middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);