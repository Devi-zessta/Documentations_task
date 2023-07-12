import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [title, SetTitle] = React.useState("");
  const [Amount, SetAmount] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.SubmitHandler({ title: title, Amount: Amount });
    // Sending data to backend
  };
  const InputTitleChangeHandler = (event) => {
    // SetIntegredient({title:event.target.value,Amount:Ingredient.Amount});
    // SetIntegredient((prev)=>{
    //    console.log(prev);
    //    return{title:event.target.value,Amount:prev.Amount}
    // })
    SetTitle(event.target.value);
  };
  const InputAmountChangeHandler = (event) => {
    // SetIntegredient({title:Ingredient.title,Amount:event.target.value});
    //   SetIntegredient((prev)=>{
    //     console.log(prev);
    //     return{title:prev.title,Amount:event.target.value }
    //  })

    SetAmount(event.target.value);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={InputTitleChangeHandler}
              value={title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              onChange={InputAmountChangeHandler}
              value={Amount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
