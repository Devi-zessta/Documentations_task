import TodoHeader from "./components/TodoHeader";
import List from "./components/List";
import { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState([]);

  function submitHandlerApp(Data) {
    setItems((previtems) => {
      const update = [...previtems];
      update.unshift({ data: Data, Id: uuid(), ISCompleted: false });
      return update;
    });
  }

  const Dummy_Items = items;
  function clickHandler(id) {
    const newItems = Dummy_Items.map((object) => {
      if (object.Id === id) {
        return { ...object, ISCompleted: !object.ISCompleted };
      }
      return object;
    });
    setItems(newItems);
  }

  function ClearHandler() {
    setItems((current) =>
      current.filter((object) => object.ISCompleted !== true)
    );
  }

  return (
    <div className="todolist">
      <TodoHeader />
      <List Items={items} onclick={clickHandler} onclickclear={ClearHandler} />
      <Form onsubmit={submitHandlerApp} />
    </div>
  );
}

export default App;

