import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  width: 280px;
  border: none;
  outline: transparent;
  padding: 10px;
  margin: 0;
  border-radius: 3px;
`;

export const Title = styled.p`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  display: block;
  width: 150px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #5ceb39b2;
  color: black;
  padding: 7px 14px;
  margin: auto;
  margin-top: 15px;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffa3a3;
  }
`;
