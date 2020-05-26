export function addUser(payload) {
  return { type: 'USER_ADD', payload };
}
export function updateUser(payload) {
  return { type: 'USER_UPDATE', payload };
}
