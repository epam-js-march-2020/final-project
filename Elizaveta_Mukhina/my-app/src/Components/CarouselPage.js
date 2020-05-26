import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import scissorsImg from "../carousel/scissors.jpeg";
import barbersImg from "../carousel/barbers.jpeg";


export default class CarouselPage extends Component {
	render() {
		return (
			<Carousel>
<Carousel.Item> 
<img 
className="d-block w-100"
src={scissorsImg}
width="960"
height="750"
alt="Scissors"
/>
<Carousel.Caption>
<h1>Barber Shop</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item> 
<img 
className="d-block w-100"
src={barbersImg}
width="960"
height="750"
alt="Barbers"
/>
<Carousel.Caption>
<h1>Barber Shop</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</Carousel.Caption>
</Carousel.Item>
			</Carousel>
			)
		}
	}