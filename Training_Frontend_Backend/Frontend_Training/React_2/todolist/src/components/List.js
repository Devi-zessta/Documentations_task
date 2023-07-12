import "./List.css";

function List(props) {
  const listelements = props.Items?.map((item) => {
    return (
      <li
        key={item.Id}
        onClick={() => props.onclick(item.Id)}
        className={item.ISCompleted ? "completed" : ""} //{`${item.ISCompleted ? "completed" : ""}`}
      >
        {item.data}
      </li>
    );
  });

  return (
    <div>
      <ul>{listelements}</ul>
      <button onClick={props.onclickclear}>clear completed</button>
    </div>
  );
}

export default List;

