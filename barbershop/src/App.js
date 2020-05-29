import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import ServicesList from './components/ServicesList';
import Service from './components/Service';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  // localStorage.setItem('login', '');
  // localStorage.setItem('password', '');
  // localStorage.setItem('isAuth', false);
  // localStorage.setItem(
  //   'servicesList',
  //   JSON.stringify([
  //     { id: 1, title: 'Man haircut', description: 'Different haircuts for all creatures of this world. NOT FOR HOBBITS!', price: 1000, img_src: "https://www.elvesdoitbetter.com/legolas/12.jpg" },
  //     { id: 2, title: 'Hobbit haircut', description: 'Only ONE type of haircut for hobbits.', price: 500, img_src: "https://yt3.ggpht.com/a/AGF-l788IYws6inqRPerNZujfc8Ig0a_SH8E8huy=s900-c-k-c0xffffffff-no-rj-mo" },
  //     { id: 3, title: 'Beard shave', description: 'Choose beard shave you like! For dwarfs price is doubled.', price: 5000, img_src: "https://pbs.twimg.com/media/CW6w33kUoAAeRxK.jpg" },
  //   ])
  // );
  // localStorage.setItem('reservations', JSON.stringify([]));

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} /> >
          <Route exact path="/services" component={ServicesList} />
          <Route path="/services/:id" component={Service} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
