//============================================================================
// checking to see if the user is trying to login or just playing around
//============================================================================
const button = document.getElementById('exec');
//============================================================================
button.addEventListener('click', async (event) => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (!name.value || !email.value || !password.value) {
    throw new Error(alert('You must provide all of the required fields!!'));
  }

  console.log({ name, email, password });

  console.log('click');

  const url = '/addUser';

  const fetchOptions = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  };

  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    if (data.result.error) {
      alert('Email already exists...');
    } else {
      window.location.href = '/';
    }

    console.log(result);
  } catch (err) {
    console.error(err);
    window.location.href = '/';
  }
});
//============================================================================
