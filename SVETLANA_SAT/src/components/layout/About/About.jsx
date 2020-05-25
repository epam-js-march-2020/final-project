import React, { Component } from 'react';
import Photo from '../Photo/Photo';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="home">
                <div className="main">
                <h1>-About Us-</h1>
                    <div className="about">
                        <div className="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <br />
                            Cum illo suscipit rem officia sequi ut ab, 
                            <br />
                            reiciendis maiores unde quas.
                            <br /> 
                            Deleniti nam cum eveniet atque repellat tenetur eos laborum numquam officiis?
                            <br />
                            Quos dolores voluptas tenetur velit reprehenderit sequi iste soluta 
                            <br />
                            laudantium nam obcaecati facere eveniet minus, 
                            <br />
                            at accusantium praesentium, id adipisci! Tenetur natus obcaecati 
                            <br />
                            recusandae voluptas fuga unde, laborum voluptatem perferendis quos dolor quae, 
                            <br />
                            nesciunt aspernatur dolore nulla numquam, quam molestiae velit explicabo quia quibusdam? 
                            <br />
                            Perspiciatis atque culpa voluptates facere.
                        </div>
                        <Photo/>
                    </div> 
                </div>   
            </div>
        )
    }
}

export default About
