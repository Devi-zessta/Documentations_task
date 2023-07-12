import Header from "./Header";
import './List.css';

function List(props) {
  return (
    <div>
      <Header></Header>
      <li>{props.item}</li>
    </div>
  );
}
export default List;
