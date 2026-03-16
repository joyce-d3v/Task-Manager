function addTask(){

let input = document.getElementById("taskInput")
let taskText = input.value

if(taskText === ""){
alert("Please enter a task")
return
}

let li = document.createElement("li")

li.innerHTML = `
<span>${taskText}</span>
<button class="delete" onclick="deleteTask(this)">X</button>
`

document.getElementById("taskList").appendChild(li)

input.value = ""

}

function deleteTask(button){
button.parentElement.remove()
}