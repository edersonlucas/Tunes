import React from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import AlbumCard from '../../components/AlbumCard';
import { Container, ContainerResults, ContainerAlbuns } from './styles';

class Search extends React.Component {
  state = {
    inputValue: '',
    lastArtistSearched: '',
    buttonIsDisabled: true,
    loading: false,
    artists: null,
  };

  handleChange = ({ target: { value } }) => {
    const minimumNumberOfCharactersNameArtist = 2;
    this.setState({
      inputValue: value,
      buttonIsDisabled: value.length < minimumNumberOfCharactersNameArtist,
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    this.setState(
      (prevState) => ({
        loading: true,
        lastArtistSearched: prevState.inputValue,
        inputValue: '',
      }),
      async () => {
        const { lastArtistSearched } = this.state;
        const requestArtist = await searchAlbumsAPI(lastArtistSearched);
        this.setState({
          artists: requestArtist,
          loading: false,
        });
      },
    );
  };

  resultSearch = (artists, lastArtistSearched) => {
    if (artists) {
      if (artists.length > 0) {
        return (
          <ContainerResults>
            <h2>{`Resultado de álbuns de: ${lastArtistSearched}`}</h2>
            <ContainerAlbuns>
              {artists.map((artist, index) => (
                <AlbumCard key={ index } artist={ artist } />
              ))}
            </ContainerAlbuns>
          </ContainerResults>
        );
      }
      return <h2>Nenhum álbum foi encontrado</h2>;
    }
  };

  render() {
    const {
      buttonIsDisabled,
      inputValue,
      loading,
      artists,
      lastArtistSearched,
    } = this.state;
    return (
      <Container data-testid="page-search">
        <Header />
        <form>
          {!loading ? (
            <>
              <input
                onChange={ this.handleChange }
                data-testid="search-artist-input"
                type="text"
                value={ inputValue }
              />
              <button
                type="button"
                onClick={ this.handleClick }
                disabled={ buttonIsDisabled }
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </>
          ) : (
            <Loading />
          )}
        </form>
        {this.resultSearch(artists, lastArtistSearched)}
      </Container>
    );
  }
}

export default Search;
