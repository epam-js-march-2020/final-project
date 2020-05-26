import React from 'react';

export function ModalMessage(props) {

  document.onkeydown = (event) => {
    if (event.key === "Escape") { 
        props.onClick();
    }

    if (event.key === "Enter") {
        props.onClick();
    }
  };

  return (
    <>
    <div className='modal_fade modal_fade_trick'>
    </div>
    <div className = 'modal_window modal_message container container--flex row justify-content-center align-content-around'>
      <div className = 'input_note row col-12 justify-content-center'>{props.text}</div>
      <button 
        className = 'button_project button_project--alternative row col-12'
        onClick = {props.onClick}>
          CLOSE
      </button>
    </div>
    </>
  )
} 