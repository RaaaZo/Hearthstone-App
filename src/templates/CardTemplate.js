import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from 'components/organisms/CardDetails/CardDetails';

const CardTemplate = ({ children }) => {
  const isOpen = useSelector((state) => state.modalReducer.isOpenDetailsModal);

  return (
    <>
      {isOpen && <CardDetails />}
      {children}
    </>
  );
};

export default CardTemplate;
