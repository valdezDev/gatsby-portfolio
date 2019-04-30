import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import devgab from '../../media/devgabDemoVid.mp4';
import PropTypes from 'prop-types';
import thumbnail from '../../images/devgabThumbnail.jpg';

const ProjVideo1 = () => (
  <Player
    playsInline
    poster={thumbnail}
    src={devgab}
    className="projVideo1"
  >
    <BigPlayButton position="center" />
  </Player>
);

PosterImage.propTypes = {
  poster: PropTypes.string,
}

export default ProjVideo1;