let taskList = document.getElementById("taskList");
let input = document.getElementById("input");

function addTask() {
	if (input.value === "") {
		alert("Please enter a task.");
		return false;
	}

	let li = document.createElement("li");
	li.innerHTML = "<input type='checkbox'><span class='delete'>Delete</span> " + input.value;
	taskList.appendChild(li);
	input.value = "";

	let deleteButton = li.querySelector(".delete");
	deleteButton.addEventListener("click", deleteTask);

	let checkbox = li.querySelector("input[type=checkbox]");
	checkbox.addEventListener("change", toggleTask);
}

function deleteTask() {
	this.parentNode.remove();
}

function toggleTask() {
	if (this.checked) {
		this.parentNode.classList.add("checked");
	} else {
		this.parentNode.classList.remove("checked");
	}
}

let container = document.querySelector(".container");
container.addEventListener("mouseover", function() {
	this.style.backgroundColor = "#4CAF50";
});

container.addEventListener("mouseout", function() {
	this.style.backgroundColor = "#fff";
});
