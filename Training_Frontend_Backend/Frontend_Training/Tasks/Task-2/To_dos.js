document.getElementById("Add").addEventListener("click",function(){


});
for(let i=1;i<=2;i++)
{
document.getElementsByTagName("tr")[i].addEventListener("mouseover",function(){
    document.getElementsByTagName("tr")[i].style.backgroundColor="skyblue";
    
});
}
for(let i=1;i<=2;i++)
{
document.getElementsByTagName("tr")[i].addEventListener("mouseout",function(){
    document.getElementsByTagName("tr")[i].style.backgroundColor="white";
    
});
}
/*for(let i=1;i<=2;i++)
{
document.querySelector("checkbox1").addEventListener("click",function(){
   // document.getElementsByClassName("checkbox")[i]
});


}*/



/*let input=document.getElementsByClassName("input");
console.log(input);
console.log(input.value);

 let table=document.querySelector("tbody");




document.getElementById("Add").addEventListener("click",function(){

 var tr=document.createElement("tr");
var td=document.createElement("td");
 td.appendChild(document.createTextNode(input.value));  
 tr.appendChild(td);
 table.appendChild(tr);
 

});*/


let inpu=document.getElementById("Add_to");
console.log(inpu);
console.log(inpu.value);

 let table=document.querySelector("tbody");




document.getElementById("Add").addEventListener("click",function(){

 var tr=document.createElement("tr");
var td=document.createElement("td");
 td.appendChild(document.createTextNode(inpu.value));  
    console.log(inpu.value);
    console.log(inpu);
    console.log(td)
 tr.appendChild(td);
 table.appendChild(tr);
 

});