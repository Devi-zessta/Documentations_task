import CartContext from "./cart-context";
import { useReducer } from "react";

const DefaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedItems = state.items.concat(action.items);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
      return{
        items:updatedItems,
        totalAmount:updatedAmount
      }
  }
  return DefaultCartState;
}; //this function need not to be recreated all the time when component is re-evaluated.

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DefaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "Add", item: item });
  }

  function removeItemFromCartHandler() {}

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
