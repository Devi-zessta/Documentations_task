import ToDo from "../Models/ToDo";
import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{ items: ToDo;DeleteItem:(Id:string)=>void}> = (props) => {
  function DeleteHandler() {
      props.DeleteItem(props.items.id);
  }

  return (
    <li key={props.items.id} className={classes.item} onClick={DeleteHandler}>
      {props.items.item}
    </li>
  );
};
export default ToDoItem;
