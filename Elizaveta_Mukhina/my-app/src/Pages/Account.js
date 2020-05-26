import React from "react";
import CheckForService from "./Form";
import { Button } from "react-bootstrap";


export default class Account extends CheckForService {
  constructor(props){
  super(props)
  this.state = {edit: false}
   this.getInitialState = this.getInitialState.bind(this);
   this.edit = this.edit.bind(this);
   this.save = this.save.bind(this);
   this.rendEdit = this.rendEdit.bind(this);
   this.rendNorm = this.rendNorm.bind(this);
}

	
getInitialState() {
	this.setState({edit: false});
	
}
edit() {
	this.setState({edit: true});
}
save() {
	var value = this.refs.newText.value;
	alert(value)
	this.setState({edit: false});
}
rendEdit() {
	return (
	<div>
<textarea ref="newText" defaultValue={this.state.text + ", you have been checked in. Visit us on " + this.state.date + " at " + this.state.time} className="checkedColor"></textarea>
<Button variant="warning" onClick={this.save}> Save </Button>
</div>
)
}
rendNorm() {
return (
<div>
<textarea defaultValue={this.state.text + ", you have been checked in. Visit us on " + this.state.date + " at " + this.state.time} className="checkedColor"></textarea>
<Button variant="warning" onClick={this.edit}> Edit </Button>
</div>
)
}

	render() {
if(this.state.edit){
return this.rendEdit();
} else{
	return this.rendNorm();
}
}
}
