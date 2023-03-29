import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from 'hooks';
import { ContactsPage } from '../pages/Contacts';
import { HomePage } from '../pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/ErrorPage';
import { RegistrationPage } from 'pages/Register';
import { RestrictedRoute } from './RestrictedRoute';

import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Loyout.jsx/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
};
