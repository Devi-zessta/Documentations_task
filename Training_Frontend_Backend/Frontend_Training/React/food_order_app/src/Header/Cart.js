import "./Cart.css";

function Cart(props) {
  return (
    <div className={`cart ${props.className}`}>
      <div> your cart</div>
      <button className="cart_child" onClick={props.onClick} >{props.count}</button>
    </div>
  );
}

export default Cart;
