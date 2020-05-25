import React, { Component } from 'react';
import './Beard.css';
import { Link } from 'react-router-dom';

class Beard extends Component {
    render() {
        return (
            <div className="haircut">
                {/* <img src={require('./nathon-oski-fE42nRlBcG8-unsplash.jpg')} alt="" className="img1"/> */}
                {/* <div className="col">
                    <img src={require('./michelle-bonkosky-QjrZki0ZeWo-unsplash.jpg')} alt="" className="img2"/>
                    <img src={require('./arthur-humeau-Twd3yaqA2NM-unsplash.jpg')} alt="" className="img3"/>
                </div> */}
                <div className="col3">
                   
                    <span className="description">
                    <h1>Beard & Moustache</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum temporibus illo eaque inventore repellat at! Obcaecati officia, 
                        vitae repellendus autem dolorum recusandae at fugit? Veritatis, 
                        adipisci animi.
                        Expedita unde officia doloremque quae molestiae? Beatae, veniam
                        enim dicta fuga magnam dolor?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum temporibus illo eaque inventore repellat at! Obcaecati officia, 
                        vitae repellendus autem dolorum recusandae at fugit? Veritatis, 
                        adipisci animi.
                        Expedita unde officia doloremque quae molestiae? Beatae, veniam
                        enim dicta fuga magnam dolor?
                        <Link to="/" className="btn-book btn">
                        Booking
                    </Link>
                        </span>
                    
                    {/* < Form /> */}
                </div>
               
            </div>
        )
    }
}

export default Beard;
