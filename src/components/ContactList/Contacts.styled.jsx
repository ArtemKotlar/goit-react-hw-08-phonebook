import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0 40px;
  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Name = styled.span`
  &:first-child {
    margin-right: 15px;
  }
  color: #004971;
  font-size: 16px;
  font-weight: 600;
`;

export const NotFound = styled.p`
  text-align: center;
  color: var(--primary-text-color);
  font-weight: 500;
`;