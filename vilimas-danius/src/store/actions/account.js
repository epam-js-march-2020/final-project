export function addAppointment(payload) {
  return { type: 'APPOINTMENT_ADD', payload };
}
export function removeAppointment(payload) {
  return { type: 'APPOINTMENT_REMOVE', payload };
}
