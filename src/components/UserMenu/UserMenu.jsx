import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const email = useSelector(state => state.user.email);
  console.log(email);
  return (
    <>
      <p>Hello, {email}</p>
      <button type="button">Log out</button>
    </>
  );
};
