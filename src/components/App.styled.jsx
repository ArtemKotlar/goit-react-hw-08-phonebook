import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Section = styled.section`
  padding: 40px 0;
`;

export const Phonebook = styled.div`
  margin: 30px;
  padding: 30px 80px;
  width: 400px;
  background-color: #54767f;
  border-radius: 3px;
`;

export const Title = styled.h2`
  color: #004971;
  font-size: 26px;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  width: fit-content;
  background-color: var(--title-text-color);
  color: var(--accent-second);
  font-size: 16px;
  font-weight: 500;
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
  border: solid 2px var(--title-text-color);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--primary-white);
    color: var(--primary-text-color);
  }
`;

export const BlockForm = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center; ;
`;

export const Label = styled.label`
  color: var(--primary-text-color);
`;

export const Input = styled(Field)`
  width: 100%;
  height: 25px;
  margin: 10px 0;
  outline: transparent;
  border: 2px solid var(--primary-text-color);
  border-radius: 5px;
`;