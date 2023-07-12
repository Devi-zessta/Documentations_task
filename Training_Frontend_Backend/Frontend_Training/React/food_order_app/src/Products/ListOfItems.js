import Items from "./Items";
import Count from "./Count";
import './ListOfItems.css'

function ListOfItems(props){
    return (
        <div className="listOfItems">
        <Items></Items>
        <Count onClick={props.onClick} count={props.count}></Count>
      </div>
    );
}

export default ListOfItems;