import styled from 'styled-components';

const Container = styled.div`
  color: white;
  text-align: center;
  width: 200px;
  background: rgba(92, 41, 147, 0.28);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  transition: all 0.5s;
  padding: 5px;
  margin: 5px;

  #album-name {
    font-size: 1.1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a img {
    width: 150px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default Container;
