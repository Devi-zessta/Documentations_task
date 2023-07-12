var Database=[
    {
        username:"Sai Durga",
        password:"1234"
    },
    {
        username:"Devi",
        password:"5678"
    },
     {
        username:"Kamala",
        password:"1290"
    },
   ];

var details=[
    {
        user:"Sai Durga",
        timeline:"Javascript is pretty cool!"
    },
     {
        user:"Devi",
        timeline:"Javascript is interesting to learn"
    }
    
    ];


var username=prompt("what's your name");
var password=prompt("password ");

IsUserValid(username,password){
  for(let i=0;i<Database.length;i++)
  {
   if(Database[i].username===username && Database[i].password===password){
     return true;
     }
   }
  return false;

}


function SignIn(username,password){
    if(IsUserValid(username,password)){
        console.log(details);
    }
    else{
        console.log("sorry wrong username and password!");
    }
}

SignIn(username,password);