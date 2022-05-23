import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
      118.98deg,
      rgb(237, 70, 144, 0.7) -2.11%,
      rgb(85, 34, 204, 0.7) 63.58%
    ),
    url("https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  min-height: 100vh;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 8px;
    margin: auto;
    padding: 0 1rem;
    max-width: 500px;
    width: 100%;
  }

  input {
    font-size: 100%;
    height: 2.3rem;
    border: none;
    outline: none;
    border-radius: 3px;
    margin-right: 10px;
    color: rgb(0, 0, 0, 0.8);
    padding: 0.2rem;
    width: 100%;
  }

  button {
    font-size: 100%;
    height: 2.4rem;
    border-radius: 3px;
    border: none;
    color: white;
    background: rgb(255, 49, 141, 0.6);
    transition: all 0.5s;
    flex-basis: 100px;
  }

  button:hover {
    cursor: pointer;
    background: rgb(255, 49, 141, 1);
  }

  button:active {
    opacity: 0.8;
  }

  button:disabled {
    cursor: default;
    background: gray;
  }
`;

const ContainerAlbuns = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px 10px;
    width: 80%;

  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;

const ContainerResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { ContainerResults, Container, ContainerAlbuns };
