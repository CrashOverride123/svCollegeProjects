//============================================================================
//
//============================================================================
//============================================================================
// checking to see if the user is trying to login or just playing around
//============================================================================
// const iValid = () => {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('psw').value;
//   if (email.indexOf(`@`) == -1 && password.length == '') {
//     alert('Please type your information');
//   } else {
//   }
// };
//==================================================================================
// added an event listener to index.html for better performance from the index.html
//==================================================================================
// window.addEventListener('inspection', iValid);
// document.getElementById('exec').addEventListener('click', iValid);
//==================================================================================
// now we must check whether the user exists in the db or not
//==================================================================================
// const iExists = () => {};


const register = (event) => {
    console.log('start');
    event.preventDefault()

    const name = document.forms['signUp_form']['name'].value;
    const email = document.forms['signUp_form']['email'].value;
    const password = document.forms['signUp_form']['password'].value;

    if (!name || !email || !password) {
        return false;
    }
    fetch('/addUser', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log({data});
            if (data.inUse == 'Email is already taken') {

                   alert('Email is already taken');
            } else {

                localStorage.setItem("userId", data.user._id)
                location.href = data.redirect;
            }
        })
        .catch((err) => {
            console.error(err);
        })
        return true;
}
