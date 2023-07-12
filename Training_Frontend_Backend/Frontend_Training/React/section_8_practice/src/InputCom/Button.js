import './Button.css';

function Button(props){
return(
    <div >
        <button className='Button'>
         {props.children}
        </button>
    </div>
)
}

export default Button;