import { Box } from 'components/Box';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Label, Btn, Input } from '../LoginForm/LoginForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handelSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
        <Formik initialValues={initialValues} onSubmit={handelSubmit}>
          <Form>
            <div>
              <Label htmlFor="name">User name</Label>
              <Input type="text" name="name" id="name" />

              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" id="email" />

              <Label htmlFor="password">Password</Label>
              <Input type="text" name="password" id="password" />

              <Btn type="submit">Registration</Btn>
            </div>
          </Form>
        </Formik>
      </div>
    </Box>
  );
};
