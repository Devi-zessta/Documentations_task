import ToDo from "../Models/ToDo";
import ToDoItem from "./ToDoItem";
import classes from './ToDos.module.css';
import { ToDoContext } from "../Store/ToDo-context";
import { useContext } from "react";


const ToDos: React.FC = () => {
  const ToDosctx=useContext(ToDoContext);
  return (
    <ul className={classes.todos}>
      {ToDosctx.items.map((ob) => {
       return <ToDoItem items={ob} DeleteItem={ToDosctx.RemoveToDo}/>
      })}
    </ul>
  );
};

export default ToDos;
