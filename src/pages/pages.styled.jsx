import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BlockHome = styled.div`
  text-align: center;
`;

export const TitleHome = styled.h1`
  color: var(--primary-text-color);
  margin-bottom: 20px;
`;

export const TextHome = styled.p`
  color: var(--primary-text-color);
`;
export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorPageText = styled.p`
  color: var(--primary-text-color);
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ContactsBlock = styled.div`
  text-align: center;
`;

export const Link = styled(NavLink)`
  width: fit-content;
  text-decoration: none;
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
