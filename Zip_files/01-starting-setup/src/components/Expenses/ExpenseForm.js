import './ExpenseForm.css'

function ExpenseForm(){
    return (
       <form className='Expense_Input'>
        <div className='item'>
            <div className='title'>
            <label>Title</label>
            <input type='text'></input>
            </div>
            <div className='title'>
            <label>Amount</label>
            <input type='number'></input>
            </div>
        </div>
        
        <div className='title'>
        <label>Date</label>
        <input type='date'></input>
        </div>
     
        

        
       </form>
    )

}

export default ExpenseForm;