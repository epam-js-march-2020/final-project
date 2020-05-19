import React from 'react';
import Footer from '../Footer/Footer';

function Contacts() {
    return (
        <>
            <iframe title='map' className='main_contacts_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.567876821416!2d-0.18235257072275365!3d52.32922041831667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877dd3001d7152b%3A0x26c6855efa98b7a4!2zMzMgSGlnaCBTdCwgSHVudGluZ2RvbiBQRTI5IDNUQiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1589910940087!5m2!1sru!2sru" ></iframe>
            <Footer footerClassName='footer-contacts footer-dark' />
        </>

    )
}

export default Contacts;