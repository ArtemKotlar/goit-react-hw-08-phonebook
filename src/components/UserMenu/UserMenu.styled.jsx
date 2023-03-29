import styled from 'styled-components';

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const UserName = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
`;