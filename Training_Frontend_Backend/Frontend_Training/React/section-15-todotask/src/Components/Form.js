import { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [enteredData,setEnteredData]=useState("");
  function SubmitHandler(event){
    
    event.preventDefault();
    props.onsubmit(enteredData);
    

  }
  function changeHandler(event){
    setEnteredData(event.target.value);
  }
 function onclickHandler(){
  props.onclick(enteredData);
 // console.log('enter',enteredData);
 }

  return (
    <form className={classes.input} onSubmit={SubmitHandler}>
        <input onChange={changeHandler}></input>
        <button onClick={onclickHandler}>Add task</button>
    </form>
  );
};
export default Form;
