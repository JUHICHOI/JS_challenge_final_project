const todoListForm = document.querySelector("#todo_list_form");
const todoInput = document.querySelector("#todo_list_form input");
const todoList = document.querySelector("#todo_list");

//saving todolist array
let todoArr = [];

//define save todoList
function saveTodo(){
    //change arr to string
    localStorage.setItem("todos", JSON.stringify(todoArr));

}

//define delete todoList
function deleteTodo(event){
    const delLi = event.target.parentElement;
    delLi.remove();
    toDoArr= todoArr.filter((todoList) => todoList.id !== parseInt(delLi.id));
    saveTodo();
}

//define show todoList on browser
function showTodo(newTodo){
    // console.log(newTodo);
    //making li, span, delete btn
    const todoLi = document.createElement("li");
    todoLi.setAttribute("id", newTodo.id);
    todoLi.setAttribute("class", "liClass");
    todoLi.id= newTodo.id;
    // console.log(todoLi.id);
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo.text;

    const delBtn = document.createElement("button");
    delBtn.setAttribute("id", "delBtn")
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", deleteTodo);

    todoLi.appendChild(todoSpan);
    todoLi.appendChild(delBtn);
    todoList.appendChild(todoLi);
}

//define todoListForm submit function
function todoSubmit(event){
    event.preventDefault();
    //todoInput value를 변수에 담기
    const newTodo = todoInput.value;
    todoInput.value = "";

    //사용자의 입력값 newTodo를 object로 만들어 배열에 넣기
    const todoObject = {
        id : Date.now(),
        text : newTodo,
    }
    // console.log(todoObject);

    todoArr.push(todoObject);
    showTodo(todoObject);
    saveTodo();
}

todoListForm.addEventListener("submit", todoSubmit);

const finalsaveTodo = localStorage.getItem("todos");
//if todo exist in localStorage
if(finalsaveTodo){
    //로컬스토리지에 있는 todo를 object로 변환
    const parseTodo = JSON.parse(finalsaveTodo);
    //이전에 값들도 배열에 저장하기 위함.
    todoArr = parseTodo;
    //object인 parseTodo의 아이템 하나하나를 가지고 실행할 함수
    parseTodo.forEach(showTodo);
}

showTodo()