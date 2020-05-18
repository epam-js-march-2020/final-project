export const defaultState = {
  navigation: {
    atHome: true,
    atProfile: false,
    atServices: false,
  },
  user: {
    loged: false,
    name: '',
    secondName: '',
    email: '',
    services: [],
  },
  modals: {
    fadeOn: false,
    signUp: false,
    logIn: false,
    addService: false,
    editName: false,
    editSecondName: false,
    editEmail: false,
    bufferService: ''
  }
}