import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from '../components/Header';
import AlbumFace from '../components/AlbumFace';
import Loading from './Loading';

class Search extends React.Component {
  state = {
    buttonDisabled: true,
    nameArtist: '',
    albumResult: [],
    carregando: false,
    searchArtist: '',
  }

  BuscaArtista = async () => {
    const { nameArtist } = this.state;
    this.setState({
      carregando: true,
      searchArtist: nameArtist,
      nameArtist: '',
    });
    const albumResult = await searchAlbumsAPI(nameArtist);
    this.setState({
      albumResult,
      carregando: false,
    });
  }

  habilitaButton = ({ target }) => {
    this.setState({
      nameArtist: target.value,
    });
    const caractere = 2;
    const artist = target.value.length;
    if (artist >= caractere) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    const {
      buttonDisabled,
      nameArtist,
      albumResult,
      carregando,
      searchArtist,
    } = this.state;
    return (
      <div data-testid="page-search">
        <h1>Search</h1>
        <Header />
        { carregando ? <Loading />
          : (
            <form>
              <input
                type="text"
                data-testid="search-artist-input"
                placeholder="Insira o nome"
                value={ nameArtist }
                onChange={ this.habilitaButton }
              />
              <button
                id="vai"
                type="button"
                data-testid="search-artist-button"
                onClick={ this.BuscaArtista }
                disabled={ buttonDisabled }
              >
                Pesquisar
              </button>
            </form>
          )}
        {
          albumResult.length > 0
          && <p>{`Resultado de álbuns de: ${searchArtist}` }</p>

        }
        { albumResult.length > 0
          ? albumResult.map((album) => (
            <AlbumFace
              key={ album.collectionId }
              collectionId={ album.collectionId }
              collectionName={ album.collectionName }
            />
          ))
          : <p>Nenhum álbum foi encontrado</p>}
      </div>
    );
  }
}

export default Search;
