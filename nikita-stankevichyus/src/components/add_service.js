import React from 'react';



export class AddService extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='add_service' className = {'add_service modal_window ' + (this.props.addingService ? '' : ' hidden') }> 
        <form id = 'add_service_form'>
          <label>
            <span>Choose your date</span>
            <input type='date'></input>
          </label>
          <button type='submit'>Commit</button>
          <button type='button'>Close</button>
        </form>
      </div>
    )
  }
}