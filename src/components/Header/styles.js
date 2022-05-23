import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 10px;

  img {
    flex-basis: 200px;
    flex-shrink: 5;
    margin: 0 5px;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  nav {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background: rgba(92, 41, 147, 0.38);
    backdrop-filter: blur(6px);
    margin: 10px 0;
  }

  span {
    display: flex;
    align-items: center;
    height: 40px;
  }

  nav a {
    text-decoration: none;
    color: white;
    margin-left: 5px;
  }

  nav a:hover {
    color: rgb(237, 70, 144, 0.7);
  }
`;

export default Container;
