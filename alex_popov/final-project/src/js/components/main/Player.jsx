import React from 'react';
import video from '../../../img/intro.mp4';

const Player = () => {
    return (
      <video className='about_player' preload="auto" autoPlay={true} loop={true} muted="muted" >
          <source src={video} type='video/mp4' />
      </video>
    )
}

export default Player;