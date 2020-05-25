import React from 'react'
import './home.css';
import Clients from '../clients/clients';
import FeedbackList from '../../feedbackList/feedbackList'

const Home = ({username, users}) => {
    return ( 
    <div className="home">
    <p className="caliostro"><b  style={{textAlign: 'center'}}>{username.length > 0 ? `Welcome to React Barbershop, ${username}!` : 'Welcome to React Barbershop!'} </b></p><hr/>
    <p>We use most modern technologies to make your haircut, our best masters
are Mr. Hooks, Mr. Redux and Mr. Webpack. But we have Mister Vanilla also if you prefer traditional approach</p><br/>    
<h3 className="caliostro">Our happy clients:</h3>
<Clients /> 
<FeedbackList users={users} />
    </div>
    
    );
}
 
export default Home;