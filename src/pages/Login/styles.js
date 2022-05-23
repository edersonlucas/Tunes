import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(118.98deg, rgb(237, 70, 144, 0.7) -2.11%, rgb(85, 34, 204, 0.7) 63.58%), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470');
  background-repeat: no-repeat;
  background-size: cover;
;

  img {
    margin: 3% auto;
    width: 290px;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    background: rgba(92, 41, 147, 0.38);
    backdrop-filter: blur(6px);
    border-radius: 8px;
    flex-direction: column;
    transition: all 0.5s;
  }

  label {
    font-size: 25px;
  }

  input {
    display: block;
    margin-top: 15px;
    font-size: 20px;
    border: none;
    outline: none;
    height: 2rem;
    border-radius: 4px;
    color: rgb(0, 0, 0, 0.8);
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

    img {
      position: absolute;
      margin-top: 100px;
      top: 0;
      z-index: 2;
    }

    form {
      width: 100%;
      height: 100%;
    }
  }

`;

export default Container;
