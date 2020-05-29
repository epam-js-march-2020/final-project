import React from 'react';
import BarberFace from './static/barber.png';

const Home = () => {
  return (
    <div className="main_content">
      <div className="home_head">
        <h1>Welcome to the Baggins Barbershop!</h1>
      </div>
      <div className="home_body">
        <p>My name is Bilbo Baggins. This is my barbershop.</p>
        <div>
          <img src={BarberFace} alt="Barber Face" />
          <span className="home_body_img_caption">
            Here is my face when I see uncut head.
          </span>
        </div>
        <p>
          Don't want to see this face anymore? I'm pleasure to provide you my
          services. You can find all of them by click "Services" link in
          navigation bar above.
        </p>
        <p>
          To make a reserve to one of services you should click on "Find out
          more" below service you want, then "Reserve time" and choose date and
          time.
        </p>
        <p>
          <strong>
            Note, that if you are not signed in, you'll not be able to cancel
            your reservation.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
