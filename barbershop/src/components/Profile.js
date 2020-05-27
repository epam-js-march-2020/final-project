import React from 'react';

const Profile = () => {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  const user = isAuth ? localStorage.getItem('login') : 'guest';
  const [reservations, setReservations] = React.useState(
    JSON.parse(localStorage.getItem('reservations'))
  );

  const getUserReservations = (reservations, user) => {
    let userReservations = [];

    reservations.forEach((reservation) => {
      if (reservation.user === user) {
        userReservations.push(reservation);
      }
    });
    return userReservations;
  };

  const userReservations = getUserReservations(reservations, user);

  const removeReservation = (reservation) => {
    setReservations(reservations.filter((res) => res !== reservation));
    localStorage.setItem('reservations', JSON.stringify(reservations));
  };

  return (
    <div>
      <div>Welcome, {user}</div>
      {userReservations.length > 0 ? (
        <div>
          <div>Your reservations:</div>
          <ul>
            {userReservations.map((reservation, index) => {
              return (
                <li key={index}>
                  <span>{reservation.service}</span>
                  {isAuth && (
                    <button onClick={() => removeReservation(reservation)}>
                      Cancel a reservation
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>You have no reservations</div>
      )}
    </div>
  );
};

export default Profile;
