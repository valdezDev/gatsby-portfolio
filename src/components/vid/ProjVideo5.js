import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import chess from '../../media/chessDemoVid.mp4';
import PropTypes from 'prop-types';
import thumbnail from '../../images/chessThumbnail.jpg';

const ProjVideo4 = () => (
  <Player
    playsInline
    poster={thumbnail}
    src={chess}
    className="projVideo5"
  >
    <BigPlayButton position="center" />
  </Player>
);

PosterImage.propTypes = {
  poster: PropTypes.string,
}

export default ProjVideo4;