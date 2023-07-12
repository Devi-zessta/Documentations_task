import Form from "./Components/Form";
import classes from './App.module.css';
import Data from './Components/Data';
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  
 const [data,setData]=useState([{}]);
 const [error,setError]=useState();
 function submithandler(item){
  // setData((prevdata)=>{
  //   const update=[...prevdata];
  //   update.unshift(item);
  //   return update;
  // })
 }
//  console.log(data);
 

 async function SendData(data1){
  const respose= await fetch('https://todo-62335-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json',{
    method:'POST',
    body:JSON.stringify(data1),
    "Content-Type": "application/json",
  });
  try{
  const resposeGET=await fetch('https://todo-62335-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json');
 
  if(!respose.ok){
    throw new Error("something went wrong!!....");

  }
  const transoformedData=await resposeGET.json()
  // console.log('trs',transoformedData);
  const ArrData=[];
  for(const key in transoformedData){
    // console.log('trs_da',transoformedData[key])
    // console.log('key',key);
    ArrData.unshift({id:uuid(),task:transoformedData[key]});
  }
  
 console.log("arr",ArrData);
 setData(ArrData)
}catch(error)
 {
    setError(error.message)
 }


 }


 



  return (
    <div className={classes.app}>
      <Form onsubmit={submithandler} onclick={SendData}></Form>
      <Data ItemsDisp={data}></Data>
    </div>
  );
}

export default App;
