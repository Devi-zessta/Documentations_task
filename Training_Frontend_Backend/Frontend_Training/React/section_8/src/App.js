import UserInput from "./components/UserInput/UserInput";
import { useState } from "react";
import UserList from "./components/UserList/UserList";
import { format } from 'date-fns'


function App() {
  const [Data, setData] = useState([]);
  const [List,SetList]=useState(false);

  function listHandler(Data){
    console.log(Data);
   
    if(Data.length>0){
      
    SetList(true);
    }
    else{
     
      SetList(false);
    }
  }


  function AddUserData(Data) {
    setData((prevData) => {
      const Update_data = [...prevData];
      Update_data.unshift({ username: Data.username, age: Data.age,id:Math.random().toString()});
      listHandler(Update_data);
      return Update_data;
      
    });
   
  }
  



  

  return (
    <div>
      <UserInput addUser={AddUserData}></UserInput>
      
     {List && <UserList users={Data}></UserList>}
     <p>{format(new Date(), 'dd/mm/yyyy')}</p>
    </div>
  );
}

export default App;
