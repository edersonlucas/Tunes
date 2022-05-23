import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';
import Container from './styles';

class MusicCard extends React.Component {
  state = {
    loading: false,
    checked: false,
  };

  componentDidMount() {
    const { music, favoriteSongs } = this.props;
    this.songsFavorite(favoriteSongs, music.trackId);
  }

  songsFavorite = (songs, id) => {
    if (songs.some((song) => song.trackId === id)) {
      this.setState({
        checked: true,
      });
    }
  }

  handleClick = async (music) => {
    const { callback } = this.props;
    this.setState({ loading: true }, async () => {
      const { checked } = this.state;
      if (checked) {
        await removeSong(music);
        if (callback)callback();
      } else {
        await addSong(music);
      }
      this.setState((prevState) => ({ checked: !prevState.checked, loading: false }));
    });
  };

  render() {
    const { loading, checked } = this.state;
    const { music } = this.props;
    const { trackName, previewUrl, trackId } = music;
    return (
      <Container>
        <p>{trackName}</p>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
          </audio>
          <label data-testid={ `checkbox-music-${trackId}` } htmlFor={ trackName }>
            Favorita
            <input
              checked={ checked }
              onChange={ () => this.handleClick(music) }
              id={ trackName }
              type="checkbox"
            />
          </label>
        </div>
        {loading && <Loading />}
      </Container>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.objectOf().isRequired,
  favoriteSongs: PropTypes.objectOf().isRequired,
  callback: PropTypes.func.isRequired,
};

export default MusicCard;
