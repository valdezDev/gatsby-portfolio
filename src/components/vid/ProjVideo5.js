import React from 'react';
import { Player } from 'video-react';
import chess from '../../media/chessDemoVid.mp4';

const ProjVideo4 = () => (

    <Player
      playsInline
      poster="/assets/poster.png"
      src={chess}
      className="projVideo4"
    />
);

export default ProjVideo4;