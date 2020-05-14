import React from 'react';
import Player from './Player';
  
function Home() {
  return (
    <>
      <Player />
      <div className='container container_main'>
        <h1>Huntingdons Finest Barber Shop</h1>
        <p>
          Welcome to The Barbers Den! The Barbers Den is a traditional barbershop based in Huntingdon high street. Our main focus is customer satisfaction, we aim to give our customers the best barbering experience possible and tailor our services in line with our customer’s expectations and needs.
        </p>
        <p>
          On May 1st we are launching The Barbers Den club. Members will be entitled to a regular newsletter with regular offers and perks. We welcome any feedback our customers have to offer and are constantly looking to improve and enhance the customer’s experience.
        </p>
      </div>
    </>
  )
}

export default Home;