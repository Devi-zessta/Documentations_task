import InputCom from "./InputCom/InputCom";
// import './App.css';
import { useState } from "react";
// import UserList from "./UserList/UserList";

function App() {
  const [Data,SetData]=useState([
    {username:'hello',age:20,id:'1'}
  ]);

  function AddData(data){
    SetData(prevdata=>{
      const updateData=[...prevdata];
      updateData.unshift({username:data.username+'('+data.age+')',id:Math.random.toString()})
      return updateData;
    });
  }



  return (
    <div className="App-header">
      <InputCom onChange={AddData}></InputCom>
      {/* <UserList></UserList> */}
    </div>
  );
}

export default App;
