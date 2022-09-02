import styled from 'styled-components';

export const UserItem = styled.li`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.p`
  margin: 10px 70px 10px 0;
  color: #0d6efd;
`;

export const Logout = styled.button`
  padding: 10px 15px;

  border: none;
  background-color: transparent;
  color: #0d6efd;

  &:hover {
    border-radius: 5px;
    background-color: #b0ceed;
    transition: all 0.3s ease;
    color: #0a58ca;
  }
`;
