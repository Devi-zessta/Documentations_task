//Primitives : number , string , boolean.
//More complex types : arrays , objects.
//Function types , parameters.

//primitives:

let age: number;
age = 21;

let userName: string;
userName = "Max";

let IsInstructor: boolean;
IsInstructor = true;

//more complex types

let names: string[];
names = ["max", "kelvin"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "max",
  age: 21,
};

let people: {
  name: string;
  age: number;
}[]; //array of objeects

//Type inference

// Union types

let course: string | number = "cse";
course = 12;

//Type aliases

type person1= {
    name: string;
    age: number;
  };

let person1;

let people1:person1[];

//function and types(we can give return type to parameters and return type of function)

function Add1(a:number,b:number):number{
    return (a+b);
}

function PrintOutput(value:number){  //return type is of void 
    console.log(value);
}

//Generics:

function insertAtTheBegining<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;
}

const oldArray=[1,2,3];
const output=insertAtTheBegining(oldArray,-1);
console.log(output);


