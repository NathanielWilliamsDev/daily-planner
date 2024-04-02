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

        // Creating subtaskContainer (div) and subtask (button)
        let subtaskContainer = document.createElement("div");
        subtaskContainer.setAttribute("id", "subtaskContainer")
        let subtask = document.createElement("button");
        subtask.setAttribute("id", "subtask");
        subtask.textContent = "Add subtask"; //setting textContent
        // Appending subtask to the container (put button in div)
        subtaskContainer.appendChild(subtask);

        //Appending subtask to the listContainer 
        // COMMENTED OUT DISPLAYING SUBTASK FOR CLEANLINESS OF CURRENT PROJECT
        //li.appendChild(subtaskContainer); //appending the container to the list

        // Creating the x after the task
        let span = document.createElement("span"); // create new element
        span.innerHTML = "\u00d7"; // set it's html to 'x' (unicode for the character "x")
        li.appendChild(span); // append span to the li

        //On clicking subtask
        subtask.addEventListener("click", function(e){
            let subtaskInput = document.createElement("input");
            subtaskContainer.appendChild(subtaskInput);
        
        });
        

        saveTasks(); // Save the added tasks to local storage
    }
    inputBox.value = ''; //resets the input after adding an item
}

//Event Listener for 'Enter' key when typing in the input box
inputBox.addEventListener("keydown", (keyPressed) => {
    if(keyPressed.key === 'Enter'){
        addTask();
    }
})

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