import React from 'react';
import './adminPanel.css';
import moment from 'moment';

const AdminPanel = (props) => {
let arr = [].concat(props.allUsers);
arr.splice(0,1);
arr = arr.filter(item => (item.booking[0]));

let sortedData = arr.sort((a,b) => a.booking[0].date < b.booking[0].date ? 1 : -1);
let sortedDateAndTime = 
sortedData.sort((a,b) => a.booking[0].date === b.booking[0].date && a.booking[0].time > b.booking[0].time ?  1: -1);

let data = sortedDateAndTime.map((item, index) => 
    <div key={index} className="admin-panel">
    <h2>{moment(item.booking[0].date).format('MMMM Do YYYY')}</h2>
    <b><p>{item.name} ({item.email})</p></b>
    <p>{item.booking[0].time}</p>
    <p>{item.booking[0].master}</p>
    <b><p>Services:</p></b>
    {item.services.map((item, index) => <p key={index}>{item}</p>)}
<h3 className="expired">{expired(item.booking[0].date, +(item.booking[0].time).slice(6, -3) )}</h3>
    </div>
    );

   
function expired(date, time)  {
     if (Date.now()+3*3600000 > date+3600000*time) {
         return 'Expired'
     } else return null;
}

function showAllBookingsHandler(event) {
    document.querySelectorAll('.expired').forEach(item => item.parentElement.style.display="inline-block");
    document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}

function showOnlyActiveBookingsHandler(event) {
    document.querySelectorAll('.expired')
        .forEach(item => item.innerText === 'Expired' ? item.parentElement.style.display="none" : null);
        document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');

}

    return ( <div className="admin">
        <h1>Admin Panel</h1>
        <h2>Bookings by Date:</h2>

        {data}
        <br/>
        <button className="active" 
    onClick={showAllBookingsHandler}>Show all bookings</button>
    
    <button onClick={showOnlyActiveBookingsHandler}>Show only active bookings</button>
    <div style={{'marginBottom': '20px'}}></div>
    </div> );
}
 
export default AdminPanel;