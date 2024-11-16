let todoinput = document.getElementById("todoinput");
let addbtn = document.getElementById("addbtn");
let displayed = document.getElementById("display");

addbtn.addEventListener("click", ()=> {
    let input = todoinput.value;
    let tasks = JSON.parse(localStorage.getItem("todo")) ?? [];
    tasks.push({
        'task':input
    })
    localStorage.setItem("todo", JSON.stringify(tasks));
    console.log(tasks);
    todoinput.value='';
    displaytask();
})

let displaytask=()=>{
    let tasks = JSON.parse(localStorage.getItem("todo")) ?? [];
    let final='';
    tasks.forEach((element,i)=> {
        final+=`<li>${element.task}<i onclick="removetask(${i})" class="fa fa-xmark"></i></li>`;
    })
    displayed.innerHTML = final;
}
displaytask();

function removetask(index) {
    let tasks = JSON.parse(localStorage.getItem("todo")) ?? [];
    tasks.splice(index,1);
    localStorage.setItem("todo", JSON.stringify(tasks));
    displaytask();
}