import './HeaderCartButton.css';
import CartIcon from '../Cart/CartIcon.js'
import CartContext from '../../store/cart-context';
import {useContext} from 'react';

function HeaderCartButton(props){
    const cartCtx=useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((currentValue,item)=>{
        return currentValue+item.value;
        },0);
        

    return(
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                  <CartIcon/>
            </span>
            <span>your Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>

    );
}

export default HeaderCartButton;