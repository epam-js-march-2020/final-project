import React from 'react';
import video from '../../../img/aaa.mp4';

const Player = () => {
    return (
      <video className='about_player' preload="auto" autoPlay={true} loop={true} muted="muted" >
          <source src={video} type='video/mp4' />
          {/* <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'  /> */}
      </video>
    )
}

export default Player;