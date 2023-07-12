// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEacharray=[];
array.forEach(obj=>{
 forEacharray.push(obj.username+"!");
})
console.log(Narray) //['john!', 'becky!', 'susy!', 'tyson!']


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray=array.map(obj=>obj.username+"?");
console.log(mapArray) // ['john?', 'becky?', 'susy?', 'tyson?']


//Filter the array to only include users who are on team: red
const FilterArray=array.filter(obj=> obj.team==="red")
console.log(FilterArray); //{username: 'john', team: 'red', score: 5, items: Array(3)}
                          //{username: 'susy', team: 'red', score: 55, items: Array(3)}



//Find out the total score of all users using reduce
const reduceArray=array.reduce((accumulation,obj)=>{
  return accumulation+obj.score;
},0)
console.log(reduceArray); //71


// (1), what is the value of i?
Index of array

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2)
console.log //[2, 4, 8, 10, 16, 18]

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const mapArray=array.map(obj=>{
  obj.items.map(obj2=>{
    return obj2+"!";
  })
  return obj;
})
console.log(mapArray); 