import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/pages/home/home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LogIn from './components/pages/login/login';
import Services from './components/pages/services/services';
import ServiceInfo from './components/pages/services/serviceInfo/serviceInfo'
// import moment from 'moment';
import Settings from './components/pages/settings/settings';
import Feedback from './components/pages/feedback/feedback';
import Contacts from './components/pages/contacts/contacts';

class App extends Component {
  constructor() {
    super();

    localStorage.users ? this.state = JSON.parse(localStorage.getItem('users')) :
    
    this.state = {
        
      buttons: [
        {name: "Home", id: 1, linkTo: "/"},
        {name: "Services", id: 2, linkTo: "/services"},
        {name: "Log in" , id: 3, linkTo: "/login"},
        {name: "Feedback", id: 4, linkTo: "/feedback"},
        {name: "Contacts", id: 5, linkTo: "/contacts"},
      ],
  
      //current user state:
  name:  '',
  email: '',
  password: '',
  isLogged: false,
  validationMessage: '',
  image: '',
  
  //All users base
  users: [
    {name: "admin", password: "admin", image: 'https://thumbs.dreamstime.com/z/scratched-textured-admin-stamp-seal-admin-stamp-seal-watermark-grunge-effect-designed-rounded-rectangle-circles-blue-138234543.jpg', email: "admin@admin.com", services: [], booking: [{date: 10000, time: '10.00-11.00', master: "Mr. Hooks"}]},
    {name: "Vasja", password: "vasja", image: 'https://static8.depositphotos.com/1381146/915/i/450/depositphotos_9150498-stock-photo-wolf-man.jpg', email: "vasja@vasja.com", services: ['Cut shave'], booking: [{date: 1589414400000, time: '12.00-13.00', master: "Mr. Redux"}]},
    {name:"Petja", password: "petja", image: "https://a.d-cd.net/PwAAAgNJauA-960.jpg", email:"petja@petja.com", services:["Head shave"], booking:[{date:1589414400000, time: "11.00-12.00", master: "Mr. Redux"}], feedback:{comment:"Nice work! I have cool look now, check it out", rating:4, date:1590315779762}},
    {name: "Ivan", password: "ivan", image: "https://vestniksr.ru/upload/000/u1/7/c/nikita-dzhigurda-vyzval-na-ring-aleksandra-emeljanenko-photo-orig.jpg", email: "ivan@ivan.com", services:["Beard trim"], booking:[{date:15894144000011, time: "10.00-11.00", master:"Mr. Redux"}], feedback:{comment: "Cool service!", rating:5, date:1590315716155}},
  ]
    }

  localStorage.setItem('users', JSON.stringify(this.state));
  }


  

componentDidMount() {
  if (this.state.isLogged) {
    const newButtons = this.state.buttons;
  
  newButtons.map(item => item.name === "Log in" ? item.name = "My Cabinet" : null )
  this.setState({buttons: newButtons});
  }
}



//Settings change handler
changeSettings  = (value, field) => {
  let newState = [...this.state.users];
  newState.map(item => {
    if (item.email === this.state.email) {
      item[field] = value;
      this.setState({[field] : value});
    }
  });
  this.setState({users: newState});
}

//Feedback submit to database:
feedbackSubmit  = (comment, rating, date) => {
  let newState = [...this.state.users];
  newState.map(item => {
    if (item.email === this.state.email) {
      item.feedback = {comment, rating, date}
    }
  });
  this.setState({users: newState});
}



//Check if service added
checkAdded  = (serviceName)  => {
  let result;
  this.state.users.filter(item => result = item.services.filter(item => item === serviceName));
  if (result.length > 0) {
    return true;
  } else return false;
}

//Input handlers
changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

//Log In and push new user to userbase
logIn =  ()  => {
  this.setState({isLogged: true});
  let newUser = {name: this.state.name, password: this.state.password, email: this.state.email, image: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-no-photo-selfie-icon-image_1267182.jpg', services: [], booking: []}
  let newState = [...this.state.users];
  newState.push(newUser);
  this.setState({users: newState, image:  'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-no-photo-selfie-icon-image_1267182.jpg'});

  const newButtons = this.state.buttons;
  newButtons.map(item => item.name === "Log in" ? item.name = "My Cabinet" : null );
  this.setState({buttons: newButtons});
}

logInExistingUser =  ()  => {
  this.setState({isLogged: true});
  const newButtons = this.state.buttons;
  newButtons[2].name = "Your cabinet";
  this.setState({buttons: newButtons});
this.state.users.map(item => {
  if (item.email === this.state.email) {
    this.setState({image: item.image});
  }
})
}

//Add service to currentUser and push to users' base
addServiceToCurrentUser = (serviceName) => {
  let newState = [...this.state.users];
  newState.map(item => {
    if (item.email === this.state.email) {
      item.services.push(serviceName);
      this.setState({users: newState});
      };
  })
  }

//Add BookingInfo to currentUser and push to users' base
addBookingInfoToCurrentUser = (bookingInfo) => {
  let newState = [...this.state.users];
  
  newState.map(item => {
    if (item.email === this.state.email) {
      
      item.booking = [];
      item.booking.push(bookingInfo);
      this.setState({users: newState});
      };
  })
    }

//Cancel booking 
cancelBooking = () => {
  console.log('cancel booking');
  let newState  = [...this.state.users];
  newState.map(item => {
    if (item.email === this.state.email)  {
      item.booking = [];
      this.setState({users: newState});
      }
  });
}


  //Read bookings of current user
   readBookings = () => {
    let result;
    this.state.users.map((item) => {
      if (item.email === this.state.email) {
     result = item.booking;  
 
      };
      });
      return result;
  }


//Read services of current user
  readServicesOfCurrentUser = () => {
  let result;
  this.state.users.map((item) => {
      if (item.email === this.state.email) {
      //  this.currentUserInfo = item.services;
          result  = item.services;
         }
    });
    return result;
  };
   

  //Delete service from currentUser and delte from users  base
deleteServiceFromCurrentUser = (serviceName) => {
  console.log('deleting...')
  let newState = [...this.state.users];

  newState.map(item => {
    if (item.email === this.state.email) {
      item.services = item.services.filter((item) =>  item !== serviceName);
      this.setState({users: newState});
      }
  })
  }

//Submit new user
submitHandler = (event) => {
event.preventDefault();

//Check if email exists in our base
let emailCheck = this.state.users.filter(info => info.email.toLowerCase() === this.state.email.toLowerCase());
if (emailCheck.length > 0) {
  this.setState({validationMessage: "Email already exists, try another one"});
  return; 
}

if (this.state.name.length === 0) {
  this.setState({validationMessage: "Enter your name"});
  return;
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

if (ValidateEmail(this.state.email) === false) {
  this.setState({validationMessage: "Enter valid email"});
  return;
}

if (this.state.password.length  === 0) {
  this.setState({validationMessage: "Enter password"});
  return
}

this.logIn();
}

//Logout handler
logOutHandler = (event) =>  {
  event.preventDefault();
this.setState({
  name: '', 
  email: '', 
  password: '',
  isLogged: false,
  validationMessage: '',
  image:'',

  });
  const newButtons = this.state.buttons;
  newButtons[2].name = "Log in";
}

//Sign in handler (check login & password)

signIn = (event) => {
event.preventDefault();
const loginPasswordCheck = this.state.users.filter(info => 
  info.email === this.state.email && info.password === this.state.password );
  if (loginPasswordCheck.length > 0) {
    this.setState({name : loginPasswordCheck[0].name})
  this.logInExistingUser()
  } else {
    this.setState({validationMessage: 'Wrong email or password. Please try again'})}
}

//Form Reset Handler
formReset = ()  =>  {
  this.setState({validationMessage: '', name: '', email: '', password: ''})
  }

   render() {
    localStorage.setItem('users', JSON.stringify(this.state));
    console.log('render')


    return (
      <Router> 
      <Header buttonInfo={this.state.buttons} username={this.state.name} />
      <Route exact path="/" render={(username) => <Home username={this.state.name} users={this.state.users} />} />
      <Route exact path="/final-project" render={(username) => <Home username={this.state.name} users={this.state.users} />} />

      <Route exact path="/services" render={() =>  <Services name={this.state.name}  />
      } />
      <Route path="/services/:id" render={({match}) => <ServiceInfo 
      id={match.params.id} 
      isLogged={this.state.isLogged} 
      addService = {this.addServiceToCurrentUser} 
      deleteService = {this.deleteServiceFromCurrentUser} 
      checkAdded = {this.checkAdded}
      />
        }  />
      <Route path="/settings" render={() => <Settings name={this.state.name} image={this.state.image} changeSettings={this.changeSettings}  />} /> 

      <Route path="/login" render={() => 
      <LogIn username={this.state.name} 
      logged={this.state.isLogged}
      image={this.state.image} 
      change={this.changeHandler} 
      submit={this.submitHandler} 
      logout={this.logOutHandler}  
      signin={this.signIn}
      validation_message={this.state.validationMessage}
      form_reset={this.formReset}
      email = {this.state.email}
      // password = {this.state.password}
      readServices  = {this.readServicesOfCurrentUser}
      // currentUserServices = {this.currentUserInfo}
      deleteService = {this.deleteServiceFromCurrentUser}
      readBookings={this.readBookings}
      addBooking={this.addBookingInfoToCurrentUser}
      cancelBooking={this.cancelBooking}
      currentUser={this.state.email}
      allUsers={this.state.users}

            />} /> 

<Route path="/feedback" render={() => 
<Feedback image={this.state.image} name={this.state.name} logged={this.state.isLogged} feedback={this.feedbackSubmit} />
} />

<Route path="/contacts" component={Contacts} />
      </Router>
      );
  }
}
 
export default App;


