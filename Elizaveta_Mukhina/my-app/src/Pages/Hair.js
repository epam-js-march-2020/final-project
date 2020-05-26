import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import hairImg from "../Pages/imgForPages/hair.jpeg";
import { NavLink } from "react-router-dom";



export default class Hair extends Component {

		render(){
			return (
<>
	<h2 className="text-center m-4">Services</h2>			
			<Container className="col-md-7 col-xl-5">
<Card style={{ width: '36rem' }} bg="dark" text="light" className="textLocation">
<Card.Img
variant="top"
src={hairImg}
alt="Hair"
/>
<Card.Body>
<Card.Title>HAIR</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Card.Text>
</Card.Body>
<Card.Footer>
<Card.Text>
15$
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