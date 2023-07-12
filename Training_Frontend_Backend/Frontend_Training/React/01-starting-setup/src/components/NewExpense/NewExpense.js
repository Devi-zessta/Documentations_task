import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

function NewExpense(props){
   function SaveExpenseHandler(EnteredExpenses){
    const expenses_Data={
        ...EnteredExpenses,
        id:Math.random().toString()
    }
    props.onrecieve(expenses_Data);

   }
    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenses={SaveExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;