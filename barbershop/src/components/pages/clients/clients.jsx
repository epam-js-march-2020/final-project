import React from 'react';
import './clients.css'

const haircuts = [
    {name: "shaggy big man",  imgSrc: "https://barber-shop.su/wp-content/uploads/2019/02/banner-4.png", id: 1},
    {name: "inglorious bastard",  imgSrc: "https://premier-s.ru/800/600/https/afmen.online/wp-content/uploads/2017/12/usi17.jpg", id: 2},
    {name: "fashionable Borodach",  imgSrc: "https://barber-shop.su/wp-content/uploads/2016/08/2.jpg", id: 3},
    {name: "oh my beard",  imgSrc: "https://nstyle.by/images/stories/strizhka-borody-i-usov/strizhka-borody-i-usov.jpg", id: 4},

]


const Haircuts = () => {
    
 const haircutMap = haircuts.map(haircut  => 
    <div className="haircut" key={haircut.id}>
    <h3>{haircut.name}</h3>
    <img src={haircut.imgSrc} alt={haircut.name}/>
    </div>
    )   
    
    return ( 
    <div className="haircuts">
    {haircutMap}
    </div> );
}
 
export default Haircuts;