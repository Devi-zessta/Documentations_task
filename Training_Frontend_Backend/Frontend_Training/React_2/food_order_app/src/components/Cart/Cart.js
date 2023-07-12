import { useContext, useState } from "react";
import { Fragment } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Address from "./Address";

const Cart = (props) => {
  const [IsSubmitting, SetIsSubmitting] = useState(false);
  const [didSubmit, SetDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const [Add, SetAdd] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  function clickHandler() {
    SetAdd(true);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  async function SendData(Data) {
    SetIsSubmitting(true);

    await fetch(
      "https://food-order-4ae46-default-rtdb.asia-southeast1.firebasedatabase.app/food-order.json",
      {
        method: "POST",
        body: JSON.stringify({
          Data: Data,
          OrderItems: cartCtx.items,
        }),
      }
    );
    SetIsSubmitting(false);
    SetDidSubmit(true);
    cartCtx.clearCart();
  }

  const isSubmittingModalContent = <p>Submitting Data......</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order</p>
      <div className={classes.actions}>
        {
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        }
      </div>
    </Fragment>
  );

  const CartModalComponent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {Add && <Address onClick={props.onClose} onConfirm={SendData} />}
      <div className={classes.actions}>
        {!Add && (
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        )}
        {hasItems && !Add && (
          <button className={classes.button} onClick={clickHandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!IsSubmitting && !didSubmit && CartModalComponent}
      {IsSubmitting && isSubmittingModalContent}
      {!IsSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
