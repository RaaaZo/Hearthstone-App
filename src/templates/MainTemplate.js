import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Navbar from 'components/organisms/Navbar/Navbar';
import Modal from 'components/atoms/Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'ducks/actions/ModalActions';

const MainTemplate = ({ children }) => {
  const isOpen = useSelector((state) => state.modalReducer.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isOpen ? <Modal onClick={() => dispatch(closeModal())} /> : null}
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
