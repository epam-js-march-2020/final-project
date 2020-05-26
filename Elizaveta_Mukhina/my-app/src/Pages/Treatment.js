import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import treatmentImg from "../Pages/imgForPages/treatment.jpeg";
import { NavLink } from "react-router-dom";




export default class Treatment extends Component {

		render(){
			return (
<>
		<h2 className="text-center m-4">Services</h2>		
			<Container className="col-md-7 col-xl-5">
<Card bg="dark" text="light" className="textLocation">
<Card.Img
variant="top"
src={treatmentImg}
alt="Treatment"
/>
<Card.Body>
<Card.Title>TREATMENT</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Card.Text>
</Card.Body>
<Card.Footer>
<Card.Text>
5$
</Card.Text>
 </Card.Footer>
 <Card.Footer>
<NavLink to="/form"><Button onClick={this.props.CheckForService} variant="outline-warning">Check in</Button></NavLink>
 </Card.Footer>
</Card>
</Container>
</>
)
		}
	}


