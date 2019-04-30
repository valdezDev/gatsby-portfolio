import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import portfolio from '../../media/portfolioDemoVid.mp4';
import PropTypes from 'prop-types';
import thumbnail from '../../images/portfolioThumbnail.jpg';

const ProjVideo4 = () => (
  <Player
    playsInline
    poster={thumbnail}
    src={portfolio}
    className="projVideo5"
  >
    <BigPlayButton position="center" />
  </Player>
);

PosterImage.propTypes = {
  poster: PropTypes.string,
}

export default ProjVideo4;