import { Box } from 'components/Box';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Label, Btn, Input } from './LoginForm.styled';


const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Box
      p={4}
      m="auto"
      bg="primary"
      width=" 300px"
      display="flex"
      flexDirection="column"
      textAlign="center"
      borderRadius="normal"
      border="normal"
      boxShadow="shadow"
    >
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" id="email" />

              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" />

              <Btn type="submit">Login</Btn>
            </div>
          </Form>
        </Formik>
      </div>
    </Box>
  );
};
