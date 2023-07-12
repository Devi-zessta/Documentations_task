import { useState } from "react";
function useInput(Validate) {
  const [enteredInput, SetEnteredInput] = useState("");
  const [IsTouched, SetIsTouched] = useState(false);

  const InputIsValid=Validate(enteredInput);
  const hasError=IsTouched && !InputIsValid;

  function InputChangeHandler(event) {
    SetEnteredInput(event.target.value);
    SetIsTouched(true);
  }
  function Reset() {
    SetEnteredInput("");
    SetIsTouched(false);
  }
  function onBlur() {
    SetIsTouched(true);
  }

  return {
    Value: enteredInput,
    InputChangeHandler,
    Reset,
    IsTouched,
    onBlur,
    hasError,
  };
}

export default useInput;
