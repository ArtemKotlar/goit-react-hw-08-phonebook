import styled from 'styled-components';

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterInput = styled.input`
  width: 200px;
  height: 25px;
  margin: 10px 0;
  outline: transparent;
  border: 2px solid var(--primary-text-color);
  border-radius: 5px;
`;