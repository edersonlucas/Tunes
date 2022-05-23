import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Container from './styles';
import iconPlay from '../../images/playerMusicIcons/play.svg';
import iconPause from '../../images/playerMusicIcons/pause.svg';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';

class PlayerMusic extends React.Component {
  state = {
    totalDuration: '00:00',
    duration: '00:00',
    play: false,
    favorite: false,
    loading: false,
  };

  componentDidMount() {
    const { music, favoriteSongs } = this.props;
    this.songsFavorite(favoriteSongs, music.trackId);
  }

  songsFavorite = (songs, id) => {
    if (songs.some((song) => song.trackId === id)) {
      this.setState({
        favorite: true,
      });
    }
  }

  handleClickFavorite = async (music) => {
    this.setState({ loading: true }, async () => {
      const { favorite } = this.state;
      if (favorite) {
        await removeSong(music);
      } else {
        await addSong(music);
      }
      this.setState((prevState) => ({ favorite: !prevState.favorite, loading: false }));
    });
  };

  handleClickPlay = () => {
    const oneSecond = 1000;
    const { music: { trackName } } = this.props;
    const { play } = this.state;
    if (play) {
      document.getElementById(trackName).pause();
      this.setState({
        play: false,
      });
    } else {
      document.getElementById(trackName).play();
      this.setState({
        play: true,
        totalDuration: `00:${document
          .getElementById(trackName)
          .duration.toFixed(0)
          .toString()
          .padStart(2, '00')}`,
      });
    }
    setInterval(
      () => this.setState({
        duration: `00:${document
          .getElementById(trackName)
          .currentTime.toFixed(0)
          .toString()
          .padStart(2, '00')}`,
      }),
      oneSecond,
    );
  };

  render() {
    const { play, duration, totalDuration, favorite, loading } = this.state;
    const { music } = this.props;
    const { trackName, previewUrl } = music;
    return (
      <Container isPlaying={ play } isFavorite={ favorite }>
        <button
          onClick={ () => this.handleClickFavorite(music) }
          className="favorite"
          type="button"
          id="favorite"
        >
          <FavoriteIcon />
        </button>
        <button
          onClick={ () => this.handleClickFavorite(music) }
          className="favorite"
          type="button"
          id="not-favorite"
        >
          <FavoriteBorderIcon />
        </button>
        <button onClick={ this.handleClickPlay } id="play" type="button">
          <img alt="icon play" src={ iconPlay } />
        </button>
        <button onClick={ this.handleClickPlay } id="pause" type="button">
          <img alt="icon pause" src={ iconPause } />
        </button>
        <p id="music-name">{ trackName }</p>
        <p id="duration">
          {duration}
          /
          {totalDuration}
        </p>
        <audio
          id={ trackName }
          src={ previewUrl }
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        {loading && <Loading />}
      </Container>
    );
  }
}

export default PlayerMusic;
