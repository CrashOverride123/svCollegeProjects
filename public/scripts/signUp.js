//============================================================================
//
//============================================================================
const userEmail = document.getElementByName('email');
const userPassword = document.getElementByName('psw');
const iCheck = () => {
  userEmail.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      //handle error here
    }
    //if a user was found, that means the user's email matches the entered email
    if (user) {
      const err = new Error(
        'A user with that email has already registered. Please use a different email..'
      );
      err.status = 400;
      return next(err);
    } else {
      //code if no user with entered email was found
    }
  });
  userPassword.findOne(
    { password: req.body.password },
    function (err, password) {
      if (password) {
        const err = new Error('Password Does Not Match');
      } else {
        location.href = '/public/index.html';
      }
    }
  );
};
