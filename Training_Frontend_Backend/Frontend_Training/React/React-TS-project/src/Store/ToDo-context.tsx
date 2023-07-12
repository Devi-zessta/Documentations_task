import React, { useState } from "react";
import ToDo from "../Models/ToDo";

export const ToDoContext = React.createContext<{
  items: ToDo[];
  AddToDo: (item: string) => void;
  RemoveToDo: (id: string) => void;
}>({
  items: [],
  AddToDo: () => {},
  RemoveToDo: () => {},
});

const ToDosContextProvider: React.FC = (props) => {
  const [Items, SetItems] = useState<ToDo[]>([]);

  function AddToDoItem(item: string) {
    const newToDo = new ToDo(item);
    SetItems((prev) => {
      return prev.concat(newToDo);
    });
  }
  function DeleteItem(Id: string) {
    SetItems((prev) => {
      const Up = prev.filter((obj) => obj.id !== Id);
      return Up;
    });
  }

  const contextValue = {
    items: Items,
    AddToDo: AddToDoItem,
    RemoveToDo: DeleteItem,
  };

  return (
    <ToDoContext.Provider value={contextValue}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDosContextProvider;
