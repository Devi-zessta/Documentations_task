import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, SetMeals] = useState([]);
  const [IsLoading, SetIsLoading] = useState(true);
  const [error, SetError] = useState();
  useEffect(() => {
    const FetchMeals = async () => {
      const Response = await fetch(
        "https://react-app-33ddd-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      if (!Response.ok) {
        throw new Error("Something went wrong!!.....");
      }
      const MealData = await Response.json();
      const LoadedMeals = [];
      for (const key in MealData) {
        LoadedMeals.push({
          id: key,
          name: MealData[key].name,
          Description: MealData[key].Description,
          price: MealData[key].price,
        });
      }
      SetMeals(LoadedMeals);
      SetIsLoading(false);
    };

    FetchMeals().catch((error) => {
      SetError(error.message);
      SetIsLoading(false);
    });
  },[]);
  

  if (IsLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading.......</p>
      </section>
    );
  }
  console.log(error)
  if ( error) {
    return (
      <section className={classes.loading_error}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
