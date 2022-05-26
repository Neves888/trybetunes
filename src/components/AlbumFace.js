import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumFace extends React.Component {
  render() {
    const { collectionId, collectionName } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <p>{ collectionName }</p>
      </Link>
    );
  }
}

AlbumFace.propTypes = {
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default AlbumFace;
