import styled from 'styled-components';

export const Home = styled.div`
  background-image: url(https://m.media-amazon.com/images/I/61Gt3SUZvwL._AC_SL1100_.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1100px;
`;

export const Context = styled.div`
  margin: 300px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0 auto;
  background-color: #e7f3ff;
  padding: 40px 20px;
  border-radius: 6px;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: #385898;
`;

export const ButtonHome = styled.button`
  padding: 20px 20px;
  border: none;
  border-radius: 6px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 600;
  color: #385898;
  background-color: #e7f3ff;
  margin-left: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #385898;
  }
`;
