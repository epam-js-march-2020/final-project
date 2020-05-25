import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div>
                        &copy;&nbsp;
                        <a href="http://www.freepik.com" className="copy">
                            2019 logo by dgim-studio/photos by Freepik
                        </a>
                    </div>
                    <div className="icons">
                        <Link to="#" className="social facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="#" className="social instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="social youtube">
                            <i className="fab fa-youtube-square"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
