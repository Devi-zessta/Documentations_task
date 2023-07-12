import './Header.css'
import Cart from './Cart';

function Header(props){
    return(
        <div className='header'>
            
            <h4 className='child'>ReactMeals</h4>
            <Cart className='child' count={props.count} onClick={props.onClick}  ></Cart>
           
        </div>
    )

}

export default Header;