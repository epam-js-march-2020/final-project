import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './addServiceButton.css'

class AddServiceButton extends Component {
    
      
    state = { 
buttonName: "Add service",
status: "",
linkTo: "#",
added: false,
}


componentDidMount() {
    if (this.props.checkAdded(this.props.serviceName) === true) {
        this.setState({added: true, buttonName: "Cancel"});
     };

}

    
    buttonHandler = (props) => {

if (!this.props.isLogged) {
    this.setState({buttonName: "Log in please", linkTo: "/login"});
    return;     
}

if (this.state.added === false) {
            this.setState({
            added: true, 
            status: "Service is added!",
            buttonName: "Cancel",
       });
       console.log('add service', this.props.serviceName);
       this.props.addService(this.props.serviceName);
       return;
        }

else if (this.state.added === true) {
            this.setState({
            added: false, 
            status: "Service canceled",
            buttonName: "Add service",        
        });
        console.log('delete service', this.props.serviceName);

        this.props.deleteService(this.props.serviceName)

       } 

    }
    
    render() { 
        return ( <div>
            <Link to="/services"><button>Back to Services</button></Link>
            <Link to={this.state.linkTo}><button onClick={this.buttonHandler}>{this.state.buttonName}</button></Link>
            
            <div className="added">
            <p className="caliostro center">{this.state.status}</p>
            {this.state.added ? <Link to="/login"><button>Checkout</button></Link> : null}            
            </div>
            </div> );
    }
}
 
export default AddServiceButton;