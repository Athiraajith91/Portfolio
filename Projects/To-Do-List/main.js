function addTask(){

let task=document.getElementById("add-item");
let taskText=task.value;

if(taskText ==="") return;

let item=document.createElement("li");

            item.innerHTML = `
                <span onclick="this.parentElement.classList.toggle('completed')">${taskText}</span>
                <span class="delete-btn" onclick="this.parentElement.remove()">X</span>
            `;

            document.getElementById("taskList").appendChild(item);
          task.value = "";

}

  
