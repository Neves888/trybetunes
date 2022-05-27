import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carregando: false,
      like: false,
      infoMusic: props.infoMusic,
      playList: [],
    };
  }

  isFavorite = (id) => {
    const { playList } = this.state;
    this.setState({
      like: playList.some((favorite) => (
        favorite.trackId === id
      )),
    });
  }

  componentDidMount = async () => {
    const { musicId } = this.props;
    this.setState({ carregando: true });
    const playList = await getFavoriteSongs();
    this.setState({
      carregando: false,
      playList,
    }, () => this.isFavorite(musicId));
  }

  save = async ({ target }) => {
    const { infoMusic } = this.state;
    this.setState({
      carregando: true,
    });
    if (target.checked) {
      this.setState({ like: true });
      await addSong(infoMusic);
    } else {
      this.setState({ like: false });
      await removeSong(infoMusic);
    }
    this.setState({ carregando: false });
  }
  // clear = async () => {
  //   this.setState({ carregando: true });
  //   await removeSong(this.props);
  //   this.setState({ carregando: false });
  // }

  render() {
    const { musicName, musicUrl, musicId } = this.props;
    const { carregando, like } = this.state;
    return (
      <>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" src={ musicUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <div>
          {' '}
          <label htmlFor="favorite">
            { carregando && <Loading /> }
            <input
              data-testid={ `checkbox-music-${musicId}` }
              id="favorite"
              type="checkbox"
              checked={ like }
              onChange={ this.save }
            />
            Favorita
          </label>
        </div>
      </>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  musicUrl: PropTypes.string.isRequired,
  musicId: PropTypes.string.isRequired,
  infoMusic: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCard;
