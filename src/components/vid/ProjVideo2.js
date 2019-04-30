import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import hn from '../../media/hnDemoVid.mp4';
import PropTypes from 'prop-types';
import thumbnail from '../../images/hackerThumbnail.jpg';

const ProjVideo2 = () => (
  <Player
    playsInline
    poster={thumbnail}
    src={hn}
    className="projVideo2"
  >
    <BigPlayButton position="center" />
  </Player>
);

PosterImage.propTypes = {
  poster: PropTypes.string,
}

export default ProjVideo2;