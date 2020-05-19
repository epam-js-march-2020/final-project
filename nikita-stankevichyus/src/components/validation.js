
export const validateName = (name) => {

  if (name.length >= 3) {
    return true;
  } else {
    return false;
  }

}


export const validatePassword = (password) => {
  
  if (password.length >= 5) {
    return true;
  } else {
    return false;
  }
}

export const validateEmail = (email) => {
  let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(regExpEmail)){
    return true;
  } else {
    return false;
  };
}