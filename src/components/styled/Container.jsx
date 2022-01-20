import styled from 'styled-components';

const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

export default Container;
