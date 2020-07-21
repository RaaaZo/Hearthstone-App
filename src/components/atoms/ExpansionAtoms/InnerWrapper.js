import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
  margin: 20px auto;
  padding: 12px 20px;
  cursor: pointer;

  @media (min-width: 1024px) {
    transform: scale(0.98);
    transition: transform 0.15s linear;
  }

  &:hover {
    transform: scale(1);
  }
`;

export default InnerWrapper;
