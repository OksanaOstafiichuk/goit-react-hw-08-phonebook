import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { ContactForm } from '../../components/ContactForm/ContactForm';

import { Overlay, ModalWindow } from './ModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalW = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseOnEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseOnEscape);

    return () => {
      window.removeEventListener('keydown', handleCloseOnEscape);
    };
  }, [onClose]);

  const handleCloseOnOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseOnOverlay}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};
