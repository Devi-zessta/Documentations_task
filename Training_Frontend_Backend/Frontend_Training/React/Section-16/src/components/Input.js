import { Fragment } from "react";
import useFormvalidity from "../hooks/CustomFormHook";

function Input(props) {
   const {enteredInput, BlurHandler,ChangeHandler}=useFormvalidity();
   function ChangeHandlerInput(event){
    ChangeHandler(event.target.value);
   }
   
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={enteredInput}
        onBlur={BlurHandler()}
        onChange={ChangeHandlerInput}
      />
    </Fragment>
  );
}

export default Input;
