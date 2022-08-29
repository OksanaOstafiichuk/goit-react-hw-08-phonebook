import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export const AppBar = () => {
  return (
    <div style={styles.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </div>
  );
};
