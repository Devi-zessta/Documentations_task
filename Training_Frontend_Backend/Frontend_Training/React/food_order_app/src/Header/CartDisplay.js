import "./CartDisplay.css";
function CartDisplay(props) {
  return (
    <div className="disp">
      <h6>total:</h6>
      <h6>{props.count}</h6>
      <div>
        <button onClick={props.onClick}>okay</button>
      </div>
    </div>
  );
}

export default CartDisplay;
