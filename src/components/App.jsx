import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/options';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/Layout/Layout';
import Home from 'pages/Home/Home';
import { PublickRoute } from './PublickRoute';
import { Register } from 'pages/Register/Register';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { ContactPage } from 'pages/ContactPage/ContactPage';
import { NotFound } from 'pages/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublickRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <Register />
              </PublickRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublickRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublickRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
