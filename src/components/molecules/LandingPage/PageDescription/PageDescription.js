import React from "react";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import heroImg from "Assets/images/LandingHero.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  max-width: 1280px;
`;

const HeroWrapper = styled.div`
  display: flex;
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
  max-width: 1280px;
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
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, itaque
        veritatis! Temporibus eum, vel iusto deserunt, repudiandae inventore hic
        assumenda ratione pariatur quas facere quo! Sint nostrum blanditiis
        dolorum sit labore veniam hic, temporibus ut natus commodi aliquam ad
        corporis cum amet! Eos sunt labore, inventore maxime natus voluptatibus
        aspernatur illo sed ut delectus nulla consectetur cumque unde nobis
        excepturi.
      </StyledParagraph>
    </Wrapper>
  );
};

export default LandingPageDesc;
