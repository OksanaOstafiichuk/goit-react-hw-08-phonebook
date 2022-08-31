import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const token = useSelector(state => state.token);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
