import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavigateItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--primary-text-color);
  font-weight: 500;
  border: solid 2px var(--primary-text-color);
  border-radius: 5px;
  padding: 5px;
  &:hover,
  &:focus {
    background-color: var(--title-text-color);
    color: var(--accent-color);
  }
`;
