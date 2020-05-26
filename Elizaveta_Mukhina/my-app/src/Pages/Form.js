import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../App.css";


export default class CheckForService extends Component {
  constructor(props){
  super(props)
  this.state = {
    text: "",
    date: 0,
    time: 0,
    isCheck: false,
    a: []
  };
  
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.showMessage = this.showMessage.bind(this);
   this.unshowMessage = this.unshowMessage.bind(this);

}
  handleChange(e) {
console.log(e.target.value)
this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
     console.log(this.state.text, ", you have been checked in.", "Visit us on", this.state.date, "at", this.state.time)
  }


showMessage(){
    this.setState({isCheck: true});
    this.ddd();
  }
  unshowMessage(){
    this.setState({isCheck: false});
  }
  ddd() {
this.state.a.push(this.state.text, this.state.date, this.state.time)
console.log(this.state.a[0] + ", you have been checked in. Visit us on " + this.state.a[1] + " at " + this.state.a[2])

  }

  render() {  

    return (

<div>

<Container>

<Form  className="widthForForm" onSubmit={this.handleSubmit} >
  <Form.Group  controlId="formBasicName">
    <Form.Label ><h6>Your name</h6></Form.Label>
    <Form.Control onChange={this.handleChange} value={this.state.value} type="text" name="text" placeholder="Enter name" />
  </Form.Group>
<Form.Group controlId="formBasicName">
    <Form.Label ><h6>Convenient date</h6></Form.Label>
    <Form.Control onChange={this.handleChange} value={this.state.value} type="text" name="date" placeholder="Enter date" />

  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label><h6>Convenient time</h6></Form.Label>
    <Form.Control onChange={this.handleChange} value={this.state.value} type="text" name="time" placeholder="Enter time" />
  </Form.Group>
{!this.state.isCheck  &&
<Button onClick={ this.showMessage } type="submit" variant="warning">
    Check in
  </Button>

} 
</Form>
{this.state.isCheck &&
  <h3 className="checkedColor" onClick={this.unshowMessage}>{this.state.text}, you have been checked in. Visit us on {this.state.date} at {this.state.time}</h3>
}
</Container>
</div>

      )
 }
}
