import Form from './Form';
import List from './List';
import './ToDoList.css'

function ToDoList(){
    return(
        <div className='Todo'>
            <List></List>
            <Form></Form>
        </div>
    )

}

export default ToDoList;