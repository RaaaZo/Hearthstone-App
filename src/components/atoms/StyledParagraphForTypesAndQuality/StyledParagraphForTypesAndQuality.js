import styled from "styled-components";
import Paragraph from "../Paragraph/Paragraph";

const StyledParagraphForTypesAndQuality = styled(Paragraph)`
  text-align: center;
  max-width: 1280px;
  margin: 30px auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;

  @media (min-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
  @media (min-width: 900px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`;

export default StyledParagraphForTypesAndQuality;
