import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      carregando: true,
      musics: [],
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const playMusic = await getMusics(id);
    this.setState({
      carregando: false,
      musics: playMusic,
    });
  }

  render() {
    const { carregando, musics } = this.state;
    return (
      <div data-testid="page-album">
        <p>Album</p>
        <Header />
        { carregando ? <Loading /> : (
          <ul>
            <li data-testid="album-name">{`Album: ${musics[0].collectionName}`}</li>
            <li data-testid="artist-name">{`Artist: ${musics[0].artistName}`}</li>
          </ul>
        )}
        <div>
          {musics.map((music, index) => (
            index > 0
          && <MusicCard
            key={ music.trackId }
            musicName={ music.trackName }
            musicUrl={ music.previewUrl }
          />
          ))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
