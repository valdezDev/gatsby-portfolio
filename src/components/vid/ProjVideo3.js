import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import blog from '../../media/blogDemoVid.mp4';
import PropTypes from 'prop-types';
import thumbnail from '../../images/blogThumbnail.jpg';

const ProjVideo3 = () => (
  <Player
    playsInline
    poster={thumbnail}
    src={blog}
    className="projVideo3"
  >
    <BigPlayButton position="center" />
  </Player>
);

PosterImage.propTypes = {
  poster: PropTypes.string,
}

export default ProjVideo3;