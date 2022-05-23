import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  color: white;
  width: 100vw;
  height: 100vh;
  font-size: 2rem;
  background: linear-gradient(118.98deg, rgb(237, 70, 144, 0.7) -2.11%, rgb(85, 34, 204, 0.7) 63.58%), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
  transition: all 0.5;

  img {
    padding: 0;
    margin: 0;
    margin-top: 100px;
    width: 150px;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default Container;
