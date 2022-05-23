import React from 'react';
import Container from './styles';

class UserCardHeader extends React.Component {
  render() {
    const { dados } = this.props;
    const { image, name } = dados;
    return (
      <Container>
        <img alt={ name } src={ image } />
        <p>{name}</p>
      </Container>
    );
  }
}

export default UserCardHeader;
