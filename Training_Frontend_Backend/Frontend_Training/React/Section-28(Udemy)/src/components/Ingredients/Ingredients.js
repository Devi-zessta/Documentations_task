import React, { useEffect, useState } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../ErrorModal/ErrorModal";

function Ingredients() {
  const [integredients, SetIntegredients] = React.useState([]);
  const [IsLoading,SetIsLoading]=useState(false);
  const [error,SetError]=useState(false);

  function Handler(integredients) {
    SetIsLoading(true);
    SetIntegredients((prev) => [
      ...prev,
      { id: Math.random().toString(), ...integredients },
    ]);
     
    const response = fetch(
      "https://revesion-43e40-default-rtdb.asia-southeast1.firebasedatabase.app/indegredients.json",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: Math.random().toString(),
          title: integredients.title,
          Amount: integredients.Amount,
        }),
      }
    );
    if (!response.ok) {
      console.log(response)
      SetError(true)
    }
    SetIsLoading(false);
  }

  const OnLoadData = React.useCallback((data) => {
    SetIntegredients(data);
  }, []);

  function RemoveHandler(id) {
    fetch(
      `https://revesion-43e40-default-rtdb.asia-southeast1.firebasedatabase.app/indegredients/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      SetIntegredients((prev) => prev.filter((obj) => obj.id !== id));
    });
  }

  function CloseHandler(){
    SetError(false);
  }
  return (
    <>
   {error &&  <ErrorModal onClose={CloseHandler}/>}
    <div className="App">
      
      <IngredientForm SubmitHandler={Handler} />
      <section>
        <Search OnLoadData={OnLoadData} />
        <IngredientList
          ingredients={integredients}
          onRemoveItem={RemoveHandler}
        />
      </section>
    </div>
    </>
  );
}

export default Ingredients;














