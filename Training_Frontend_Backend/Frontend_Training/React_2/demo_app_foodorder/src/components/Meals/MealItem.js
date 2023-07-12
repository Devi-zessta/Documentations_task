import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function MealItem(props) {
  const cartctx = useContext(CartContext);
  const price = `$${props.price}`;
  function AddToCartHandler(Amount) {
    cartctx.addItems({
      id: props.id,
      name: props.name,
      amount: Amount,
      price: props.price,
    });
  }

  return (
    <div className="meal">
      <li>
        <h3>{props.name}</h3>
        <div className="description">props.description</div>
        <div className="price">{price}</div>
      </li>
      <MealItemForm onAddToHandler={AddToCartHandler}></MealItemForm>
    </div>
  );
}

export default MealItem;
