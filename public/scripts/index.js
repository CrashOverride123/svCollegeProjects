const validLogin = () => {
  const userEmail = document.forms['form-login']['email'].value;
  const userPassword = document.forms['form-login']['psw'].value;
  const errorSymbol = '*';

  if (userEmail.length == '') {
    document.getElementsByName(
      'email'
    ).innerHTML = `${errorSymbol} Please, Enter Your Email`;
    return false;
  } else if (userPassword == '') {
    //Password
    document.getElementByName(
      'psw'
    ).innerHTML = `${errorSymbol} Please, Enter Your Password`;
    return false;
  }
};
