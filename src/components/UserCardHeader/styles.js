import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 1px solid white;
  border-radius: 40px;
  margin: 0 5px;
  max-width: 180px;
  width: 100%;

  img {
    max-width: 45px;
    width: 50%;
    border-radius: 50px;
    margin-right: 5px;
  }

  p{
    margin: 0;
    font-size: 1em;
  }

  @media screen and (max-width: 500px) {
    p{
    font-size: 0.8em;
    }
  }
`;

export default Container;
