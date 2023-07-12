var Database=[
    {
        username:"Sai Durga",
        password:"1234"
    }
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


function SignIn(username,password){
    if(username===Database[0].username && password===Database[0].password){
        console.log(details);
    }
    else{
        console.log("sorry wrong username and password!");
    }
}

SignIn(username,password);