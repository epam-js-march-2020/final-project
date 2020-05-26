const initState = {
  isBooking: false,
  BookingId: null,
};

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'BOOKING_ACTIVATE':
      return {
        isBooking: true,
        BookingId: action.payload,
      };
    case 'BOOKING_CLOSE':
      return {
        isBooking: false,
        BookingId: null,
      };
    default:
      return state;
  }
};
export default bookReducer;
