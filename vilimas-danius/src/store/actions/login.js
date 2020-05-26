export function loginToggle() {
  return { type: 'LOGIN_TOGGLE' };
}
export function loginSuccess(payload) {
  return { type: 'LOGIN_SUCCESS', payload };
}
export function loginFailure() {
  return { type: 'LOGIN_FAILURE' };
}
