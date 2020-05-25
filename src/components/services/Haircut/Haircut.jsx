import React, { Component } from 'react';
import Form from '../Form/Form'
import './Haircut.css';
import { Link } from 'react-router-dom';


class Haircut extends Component {
    render() {
        return (
            <div className="haircut">
                {/* <img src={require('./megan-bagshaw-YmaaUNbHHtw-unsplash.jpg')} alt="" className="img1"/> */}
                {/* <div className="col">
                    <img src={require('./erik-lucatero-d2MSDujJl2g-unsplash.jpg')} alt="" className="img2"/>
                    <img src={require('./nathan-fertig-5EIW3DDX6dw-unsplash.jpg')} alt="" className="img3"/>
                </div> */}
                {/* <div className="col3"> */}
                    
                    <span className="description">
                    <h1>Haircut</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum temporibus illo eaque inventore repellat at! Obcaecati officia, 
                        vitae repellendus autem dolorum recusandae at fugit? Veritatis, 
                        adipisci animi.
                        Expedita unde officia doloremque quae molestiae? Beatae, veniam
                        enim dicta fuga magnam dolor?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                        
                        <Link to="/" className="btn">
                        Booking
                    </Link>
                        </span>
                   
                    {/* < Form /> */}
                {/* </div> */}
               
            </div>
        )
    }
}

export default Haircut
