import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;

export default Wrapper;
