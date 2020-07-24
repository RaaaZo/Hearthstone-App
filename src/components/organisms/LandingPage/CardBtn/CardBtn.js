import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import Image from 'components/atoms/Image/Image';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 10px;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.darkBrown};
  margin: 30px 0;
  border-radius: 15px;
`;

const StyledSecondImg = styled(Image)`
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;
const StyledFirstImg = styled(Image)`
  max-width: 60%;
`;

const StyledBtn = styled(Button)`
  text-decoration: none;
  z-index: 999;
`;

const CardBtn = () => {
  return (
    <Wrapper>
      <StyledFirstImg
        src='http://wow.zamimg.com/images/hearthstone/cards/enus/animated/OG_133_premium.gif'
        alt=''
      />
      <StyledBtn as={Link} to='/home'>
        Przejdź do strony głównej
      </StyledBtn>
      <StyledSecondImg
        src='https://wow.zamimg.com/images/hearthstone/backs/animated/Card_Back_Default.gif'
        alt=''
      />
    </Wrapper>
  );
};

export default CardBtn;
