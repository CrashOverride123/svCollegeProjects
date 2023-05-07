//============================================================================
// checking to see if the user is trying to login or just playing around
//============================================================================
const iValid = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    fetch('/validation', {
        headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then((data) => {
        if (data === true) {
            location.href = '/'
        } else {
            alert(data);
        }
    
    })
}