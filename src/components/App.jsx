import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar } from './AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PhoneBook } from './App.styled';

import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <PhoneBook>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        <Route
          path="login"
          element={isLoggedIn ? <Navigate replace to="/" /> : <LoginPage />}
        />

        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </PhoneBook>
  );
};
