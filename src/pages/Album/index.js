import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/Loading';
import AlbumCard from '../../components/AlbumCard';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { Container, ContainerMusics, ContainerAlbumAndMusics } from './styles';
import PlayerMusic from '../../components/PlayerMusic';

class Album extends React.Component {
  state = {
    album: null,
    loading: false,
    favoriteSongs: null,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ loading: true }, async () => {
      const requestAlbum = await getMusics(id);
      const requestFavoriteSongs = await getFavoriteSongs();
      this.setState({
        favoriteSongs: requestFavoriteSongs,
        album: requestAlbum,
        loading: false,
      });
    });
  }

  render() {
    const { loading, album, favoriteSongs } = this.state;
    return (
      <Container data-testid="page-album">
        <Header />
        {loading && <Loading />}
        <ContainerAlbumAndMusics>
          {album
              && album.map((item, index) => (item.kind === 'song' ? (
                ''
              ) : (
                <AlbumCard key={ index } artist={ item } />
              )))}
          <ContainerMusics>
            {album
              && album.map((item, index) => (item.kind === 'song' ? (
                <PlayerMusic favoriteSongs={ favoriteSongs } key={ index } music={ item } />
              ) : (
                ''
              )))}
          </ContainerMusics>
        </ContainerAlbumAndMusics>
      </Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default Album;
