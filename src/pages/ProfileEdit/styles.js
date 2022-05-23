import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(118.98deg, rgb(237, 70, 144, 0.7) -2.11%, rgb(85, 34, 204, 0.7) 63.58%), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;


  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 500px;
    background: rgba(92, 41, 147, 0.38);
    backdrop-filter: blur(6px);
    border-radius: 8px;
    transition: all 0.5s;
    max-width: 500px;
    width: 100%;
    margin: auto;
  }

  label {
    font-size: 1.5rem;
    width: 80%;
  }

  input {
    display: block;
    margin: 10px 0;
    font-size: 20px;
    border: none;
    outline: none;
    height: 2rem;
    border-radius: 4px;
    color: rgb(0, 0, 0, 0.8);
    width: 100%;
  }

  button {
    margin-top: 30px;
    font-size: 1.1rem;
    width: 60%;
    height: 2.5rem;
    border-radius: 8px;
    border: none;
    color: white;
    background: rgb(255, 49, 141, 0.6);
    transition: all 0.5s;
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

  @media screen and (max-width: 500px) {
    form {
      width: 100%;
      height: 100%;
      background: none;
      backdrop-filter: none;
    }

    button {
      width: 80%;
    }

    label {
      font-size: 1.1rem;
    }
  }
`;

export default Container;
