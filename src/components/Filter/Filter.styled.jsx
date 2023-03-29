import styled from 'styled-components';

export const Wraper = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 280px;
  outline: transparent;
  padding: 10px;
  margin: 0;
  border-radius: 3px;
  border: 1px solid black;
  box-shadow: ${p => p.theme.shadows.shadow};
`;
