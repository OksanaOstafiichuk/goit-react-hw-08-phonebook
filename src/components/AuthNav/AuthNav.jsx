import { Link, ListAuth, ItemAuth, AuthMenu } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthMenu>
      <ListAuth>
        <ItemAuth>
          <Link to="login">Log in</Link>
        </ItemAuth>
        <ItemAuth>
          <Link to="register">Sign in</Link>
        </ItemAuth>
      </ListAuth>
    </AuthMenu>
  );
};
