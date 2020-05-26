export function loginToggle() {
  return { type: 'LOGIN_TOGGLE' };
}
export function loginSuccess(payload) {
  return { type: 'LOGIN_SUCCESS', payload };
}
export function loginFailure() {
  return { type: 'LOGIN_FAILURE' };
}
export function log_Out() {
  return { type: 'LOGIN_OUT' };
}
