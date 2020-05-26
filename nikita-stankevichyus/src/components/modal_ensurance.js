import React from 'react';

export function ModalEnsurance(props) {

  document.onkeydown = (event) => {
    if (event.key === "Escape") { 
        props.onCancel();
   }
  };
  
  return (
    <>
    <div className='modal_fade modal_fade_trick'>
    </div>
    <div className = 'modal_window modal_message container container--flex row justify-content-center align-content-around'>
      <div className = 'input_note row col-12 justify-content-center'>{props.text}</div>
        <button 
          className = 'button_project button_project--alternative col-5'
          onClick = {props.onCommit}>
            COMMIT
        </button>
        <button
          className = 'button_project button_project--alternative col-5 mg-l-5'
          onClick = {props.onCancel}
        >
          CANCEL
        </button>
    </div>
    </>
  )
} 