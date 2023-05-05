//============================================================================
//
//============================================================================
iValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('psw').value;
  if (email.indexOf(`@`) == -1 && password.length == '') {
    alert('Please type your information');
  } else {
  }
};
window.addEventListener('inspection', iValid);
document.getElementById('exec').addEventListener('click', iValid);
