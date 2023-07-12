import './HeaderCartButton.css';
import CartIcon from '../Cart/CartIcon.js'

function HeaderCartButton(){

    return(
        <button className='button'>
            <span className='icon'>
                  <CartIcon/>
            </span>
            <span>your Cart</span>
            <span className='badge'>3</span>
        </button>

    );
}

export default HeaderCartButton;