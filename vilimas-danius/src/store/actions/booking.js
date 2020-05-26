export function activateBooking(payload) {
  return { type: 'BOOKING_ACTIVATE', payload };
}
export function closeBooking() {
  return { type: 'BOOKING_CLOSE' };
}
