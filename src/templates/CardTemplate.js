import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from 'components/organisms/CardDetails/CardDetails';
import Wrapper from 'components/atoms/Wrapper/Wrapper';

const CardTemplate = ({ children, cardBacks }) => {
  const isOpen = useSelector((state) => state.modalReducer.isOpenDetailsModal);

  return (
    <Wrapper>
      {isOpen && <CardDetails cardBacks={cardBacks} />}
      {children}
    </Wrapper>
  );
};

export default CardTemplate;
