import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button, NavDropdown } from "react-bootstrap";
import logo from "./logo_2.png";
import { NavLink } from "react-router-dom";
import '../App.css';
import { withAuth } from "../Auth/AuthProvider";


class Header extends Component {

	componentDidMount() {
		const {handleAuthentication} = this.props;
		if(handleAuthentication){
			handleAuthentication()
		}
	}
	render() {
		let headerLink = this.props.headerLink;
		let servicesLink = this.props.servicesLink;
	
let linkHead = headerLink.map (el => 
<LinksForHeader key={el.id} name={el.name} id={el.id} /> );
let linkDropDown = servicesLink.map (el => 
<LinksForHeader key={el.id} name={el.dropName} id={el.id} /> );

		return (
			<>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
<Container >
<NavLink to="/">
<Navbar.Brand> 
<img 
src={logo} 
height="30" 
width ="30" 
className="d-inline-block align-top" 
alt="Logo"
/> BS
</Navbar.Brand>
</NavLink>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">

{linkHead}
<NavDropdown className="text-warning" title="Services" id="responsive-navbar-dropdown">
     {linkDropDown}
      </NavDropdown>
</Nav>
<Form inline>
<FormControl
type="text"
placeholder="Search"
className="mr-sm-2"
/>
<Button variant="outline-warning">Search</Button>
</Form>

</Navbar.Collapse>
</Container>
</Navbar>


</>
			);
	}
}
function LinksForHeader(props) {
	return( 
		<>
		<div><NavLink className="navSpacing text-warning" to={"/"+props.id}>{props.name}</NavLink></div>
		</>
		)
}
export default withAuth(Header);