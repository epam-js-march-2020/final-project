import React from 'react';

const Profile = () => {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  const user = isAuth ? localStorage.getItem('login') : 'guest';
  const [reservations, setReservations] = React.useState(
    JSON.parse(localStorage.getItem('reservations'))
  );

  const getUserReservations = (user) => {
    return reservations.filter((res) => res.user === user);
  };

  const removeReservation = (reservation) => {
    setReservations(reservations.filter((res) => res !== reservation));
  };

  const userReservations = getUserReservations(user);

  localStorage.setItem('reservations', JSON.stringify(reservations));

  return (
    <div className="main_content">
      <div className="profile_head">
        <h1>Welcome, {user}!</h1>
      </div>
      <div className="profile_body">
        {userReservations.length > 0 ? (
          <div>
            <div>
              <h3>Your reservations:</h3>
            </div>
            {userReservations.map((reservation, index) => {
              return (
                <div key={index} className="profile_body_reservation">
                  <span>
                    <strong>{reservation.service}</strong>
                  </span>
                  <span>Date: {reservation.date}</span>
                  <span>Time: {reservation.time}</span>
                  {isAuth && (
                    <button
                      className="button"
                      onClick={() => removeReservation(reservation)}
                    >
                      Cancel a reservation
                    </button>
                  )}
                  <hr />
                </div>
              );
            })}
          </div>
        ) : (
          <div>You have no reservations</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
