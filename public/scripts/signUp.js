//============================================================================
//
//============================================================================
//============================================================================
// checking to see if the user is trying to login or just playing around
//============================================================================
const iValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('psw').value;
  if (email.indexOf(`@`) == -1 && password.length == '') {
    alert('Please type your information');
  } else {
  }
};
//==================================================================================
// added an event listener to index.html for better performance from the index.html
//==================================================================================
window.addEventListener('inspection', iValid);
document.getElementById('exec').addEventListener('click', iValid);
//==================================================================================
// now we must check whether the user exists in the db or not
//==================================================================================
const iExists = () => {};
