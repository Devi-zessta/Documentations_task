//Add To-dos
let input_value=document.getElementById("Add_to");
let div_container=document.getElementById("container_id");
let div_main=document.getElementById("main");

document.getElementById("Add").addEventListener("click",function(){

if(input_value.value.length>0){
 var div_child=document.createElement("div");
 var div_child_id=document.createElement("div");
 div_child_id.className="child";
 div_child_id.id="child_id";
 var checkbox=document.createElement("input");
 checkbox.type="checkbox";
 checkbox.className="check";
 var label=document.createElement("label");
 label.className="label_class";
 var button_delete=document.createElement("input");
 button_delete.type="button";
 button_delete.value="delete";
 button_delete.className="button_delete"
 label.appendChild(document.createTextNode(input_value.value));

 div_child.appendChild(checkbox);
 div_child.appendChild(label);
 div_child_id.appendChild(div_child);
 div_child_id.appendChild(button_delete);
 div_main.appendChild(div_child_id);
}



});


//Delete To-dos
let but_len=document.getElementsByClassName("button_delete");
console.log(but_len);
for(var i=0;i<but_len.length;i++)
{
document.getElementsByClassName[i]("button_delete").addEventListener("click",function(){
   let del=document.getElementById[i]("child_id");
   console.log(del);
   del.remove();


})
}


//Strike the text


var list_checkBox=document.querySelectorAll("check");
console.log(list_checkBox);
list_checkBox.forEach(function(variable){
   variable.addEventListener('change', function() {
      
        const label = this.nextElementSibling;
        if (this.checked) {
            label.style.textDecoration="line-through";
          } else {
            label.style.textDecoration="none"
          }
    

});
});
// var list_label=document.getElementsByClassName("label_class");
// console.log(list_checkBox);
// console.log(list_label);
// for(var j=0;j<list_checkBox.length;j++){
//  list_checkBox[j].addEventListener("click",function(){
// {
// list_label[j].classList.add("done");

// });

// if(list_checkBox[j].checked){ 

//     list_label[j].classList.add("done");
//     }else{
    
//     list_label[j].style.textDecoration='none';
    
//     }
    

// });
// }





/*for(let i=1;i<=2;i++)
{
document.getElementsByTagName("tr")[i].addEventListener("mouseover",function(){
    document.getElementsByTagName("tr")[i].style.backgroundColor="skyblue";
    
});
}*/




