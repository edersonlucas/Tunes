import React from 'react';
import Container from './styles';
import loading from '../../images/loadingCircle.svg';

class Loading extends React.Component {
  render() {
    return (
      <Container>
        <img alt="loading circle" src={ loading } />
      </Container>
    );
  }
}

export default Loading;
