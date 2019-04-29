import React from 'react';
import { Player } from 'video-react';
import devgab from '../media/devgabDemoVid.mp4';

const ProjVideo1 = () => (

    <Player
      playsInline
      poster="/assets/poster.png"
      src={devgab}
      className="projVideo1"
    />
);

export default ProjVideo1;