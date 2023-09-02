
let task_list = [];

function populateTaskList() {
    let task = localStorage.getItem("tasks");

    if (task != null) {
        task_list = JSON.parse(task);
        let list_element = document.getElementById("list");

        for (let index = 0; index < task_list.length; index++) {
            let title_value = task_list[index].title;
            let place_value = task_list[index].place;
            list_element.innerHTML += "<li class='fade-in'><span class='title-list'>" + title_value + "</span> <span id='title2'>" + place_value + "</span> <img onclick='rmv(this)' class='trash-2' src='/img/icons8-trash-24.png' alt='trash'>";
        }
    }
}

function clearTasks() {
    localStorage.clear();
    location.reload();
}

function rmv(element) {
    // Remover visualmente
    element.parentNode.remove();

    // Remover do localStorage
    let titleToBeRemoved = element.parentNode.querySelector('.title-list').textContent;
    let placeToBeRemoved = element.parentNode.querySelector('#title2').textContent;

    let indexToRemove = -1;
    for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].title === titleToBeRemoved && task_list[i].place === placeToBeRemoved) {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove !== -1) {
        task_list.splice(indexToRemove, 1);
        localStorage.setItem("tasks", JSON.stringify(task_list));
    }
}


  
function addTask() {
    let title_value = document.getElementById("title").value;
    let place_value = document.getElementById("place").value;

    task_list.push({ title: title_value, place: place_value });
    localStorage.setItem("tasks", JSON.stringify(task_list));

    let list_element = document.getElementById("list");
    list_element.innerHTML += "<li class='fade-in'><span class='title-list'>" + title_value + "</span> <span id='title2'>" + place_value + "</span> <img onclick='rmv(this)' class='trash-2' src='/img/icons8-trash-24.png' alt='trash'></li>";

      
}
onload = populateTaskList;

