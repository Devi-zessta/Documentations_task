import { FormEvent } from "react";
import {useRef} from 'react';
import classes from './ToDoForm.module.css';
import { ToDoContext } from "../Store/ToDo-context";
import {useContext } from 'react';

const ToDoForm:React.FC = () => {
  const ToDoCtx=useContext(ToDoContext);
    const enteredValue=useRef<HTMLInputElement>(null);
    function SubmitHandler(event:React.FormEvent){
        event.preventDefault();
        const enteredInputValue=enteredValue.current!.value;
        if(enteredInputValue?.trim().length===0){
            //throw error 
            return;
        }
        ToDoCtx.AddToDo(enteredInputValue);

    }

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <label htmlFor="todo">ToDo text</label>
      <input type="text" id="todo" ref={enteredValue}></input>
      <button>Add TODO</button>
    </form>
  );
};

export default ToDoForm;
