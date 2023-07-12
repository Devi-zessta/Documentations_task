import { Fragment ,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart.js';
import CartProvider from "./store/CartProvider";

function App() {
 const [cartIsShown,SetCartIsShown]=useState(false);

function showCartHandler(){
  SetCartIsShown(true);
}

function HideCartHandler(){
  SetCartIsShown(false);
}
console.log(cartIsShown);

  return (
    <CartProvider>
      {cartIsShown && <Cart onhide={HideCartHandler}/>}
      <Header onshow={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
      
    </CartProvider>
  );
}

export default App;
