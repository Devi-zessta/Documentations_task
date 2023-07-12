import "./MealItemForm.css";
import Input from "../UI/Input";
import { useState, useRef } from "react";

function MealItemForm(props) {
  const AmountInputRef = useRef();
  const [IsValidAmount, SetAmountValid] = useState(true);

  function SubmitHandler(event) {
    event.prevent.Default();
    const enteredAmount = AmountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmountNumber.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountValid(false);
      return;
    }
    props.onAddToHandler(enteredAmountNumber);
  }
  return (
    <form className="form" onSubmit={SubmitHandler}>
      <Input
        ref={AmountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "ammount",
          min: "1",
          max: "5",
          step: "1",    
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!IsValidAmount && <p>please enter valid amount</p>}
    </form>
  );
}

export default MealItemForm;
