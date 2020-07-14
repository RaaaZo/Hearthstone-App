import React from "react";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import heroImg from "Assets/images/ExpansionsHero.jpg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  background-image: url(${heroImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 1px solid ${({ theme }) => theme.darkBrown};
  border-radius: 15px;

  @media (min-width: 632px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
  @media (min-width: 1360px) {
    height: 700px;
  }
  @media (min-width: 1600px) {
    height: 830px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  margin-top: 30px;
  padding: 40px 10%;
  text-align: center;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 40px 15%;
  }
`;

const LandingPageDesc = () => {
  return (
    <Wrapper>
      <HeroWrapper />
      <StyledParagraph>Podział kart na dodatki :</StyledParagraph>
    </Wrapper>
  );
};

export default LandingPageDesc;
