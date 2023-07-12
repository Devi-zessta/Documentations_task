import {useState} from 'react'
import Output from './Output';
const Greetings=()=>{
    const [chagedText,setChangedText]=useState(false);

    const ChangeHandler=()=>{
        setChangedText(true);
        
    }
    return<div>
        <h1> Hello world!</h1>
        {!chagedText &&<Output>It's good to see you</Output>}
        {chagedText &&<Output>Changed !!</Output>}
        <button onClick={ChangeHandler}>ChangeText</button>
    </div>
}
export default Greetings;