import ToDos from "./components/ToDos";
import ToDoForm from "./components/ToDoForm";
import ToDosContextProvider from "./Store/ToDo-context";

function App() {
  return (
    <ToDosContextProvider>
      <ToDoForm />
      <ToDos />
    </ToDosContextProvider>
  );
}

export default App;
