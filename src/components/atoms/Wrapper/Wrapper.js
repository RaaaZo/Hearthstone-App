import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  @media (min-width: 1320px) {
    margin: 0 auto;
  }
`;

export default Wrapper;
