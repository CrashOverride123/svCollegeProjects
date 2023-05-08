//============================================================================
// a callback function to check the user inputs
//============================================================================
const iValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('psw').value;
  fetch('/validation', {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === true) {
        location.href = './product.html';
      } else {
        alert(data);
      }
    });
};
//============================================================================
