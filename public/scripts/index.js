//==================================================================================
// next we check if the input fields were entered or left blank
//==================================================================================
const isEmpty = () => {
 //================================================================================   
    const email = document.getElementById('email');
    const password = document.getElementById('psw');
 //================================================================================   
    if (!email || password == '') {
        alert("Please don't leave\n" + "Email" + " " + " & " + "Password" + " " + "Empty" );
    } else {
        
    }
//================================================================================
}
window.addEventListener('inspection',isEmpty,);
document.getElementById('exec').addEventListener('click', isEmpty);
//================================================================================
// now we check if the user entered the correct length of his info
//================================================================================
