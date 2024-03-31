const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load tasks from local storage on page load
window.onload = function(){
    loadTasks();
}


// Called by button
function addTask(){
    if(inputBox.value == ''){
        alert("Yo put in a task cuh, on hood"); // if button clicked but no text entered
    }
    else{
        let li = document.createElement("li"); // create an 'li', store it in variable li
        li.innerHTML = inputBox.value; // give the li the text in the inputBox
        listContainer.appendChild(li); // append the new li to the listContainer (the ul)
        
        // Creating the x after the task
        let span = document.createElement("span"); // create new element
        span.innerHTML = "\u00d7"; // set it's html to 'x' (unicode for the character "x")
        li.appendChild(span); // append span to the li

        saveTasks(); // Save the added tasks to local storage
    }
    inputBox.value = ''; //resets the input after adding an item
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks(); // Save checked status to local storage
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks(); // save checked status to local storage
    }
    
}, false);

function saveTasks(){
    localStorage.setItem("tasks", listContainer.innerHTML); // saves the listContainer's HTML
}

function loadTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks") || ""; // loads the saved html, or nothing
}