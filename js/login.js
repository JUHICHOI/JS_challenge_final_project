const userLoginForm = document.querySelector("#user_login_form");
const userInput = document.querySelector("#user_input");
const grettingUser = document.querySelector("#greetingUser");

const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";

function loginSubmit(event){
    event.preventDefault();
    userLoginForm.classList.add(HIDDEN_CLASS);

    //로컬스토리지에 사용자 저장
    const userName = userInput.value;
    localStorage.setItem(USER_NAME, userName);
    fillGretting(userName);
}

//after login, show userName
function fillGretting(username){
    grettingUser.innerText = `Hi~ Welcome! ${username}`;
    grettingUser.classList.remove(HIDDEN_CLASS);

}

//check local storage
const saveUser = localStorage.getItem(USER_NAME);

//로컬스토리지에 저장된 유저명이 없을 때 hidden 제거하고 loginSubmit
if(saveUser === null){
    userLoginForm.classList.remove(HIDDEN_CLASS);
    userLoginForm.addEventListener("submit", loginSubmit);
}else{
    fillGretting(saveUser);
}