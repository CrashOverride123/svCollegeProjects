//============================================================================
// a callback function to check the user inputs
//============================================================================
const iValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('psw').value;
  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }
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
      if (data.result === true) {
        sessionStorage.setItem('cUser', data.name);
        location.href = './product.html';
      } else {
        alert(data);
      }
    });
};
//============================================================================
const submitBtn = document.getElementById('exec');
submitBtn.addEventListener('click', iValid);
