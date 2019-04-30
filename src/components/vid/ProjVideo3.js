import React from 'react';
import { Player } from 'video-react';
import blog from '../../media/blogDemoVid.mp4';

const ProjVideo3 = () => (

    <Player
      playsInline
      poster="/assets/poster.png"
      src={blog}
      className="projVideo3"
    />
);

export default ProjVideo3;