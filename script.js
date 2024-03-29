const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
    }
    inputBox.value = ''; //resets the input after adding an item
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);