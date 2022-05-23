import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Sound from 'react-sound';
import Container from './styles';
import iconPlay from '../../images/playerMusicIcons/play.svg';
import iconPause from '../../images/playerMusicIcons/pause.svg';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';

class PlayerMusic extends React.Component {
  state = {
    durationSong: '00:00',
    positionSong: '00:00',
    play: false,
    reproducing: 'STOP',
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
    const { callback } = this.props;
    this.setState({ loading: true }, async () => {
      const { favorite } = this.state;
      if (favorite) {
        await removeSong(music);
        if (callback)callback();
      } else {
        await addSong(music);
      }
      this.setState((prevState) => ({ favorite: !prevState.favorite, loading: false }));
    });
  };

  duration = (event) => {
    const oneSecond = 1000;
    this.setState({
      durationSong: `00:${(event.duration / oneSecond).toFixed(0)
        .toString()
        .padStart(2, '00')}`,
      positionSong: `00:${(event.position / oneSecond).toFixed(0)
        .toString()
        .padStart(2, '00')}`,
    });
  }

  handleClickPlay = () => {
    const { play } = this.state;
    if (play) {
      this.setState({
        play: false,
        reproducing: 'PAUSED',
      });
    } else {
      this.setState({
        play: true,
        reproducing: 'PLAYING',
      });
    }
  };

  render() {
    const { play, positionSong, durationSong, favorite, loading, reproducing } = this.state;
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
          {positionSong}
          /
          {durationSong}
        </p>
        <Sound
          url={ previewUrl }
          playStatus={ Sound.status[reproducing] }
          onPlaying={ (event) => this.duration(event) }
        />
        {loading && <Loading />}
      </Container>
    );
  }
}

export default PlayerMusic;
