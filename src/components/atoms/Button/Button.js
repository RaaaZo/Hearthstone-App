import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  padding: 15px;
  text-align: center;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme }) => theme.darkModeTxt};
  background-color: ${({ theme: { purpleBtnGradient } }) =>
    purpleBtnGradient.backgroundColor};
  background-image: ${({ theme: { purpleBtnGradient } }) =>
    purpleBtnGradient.backgroundImage};
  border: none;
  border-radius: 15px;

  @media (min-width: 425px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 20px 30px;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 20px 50px;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    padding: 25px 80px;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    padding: 20px 120px;
  }

  ${({ moreBtn }) =>
    moreBtn &&
    css`
      border: 3px solid ${({ theme }) => theme.darkBrown};
      background-color: ${({ theme }) => theme.normalModeBackground};
      color: ${({ theme }) => theme.darkBrown};
      background-image: none;
      padding: 20px 30px;

      @media (min-width: 768px) {
        padding: 20px 60px;
      }
    `}

  ${({ backBtn }) =>
    backBtn &&
    css`
      border: 2px solid #5d737e;
      background-color: ${({ theme }) => theme.normalModeBackground};
      color: #5d737e;
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.light};
      background-image: none;
      padding: 15px 20px;
    `}

    @media (min-width: 425px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    padding: 15px 20px;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 20px 30px;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    padding: 20px 40px;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    padding: 20px 50px;
  }
`;

export default Button;
