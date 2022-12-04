const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIEEEN_KEY = "hidden";

function loginUser(info){
    info.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem("UserName", userName);
    loginForm.classList.add(HIEEEN_KEY);

    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.classList.remove(HIEEEN_KEY);
    greeting.innerText = `Hello! ${userName}`;
}

const savedName = localStorage.getItem("UserName");

if(savedName == null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginUser);
}else{
    paintGreeting(savedName)
}