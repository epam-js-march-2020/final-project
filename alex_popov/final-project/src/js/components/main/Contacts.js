import React from 'react';
import Footer from '../Footer/Footer';

function Contacts() {
    return (
        <>
            <iframe title='map' className='main_contacts_map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2438.280938028322!2d-0.17778170367431637!3d52.32904932004724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877dd2ffedcb985%3A0x4fea595874a46905!2zMjkgSGlnaCBTdCwgSHVudGluZ2RvbiBQRTI5IDNUQiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1589626613254!5m2!1sru!2sru" ></iframe>
            <Footer footerClassName='footer-contacts footer-dark' />
        </>
    )
}

export default Contacts;