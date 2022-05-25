import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    buttonDisabled: true,
    nameArtist: '',
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
    const { buttonDisabled, nameArtist } = this.state;
    return (
      <div data-testid="page-search">
        <p>Search</p>
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            placeholder="Insira seu Nome"
            value={ nameArtist }
            onChange={ this.habilitaButton }
          />
          <button
            id="vai"
            type="button"
            data-testid="search-artist-button"
            onClick={ this.habilitaButton }
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
        </form>
        <Header />
      </div>
    );
  }
}

export default Search;
