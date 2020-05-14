import React from 'react';
import logo from '../../img/logo.png';

// const Logo = ({ logoClassName }) => {
//     return (
//         <svg className={logoClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 341"><path d="M32.1 276.3c2.5 0 4.9.2 7.2.6 2.3.4 4.4 1.1 6.2 1.9 1.8.9 3.2 2.1 4.3 3.5 1.1 1.4 1.6 3.2 1.6 5.3 0 2.5-.8 4.5-2.3 5.9-1.6 1.4-3.4 2.4-5.6 3.2v.2c2.5.8 4.7 2 6.4 3.6 1.8 1.6 2.6 4 2.6 7.1 0 1.6-.4 3.1-1.1 4.5-.7 1.4-1.7 2.6-3.1 3.6-1.4 1-3.1 1.8-5.1 2.4-2 .6-4.3.9-6.8.9H6.7v-1.5c1.5 0 2.3-.5 2.3-1.5v-36.8c0-1-.8-1.5-2.3-1.5v-1.5h25.4zm1.6 16.7c2.4 0 4.4-.3 6-.9 1.6-.6 2.4-1.9 2.4-3.9s-.8-3.3-2.4-3.9c-1.6-.6-3.6-.9-6-.9H18.2v9.7h15.5zm0 18.4c3.4 0 5.8-.5 7.3-1.6s2.2-2.4 2.2-4.2c0-1.7-.7-3.1-2.2-4.2-1.5-1.1-3.9-1.6-7.3-1.6H18.2v11.5h15.5zm26.5 6c.7-.1 1.3-.5 1.7-1.1.4-.6.8-1.3 1.2-2l15-31.5c.4-.7.7-1.3 1-1.9.3-.6.4-1.1.4-1.5 0-.5-.2-.9-.6-1.1-.4-.2-.8-.4-1.2-.5v-1.5h13.7v1.5c-.4.1-.8.3-1.1.4-.4.2-.6.6-.6 1.2 0 .4.1.9.3 1.3.2.4.5 1 .9 1.7l16.8 33c.3.6.6 1 1.1 1.3.5.3 1 .5 1.6.8v1.5H96.1v-1.5c.2 0 .5-.1.8-.2.3-.2.5-.4.5-.7 0-.5-.2-1.2-.6-2.1l-3.1-6H73.9l-2.9 5.8c-.5 1.1-.8 1.9-.8 2.4 0 .6.5.9 1.5.9v1.5H60.2v-1.7zm30.5-15l-6.8-15.1-7.6 15.1h14.4zm56-26.1c2.6 0 4.9.2 7 .7s3.9 1.2 5.4 2.2c1.5 1 2.7 2.3 3.5 3.9.8 1.6 1.2 3.6 1.2 5.9 0 3.6-1.1 6.3-3.2 8.2-2.1 1.9-4.9 3.2-8.5 3.8l10.8 15.4c.4.5.8.9 1.3 1 .5.1 1 .2 1.4.2v1.5h-15.1v-1.5c.5 0 .9-.1 1.3-.2.4-.2.5-.4.5-.6 0-.3-.1-.6-.3-.9-.2-.4-.5-.8-1-1.4l-8.9-12.6h-11.6V316c0 .5.2.9.5 1.1.4.2 1 .4 1.9.4v1.5h-14v-1.5c1.6 0 2.3-.5 2.3-1.5v-36.8c0-1-.8-1.5-2.3-1.5v-1.5h27.8zm-2.1 18.9c1.9 0 3.6-.1 4.9-.4 1.3-.3 2.3-.7 3.1-1.3.8-.5 1.3-1.2 1.6-1.9.3-.7.5-1.5.5-2.4 0-.9-.2-1.7-.5-2.4s-.9-1.4-1.6-1.9c-.8-.5-1.8-1-3.1-1.3-1.3-.3-2.9-.4-4.9-.4h-14v12h14zm58.4-18.9c2.5 0 4.9.2 7.2.6 2.3.4 4.4 1.1 6.2 1.9 1.8.9 3.2 2.1 4.3 3.5 1.1 1.4 1.6 3.2 1.6 5.3 0 2.5-.8 4.5-2.3 5.9-1.6 1.4-3.4 2.4-5.6 3.2v.2c2.5.8 4.7 2 6.4 3.6 1.8 1.6 2.6 4 2.6 7.1 0 1.6-.4 3.1-1.1 4.5-.7 1.4-1.7 2.6-3.1 3.6-1.4 1-3.1 1.8-5.1 2.4-2 .6-4.3.9-6.8.9h-29.7v-1.5c1.5 0 2.3-.5 2.3-1.5v-36.8c0-1-.8-1.5-2.3-1.5v-1.5H203zm1.7 16.7c2.4 0 4.4-.3 6-.9 1.6-.6 2.4-1.9 2.4-3.9s-.8-3.3-2.4-3.9c-1.6-.6-3.6-.9-6-.9h-15.5v9.7h15.5zm0 18.4c3.4 0 5.8-.5 7.3-1.6s2.2-2.4 2.2-4.2c0-1.7-.7-3.1-2.2-4.2-1.5-1.1-3.9-1.6-7.3-1.6h-15.5v11.5h15.5zm71.7-26.4c0-.6-.2-1-.7-1.3-.5-.3-1.3-.4-2.4-.4h-26.2v10H263c1.1 0 1.9-.1 2.5-.4.6-.3.9-1.1.9-2.3h1.5v12.6h-1.5c0-1.2-.3-2-.9-2.4-.6-.4-1.4-.5-2.5-.5h-15.9v11.2h27.1c.8 0 1.5-.2 2-.6.5-.4.8-.9.8-1.5h1.5v11.1H277c0-.8-.3-1.3-.8-1.4-.5-.1-1.2-.2-2-.2h-37.7v-1.5c.4 0 .7-.1 1-.4.3-.2.4-.6.4-1.1v-36.8c0-.5-.1-.9-.4-1.1-.3-.2-.6-.4-1-.4v-1.5h36.9c1.1 0 1.9-.2 2.4-.5s.7-.8.7-1.4h1.5V285h-1.6zm41.2-8.7c2.6 0 4.9.2 7 .7 2.1.5 3.9 1.2 5.4 2.2 1.5 1 2.7 2.3 3.5 3.9.8 1.6 1.2 3.6 1.2 5.9 0 3.6-1.1 6.3-3.2 8.2-2.1 1.9-4.9 3.2-8.5 3.8l10.8 15.4c.4.5.8.9 1.3 1 .5.1 1 .2 1.4.2v1.5h-15.1v-1.5c.5 0 .9-.1 1.3-.2.3-.2.5-.4.5-.6 0-.3-.1-.6-.3-.9-.2-.4-.5-.8-1-1.4l-8.9-12.6h-11.6V316c0 .5.2.9.5 1.1.4.2 1 .4 1.9.4v1.5h-14v-1.5c1.6 0 2.3-.5 2.3-1.5v-36.8c0-1-.8-1.5-2.3-1.5v-1.5h27.8zm-2.1 18.9c1.9 0 3.6-.1 4.9-.4 1.3-.3 2.3-.7 3.1-1.3.8-.5 1.3-1.2 1.6-1.9s.5-1.5.5-2.4c0-.9-.2-1.7-.5-2.4s-.9-1.4-1.6-1.9c-.8-.5-1.8-1-3.1-1.3-1.3-.3-2.9-.4-4.9-.4h-14v12h14zm36.6 10.3l.8.4c0 .5.1.9.3 1.3.4.6 1.1 1.3 2.2 1.9 1.1.6 2.4 1.2 3.8 1.7s2.9.9 4.5 1.2c1.6.3 3 .4 4.2.4.9 0 2.1-.1 3.6-.2s2.9-.4 4.3-.9c1.4-.4 2.6-1 3.6-1.8s1.5-1.8 1.5-3-.5-2.2-1.4-2.8c-.9-.6-2.2-1-3.7-1.3-1.5-.3-3.3-.4-5.3-.5-2-.1-4-.2-6-.4-2.1-.2-4.1-.4-6-.8-2-.4-3.7-1-5.3-1.9-1.5-.9-2.8-2.1-3.7-3.6-.9-1.5-1.4-3.5-1.4-6 0-1.7.4-3.3 1.2-4.9.8-1.6 2-3 3.6-4.3 1.6-1.2 3.7-2.3 6.2-3 2.5-.8 5.4-1.2 8.7-1.2 2.9 0 5.3.2 7.5.6 2.1.4 3.9.9 5.5 1.4 1.5.5 2.8.9 3.9 1.4 1.1.4 1.9.6 2.6.6.8 0 1.3-.2 1.6-.5l1 .6-5.6 10.1-.8-.3c-.1-.8-.3-1.4-.6-1.9-.4-.6-1.1-1.3-2.1-1.9-1-.6-2.2-1.2-3.5-1.7-1.3-.5-2.8-.9-4.4-1.2-1.6-.3-3.1-.4-4.7-.4-1.2 0-2.4.1-3.7.3-1.3.2-2.4.5-3.4.9s-1.9.9-2.6 1.5c-.7.6-1 1.4-1 2.3 0 1.3.5 2.3 1.4 2.9.9.6 2.2 1.1 3.7 1.5 1.5.3 3.3.5 5.3.6 2 .1 4 .2 6 .4 2.1.2 4.1.4 6 .9 2 .4 3.7 1.1 5.3 1.9 1.5.9 2.8 2.1 3.7 3.6.9 1.5 1.4 3.5 1.4 5.9 0 2.8-.7 5.1-2.2 6.9-1.5 1.8-3.3 3.2-5.5 4.2s-4.6 1.7-7.2 2.1c-2.6.4-5 .5-7.2.5-3.1 0-5.7-.2-7.7-.5-2.1-.4-3.8-.8-5.2-1.3-1.4-.5-2.5-1-3.3-1.4-.8-.4-1.5-.6-2.1-.6-.4 0-.7.2-1.1.6l-1.1-.6 4.4-9.7zm88.4-26.3c0-1-.6-1.5-1.8-1.5v-1.5h12.5v1.5c-.4 0-.7.1-1 .4-.3.2-.4.6-.4 1.1V316c0 .5.1.9.4 1.1.3.2.6.4 1 .4v1.5h-12.5v-1.5c1.2 0 1.8-.5 1.8-1.5v-15.2h-26.1V316c0 .5.1.9.4 1.1.3.2.6.4 1 .4v1.5h-12.2v-1.5c1 0 1.5-.5 1.5-1.5v-36.8c0-1-.5-1.5-1.5-1.5v-1.5h12.2v1.5c-.4 0-.7.1-1 .4-.3.2-.4.6-.4 1.1V293h26.1v-13.8zm50-3.4c3 0 6 .4 9.1 1.3 3.1.9 5.9 2.2 8.4 4 2.5 1.8 4.6 4 6.2 6.8 1.6 2.7 2.4 6 2.4 9.7s-.8 7-2.4 9.7c-1.6 2.7-3.7 5-6.2 6.8-2.5 1.8-5.3 3.1-8.4 3.9-3.1.8-6.1 1.2-9.1 1.2s-6-.4-9.1-1.2c-3.1-.8-5.9-2.1-8.4-3.9-2.5-1.8-4.6-4-6.2-6.8s-2.4-6-2.4-9.7.8-7 2.4-9.7c1.6-2.7 3.7-5 6.2-6.8 2.5-1.8 5.3-3.1 8.4-4 3.1-.9 6.1-1.3 9.1-1.3zm0 7.4c-2.1 0-4.1.3-6.2 1-2.1.6-3.9 1.6-5.5 2.8-1.6 1.2-3 2.7-4 4.5-1 1.8-1.5 3.8-1.5 6.1s.5 4.3 1.5 6.1c1 1.8 2.4 3.3 4 4.5 1.6 1.2 3.5 2.1 5.5 2.8 2.1.6 4.1 1 6.2 1 2.1 0 4.1-.3 6.2-1 2.1-.6 3.9-1.6 5.5-2.8 1.6-1.2 3-2.7 4-4.5 1-1.8 1.5-3.8 1.5-6.1s-.5-4.3-1.5-6.1c-1-1.8-2.4-3.3-4-4.5-1.6-1.2-3.5-2.1-5.5-2.8-2.1-.6-4.2-1-6.2-1zm37.6 35.7v-1.5c2 0 3-.5 3-1.5v-36.8c0-1-1-1.5-3-1.5v-1.5h28.5c5.2 0 9.3 1 12.2 2.9 3 1.9 4.5 5.2 4.5 9.8 0 4.6-1.5 7.8-4.5 9.8-3 1.9-7 2.9-12.2 2.9h-16.3V316c0 1 .9 1.5 2.6 1.5v1.5h-14.8zm29.5-24.8c1.8 0 3.3-.4 4.6-1.1 1.3-.7 1.9-2.1 1.9-4.1 0-2.1-.6-3.4-1.9-4.1-1.3-.7-2.8-1.1-4.6-1.1h-17.3v10.4h17.3zm-108.7-43.9c-116.1-55.9-221.6-43.9-310.4-20.3-1-1.3-1.9-2.6-2.9-3.9 90.7-27.5 199.4-42.2 319.3 12.8l-6 11.4z"/><path d="M448.9 250.2c-116.1-55.9-221.6-43.9-310.4-20.3-1-1.3-1.9-2.6-2.9-3.9 90.7-27.5 199.4-42.2 319.3 12.8l-6 11.4z" fill="none" stroke="" strokeWidth="8.181" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/><path d="M158.9 246.2c-8.7-4-18.5-6.7-25.7-12.6-4.6-3.9 6.5-23.8 14.2-27.9 30.9-16.3 62.3-32 92.6-49.3 42.8-24.4 83.4-52.1 119.9-85.3 3.1-2.8 6.5-6.6 10.1-7 5.2-.6 12 0 15.6 3.1 2.7 2.4 2.6 9.6 1.6 14.2-.8 3.6-4.5 7-7.4 9.8-40.4 38.7-82.8 74.5-129.4 104.5-13.1 8.4-26.5 16.4-40.4 23.9-9.6 5.2-19.4 10.1-29.4 14.7-6.8 3.2-13.7 6-20.6 9-.4.9-.8 1.9-1.1 2.9z"/><path d="M359.4 66.5c-7.4 6.7-11.4 10.3-15.5 14-15.3-7.5-30.4-14.6-45.3-22.2-10.3-5.2-18.4-4.9-26.3 5.1-2.9 3.7-11.2 6.2-15.9 5-38.7-10.3-77.2-21.5-115.7-32.7-4.3-1.3-8.6-3.4-12.2-6.1-7.6-5.8-9.4-13.8-5-22.3C127.8-1 135-1 143 1.5c37.4 11.7 74.7 23.9 112.5 34.7 19.2 5.5 39.4 7.5 58.7 12.8 14.6 4 28.5 10.9 45.2 17.5zm-140-32.2c-.2 1-.5 1.9-.7 2.9 17.2 4.4 34.3 8.8 51.5 13.2.2-.9.5-1.8.7-2.8-17.2-4.4-34.3-8.8-51.5-13.3z"/><path d="M219.4 34.3c17.2 4.4 34.3 8.9 51.5 13.3-.2.9-.5 1.8-.7 2.8-17.2-4.4-34.3-8.8-51.5-13.2.2-1 .4-1.9.7-2.9z" fill=""/><path stroke="" strokeWidth="1.238" strokeMiterlimit="10" d="M208.6 221.2l40.4-23.8"/></svg>
//     )
// }

const Logo = ({ logoClassName }) => {
    return (
        <img alt='logo' className={logoClassName} src={logo} />    
    )
}

export default Logo;