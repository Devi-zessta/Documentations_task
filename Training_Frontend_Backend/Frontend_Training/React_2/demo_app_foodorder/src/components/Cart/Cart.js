import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  function AddItemHandler(item) {}

  function RemoveItemHandler(id) {}

  const cartctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => {
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={RemoveItemHandler.bind(null,item.id)}
          onAdd={AddItemHandler.bind(null,item)}
        />;
      })}
    </ul>
  );

  const NumItems = cartctx.items.length > 0;
  const totalAmount = `$${cartctx.totalAmount}`;
  console.log(cartItems);
  return (
    <Modal onClick={props.onhide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onhide}>
          Close
        </button>
        {NumItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
