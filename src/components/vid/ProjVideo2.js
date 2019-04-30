import React from 'react';
import { Player } from 'video-react';
import hn from '../../media/hnDemoVid.mp4';

const ProjVideo2 = () => (

    <Player
      playsInline
      poster="/assets/poster.png"
      src={hn}
      className="projVideo2"
    />
);

export default ProjVideo2;