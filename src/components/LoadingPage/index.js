import React from 'react';
import Container from './styles';
import loading from '../../images/loading.svg';

class Loading extends React.Component {
  render() {
    return (
      <Container>
        <img alt="loading" src={ loading } />
        <p>Carregando...</p>
      </Container>
    );
  }
}

export default Loading;
