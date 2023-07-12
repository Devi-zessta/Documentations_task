import './Items.css'
import './Count.css'
import { useState } from 'react';

function Count(props){
    // const [count,setCount]=useState(0);
    // function clickHandler(){
    //     setCount((prevCount)=>{
    //         prevCount+=1;
            
    //         return prevCount;
    //     })
        
    // }


    return(
        <ul className='count'>
            <div>
            amount
            <button>{props.count}</button>
            </div>
            <div>
                <button className='but1' onClick={props.onClick}>+Add</button>
            </div>
           
        </ul>
    )
   
}

export default Count;