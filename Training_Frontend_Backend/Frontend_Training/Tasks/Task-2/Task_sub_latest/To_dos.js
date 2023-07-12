let button = document.getElementById("Adding");
let value = document.getElementById("input_value");
let ul = document.querySelector("ul");

function AddElement(){
    if(value.value.length > 0) {
        let li = document.createElement("li");
        li.classList.add("list");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let button_1 = document.createElement("button");
        button_1.innerHTML = "Delete";
        button_1.classList.add("btn");
        const container = document.createElement("div");
        li.appendChild(checkbox);
        container.appendChild(document.createTextNode(value.value));
        li.appendChild(container);
        li.appendChild(button_1);
        ul.appendChild(li);
        button_1.addEventListener("click", function(){
            li.parentNode.removeChild(li);
        });
        checkbox.addEventListener("click", function(){
            if (checkbox.checked) {
                container.classList.add("checked");
            } else {
                container.classList.remove("checked");
            }
        });
        value.value ="";
    }
}

button.addEventListener("click", AddElement);