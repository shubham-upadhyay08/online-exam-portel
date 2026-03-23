function register(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Registration Successful");

window.location="login.html";
}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email===localStorage.getItem("email") && password===localStorage.getItem("password"))
{
window.location="dashboard.html";
}
else{
alert("Invalid Login");
}
}