import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(118.98deg, rgb(237, 70, 144, 0.7) -2.11%, rgb(85, 34, 204, 0.7) 63.58%), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

const ContainerMusics = styled.div`
  max-width: 900px;
  width: 90%;
  height: 700px;
  overflow-y: scroll;
  padding: 0 5px;
  margin: auto;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 12px; 
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgb(237, 70, 144, 0.7); 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(85, 34, 204, 0.7);
    border-radius: 20px;
  }
`;

export { Container, ContainerMusics };
