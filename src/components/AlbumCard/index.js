import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from './styles';

class AlbumCard extends React.Component {
  render() {
    const { artist } = this.props;
    const { collectionId, artworkUrl100, artistName, collectionName } = artist;
    return (
      <Container>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          <img alt={ `Pic album ${collectionName} ` } src={ artworkUrl100 } />
          <h2 id="album-name" data-testid="album-name">{collectionName}</h2>
          <p id="artist-name" data-testid="artist-name">{artistName}</p>
        </Link>
      </Container>
    );
  }
}

AlbumCard.propTypes = {
  artist: PropTypes.objectOf().isRequired,
};

export default AlbumCard;
