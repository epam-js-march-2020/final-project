import React from 'react';
import './contacts.css';
const Contacts = () => {
    return ( 
    <div className="contacts">
        <h3>Our phone: +112345678</h3>
        <h4>2-44 Cloverdale Ct N 2-44 Cloverdale Ct N, Palm Coast, FL 32137</h4>
<p>We work every day from 10 a.m. to 7 p.m.</p>
<iframe title='googlemaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8284069369784!2d-81.20477728600396!3d29.579595582053816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e695d2219c1203%3A0x39d35e92c37c80b0!2zMi00NCBDbG92ZXJkYWxlIEN0IE4sIFBhbG0gQ29hc3QsIEZMIDMyMTM3LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1590397772333!5m2!1sru!2sru" 
style={{
    'width': '600px',
    'height': '450px',
    'border': 0
}} allowFullScreen={true} aria-hidden={false} tabIndex="0" />

    </div> );
}
 
export default Contacts;