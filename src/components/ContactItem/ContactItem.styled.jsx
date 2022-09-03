import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #888;
`;
export const Button = styled.button`
  margin-left: 10px;
  padding: 0 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  height: 40px;
  line-height: 40px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: #385898;
  background-color: #e7f3ff;
  cursor: pointer;
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: end;
`;
