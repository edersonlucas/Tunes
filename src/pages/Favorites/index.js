import React from 'react';
import { Container, ContainerMusics } from './styles';
import Header from '../../components/Header';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading';
import PlayerMusicFavorite from '../../components/PlayerMusicFavorite';

class Favorites extends React.Component {
  state = {
    loading: false,
    favoriteSongs: null,
  };

  componentDidMount() {
    this.fetchSongs();
  }

  fetchSongs = () => {
    this.setState({ loading: true }, async () => {
      const requestFavoriteSongs = await getFavoriteSongs();
      this.setState({ favoriteSongs: requestFavoriteSongs, loading: false });
    });
  };

  render() {
    const { loading, favoriteSongs } = this.state;
    return (
      <Container data-testid="page-favorites">
        <Header />
        {loading && <Loading />}
        <ContainerMusics>
          {favoriteSongs
            && favoriteSongs.map((song, index) => (
              <PlayerMusicFavorite key={ index } music={ song } favoriteSongs={ favoriteSongs } callback={ this.fetchSongs } />
            ))}
        </ContainerMusics>
      </Container>
    );
  }
}

export default Favorites;
