// Make a keyless car EVEN BETTER!
// We are improving our car from the previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit of having checkDriverAge() instead of copying and pasting the function every time?


function checkDriverAge(){
age=Number(prompt("enter your age"));
if(age<18){
  alert("Sorry, you are too young to drive this car. Powering off");
}
else if(age===18)
{
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else
{
  alert("Powering On. Enjoy the ride!");
}

}

checkDriverAge();


//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.



var checkDriverAge2=function(){
age=Number(prompt("enter your age"));
if(age<18){
  alert("Sorry, you are too young to drive this car. Powering off");
}
else if(age===18)
{
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else
{
  alert("Powering On. Enjoy the ride!");
}

}

checkDriverAge2();


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

function checkDriverAge(age){

if(age<18){
  return("Sorry, you are too young to drive this car. Powering off");
}
else if(age===18)
{
  return("Congratulations on your first year of driving. Enjoy the ride!");
}
else
{
  return("Powering On. Enjoy the ride!");
}

}

checkDriverAge(Number(prompt("enter your age")));



