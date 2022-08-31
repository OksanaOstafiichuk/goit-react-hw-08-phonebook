import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './App.styled';
import { AppBar } from './AppBar/AppBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes';

export const App = () => {
  return (
    <PhoneBook>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
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
