import { useState } from "react";

function useFormvalidity(ValidateValue) {
  const [enteredInput, SetEnteredInput] = useState("");
  const [IsTouchedInput, SetIsTouchedInput] = useState(false);

  const enteredInputIsValid = ValidateValue(enteredInput);
  const hasError = !enteredInputIsValid && IsTouchedInput;

  function BlurHandler() {
    SetIsTouchedInput(true);
  }

  function ChangeHandler(event) {
    SetEnteredInput(event.target.value);
     SetIsTouchedInput(true);
  }
  function reset(){
    SetEnteredInput("");
    SetIsTouchedInput(false);
  }

  return {
    value: enteredInput,
    IsValid:enteredInputIsValid,
    hasError,
    BlurHandler,
    ChangeHandler,
    reset,
  
  };
}

export default useFormvalidity;
