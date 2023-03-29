import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import {
  Container,
  Section,
  BlockForm,
  Button,
  Label,
  Input,
} from '../App.styled';

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
    <Container>
      <Section>
        <Formik initialValues={initialValues} onSubmit={handelSubmit}>
          <Form>
            <BlockForm>
              <Label htmlFor="name">User name</Label>
              <Input type="text" name="name" id="name" />

              <Label htmlFor="email">Email</Label>
              <Input type="text" name="email" id="email" />

              <Label htmlFor="password">Password</Label>
              <Input type="text" name="password" id="password" />

              <Button type="submit">Registration</Button>
            </BlockForm>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
};