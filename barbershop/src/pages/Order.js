import React from 'react';
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class Order extends React.Component {

  state = {
    components: {
      date: '',
      serviceType: '',
      serviceComment: '',
      selectedTime: '',
    },
    selectedTreatment: '',
    selectedDate: new Date(),
    selectedTime: '',
    
    isLoggedIn: true, 
    message: false
  };

  getDataFromStorage = () => {
    let components = localStorage.getItem('componentsList'); 
    
      if(components) {
        components = JSON.parse(components);
        this.setState( { components: components })

      } else {
        this.setState( { components: {} })
      }
  }

  componentDidMount() {
    this.getDataFromStorage()
    
  };

 

  

  handleChange = name => ({ target: { value } }) => {
    this.setState ({...this.state, [name]:value})
   
  };

  
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date
      });
  }

  delete = (item) => {
  
    let newItems = this.state.components 
   
    newItems.splice(newItems.indexOf(item[1]), 1);
    
   

    localStorage.setItem('componentsList', JSON.stringify(newItems));
   
    if(!newItems.length) {
      localStorage.setItem('componentsList', JSON.stringify(newItems));
      this.setState({ message: true });
    }

    this.setState({ components: newItems });

}




 
  submitHandler = (event) => {
    event.preventDefault();
    let time = this.state.selectedTime ? ` time is ${ this.state.selectedTime}` : '';
    const newComponents = { 
      date: this.state.selectedDate.toLocaleDateString(`en-US`, {day: `2-digit`, month: `short`, year:'numeric' }),
      serviceType: this.state.selectedTreatment,
      serviceComment: '',
      selectedTime: time,
    } 
    let serviseList = JSON.parse(localStorage.getItem('componentsList')) || [];


    serviseList.push(newComponents)
    localStorage.setItem('componentsList', JSON.stringify(serviseList));

   
    
    this.getDataFromStorage();
  }

  logOut = () => {
    localStorage.setItem('isLoggedIn', false);
    this.setState({ isLoggedIn: false });
  
  }
  
  render () {
    let className = 'order__message';
    const { isLoggedIn } = this.state;

    if (this.state.message) {
      className += ' active';
    }
  
    if ( !isLoggedIn ) { 
      
      return (
        <Redirect to='/login'/>
      )
    
    } else
    return (
      <section className='order'>
        <div className='order__wrapper'>
          <h2 className='order__title'>Create new order</h2>
          <div className='order__container'>
            <form  className='order__form' onSubmit={ this.submitHandler }>
              <div className='order__label-wrapper'>
                <label className='order__label'>
                  <select className='order__select' name='serviceType' value={this.state.selectedTreatment} onChange={this.handleChange('selectedTreatment')}   inputprops={{
                            name: 'selectedTreatment'
                          }} required>
                    <option value=''>Choose service</option>
                      <option value='First haircut'>Haircut/ 100$</option>
                      <option value='Beard haircut'> Beard haircut / 80$</option>
                      <option value='Children haircut'>Children's haircut/70 $</option>
                      <option value='Fathers and children'>Fathers and children/150 $</option>
                  </select>
                </label>
                <label className='order__label order__labe--time'>
                  <select className='order__select' name='serviceTime' value={this.state.selectedTime} onChange={this.handleChange('selectedTime')}  required>
                  <option value=''>select time</option>
                    <option value='10.00'>10.00</option>
                      <option value='11.00'>11.00</option>
                      <option value='12.00'>12.00</option>
                  </select>
                </label>
                <div className='order__datepicker order__select' name='startDate' value={this.state.selectedDate} required>
                  <DatePicker
                    selected={this.state.selectedDate}
                    minDate={Date.now()}
                    onChange={this.handleDateChange}
                  />
                </div>

              </div>
              <button className='order__send-button button' value='submit'> SEND </button>
            </form>
            <div className='order__selected'>
            <ul className='order__selected-list'>
              {Object.entries(this.state.components).map((component, i) => (
                  <li className='order__selected-item' key={i}>
                  <p id={i}>{ `${component[1].serviceType}`}</p>
                  <p>{component[1].selectedTime}</p>
                  <p>date is {component[1].date}</p>
                  <button className='button order__send-button'  onClick={() => (this.delete(component))}> Remove </button>
                  </li>
                
              ))}
              </ul>
              <div className={className}>your orer is empty</div>
            </div>
            </div>
          <button className='order__logout-button button' onClick={this.logOut}>log out</button>
          </div>
      </section>
    )
    
  }

}

