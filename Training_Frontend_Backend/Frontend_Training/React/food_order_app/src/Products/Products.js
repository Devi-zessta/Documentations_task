import Items from "./Items";
import Count from "./Count";
import "./Product.css";
import ListOfItems from "./ListOfItems";

function Products(props) {
  return (
    <div className="arr">
      <div className="prod">
      <ListOfItems onClick={props.onClick} count={props.count}></ListOfItems>
      
      </div>
    </div>
  );
}

export default Products;
