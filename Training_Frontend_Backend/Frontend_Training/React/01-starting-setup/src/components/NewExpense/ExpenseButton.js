import "./ExpenseButton";
import ExpenseForm from "./ExpenseForm";

function ExpenseButton(props) {
  console.log(props.props);
  function SaveExpenseHandler(EnteredExpenses) {
    const expenses_Data = {
      ...EnteredExpenses,
      id: Math.random().toString(),
    };
    props.props.onrecieve(expenses_Data);
  }

  return (
    <div className="new-expense__actions">
      <button
        type="submit"
        onClick={() => (
          <ExpenseForm onSaveExpenses={SaveExpenseHandler}></ExpenseForm>
        )}
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseButton;
