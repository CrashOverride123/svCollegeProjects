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



// const register = (event) => {
//     event.preventDefault()

//     const name = document.forms['signUp_form']['name'].value;
//     const email = document.forms['signUp_form']['email'].value;
//     const password = document.forms['signUp_form']['password'].value;

//     // if (!name || !email || !password) {
//     //     return false;
//     // }

//     fetch('/addUser', {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "post",
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             password: password,
//         })
//     })
//         .then(res => res.json())
//         .then(data => {

//             if (data.inUse == 'Email is already taken') {

//                 alert('Email is already taken');

//             } else {

//                 location.href = data.redirect;
//                 localStorage.setItem("userId", data.user._id)
//             }
//         })
//         .catch(console.log)
//     return true;
// }


const button = document.getElementById('exec');

button.addEventListener('click', async (event) => {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!name.value || !email.value || !password.value) {
        throw new Error("invalid input");
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
        })
    }

    try {
        const response = await fetch(url, fetchOptions)
        const data = await response.json();

        if (data.result.error) 
        {
            alert('Email already exists...');
        }
        else 
        {
            window.location.replace('/');
        }

        console.log(result);

    }
    catch (err) 
    {
        throw new Error(err);
    }
})