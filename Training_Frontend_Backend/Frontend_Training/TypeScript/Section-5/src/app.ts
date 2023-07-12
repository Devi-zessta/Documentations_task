// Code goes here!

abstract class Department {
  //    name: string;
  private Report: string;

  constructor(public name: string, Report: string) {
    this.name = name;
    this.Report = Report;
  }
  get ReportGet() {
    if (this.Report) {
      return this.Report;
    }
    throw new Error("enter valid report!!");
  }
  set ReportSet(report: string) {
    this.Report = report;
  }
  describe(this: Department) {
    console.log("Depatment:", this.name);
  }

  static StaticMethod() {
    return { name: this.name };
  }

  abstract Describe(): void;
}
// const Acounting = new Department("acounting","Report1");
// Acounting.describe();
console.log("static:", Department.StaticMethod());

// const accountingCopy = { name: "DUMMY", describe: Acounting.describe };
// accountingCopy.describe();

class ItDepartment extends Department {
  constructor(public name1: string) {
    super(name1, "report1");
    this.name1 = "hi";
  }
  Describe(): void {
    console.log("abstract method");
  }
  print() {
    console.log(this.name1);
    console.log(this.name);
    console.log(this.ReportGet);
    this.ReportSet = "report2";
    console.log(this.ReportGet);
  }
}

const inheritedClass = new ItDepartment("Acounting");
inheritedClass.print();

interface Person {
  name: string;
  age: number;
  greet(phase: string): void;
}

let user: Person;
user = {
  name: "Max",
  age: 29,
  greet(phrase: string) {
    console.log(phrase);
  },
};

user.greet("hello");

interface person {
  age: number;
  name: string;
}

var user2: person;
user2 = {
  age: 20,
  name: "sai",
  // age2:2
};

//interface for functions

interface AddFun {
  (a: number, b: number): number;
}

let add: AddFun;
add = (a: number, b: number) => {
  return a + b;
};
console.log(add(2, 3));

//Intersection types

type Employee1 = {
  name: string;
  privilages: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type Intersection = Employee1 & Employee2;

let Employee: Intersection;
Employee = {
  name: "max",
  privilages: ["access"],
  startDate: new Date(),
};
console.log(Employee);

// type Gaurds

let a: string | number;
let b: string | number;

function Add(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee=Employee1 | Employee2;

function Display(emp:UnknownEmployee){
  if('privilages' in emp){
    console.log(emp.privilages) 

  }
  else{
    console.log(emp.name);
  }
}

// Descriminated unions

interface Bird{
  type:'bird';
  flyingSpeed:Number;
}

interface Animal{
  type:'Animal';
  RunningSpeed:number;
}

function moveAnimal(animal:Bird|Animal){
  switch(animal.type){
    case 'bird':console.log(animal.flyingSpeed);
    break;
    case 'Animal': console.log(animal.RunningSpeed);
    break;

  }
}


//index properties

interface ErrorContainer{
   [prop:string]:string;
}

const errorBag:ErrorContainer={
    email:'email is not valid',
    username:'must start with capital letter'
}

//function overloading

type combine=string|number;

function Adding(a:string,b:string):string;
function Adding(a:number,b:number):number;
function Adding(a:combine,b:combine){
  if(typeof a==='string' || typeof b==='string') 
  {
    return a.toString()+b.toString();
  }
  return a+b;
}

console.log(Adding('suji','max'))
