import styled from 'styled-components';

export const Wraper = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 20px auto 0 auto;
`;

export const Btn = styled.button`
  border: 1px solid black;
  border-radius: 2px;
  background-color: #ffd4d4fa;
  color: black;
  padding: 3px 10px;
  margin: auto;
  margin-left: 15px;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffa3a3;
  }
`;
