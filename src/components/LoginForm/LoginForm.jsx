import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Container, Section, Button, BlockForm } from '../App.styled';
import { Label, Input } from '../App.styled';

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
    <Container>
      <Section>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <BlockForm>
              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" id="email" />

              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" />

              <Button type="submit">Login</Button>
            </BlockForm>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
};
