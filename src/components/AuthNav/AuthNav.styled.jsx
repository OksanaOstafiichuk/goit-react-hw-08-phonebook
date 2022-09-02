import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;

  &:hover {
    background-color: #b0ceed;
    transition: all 0.3s ease;
  }
`;

export const ListAuth = styled.ul`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const ItemAuth = styled.li`
  margin: 0 10px;
`;

export const AuthMenu = styled.li`
  margin-left: auto;
`;
