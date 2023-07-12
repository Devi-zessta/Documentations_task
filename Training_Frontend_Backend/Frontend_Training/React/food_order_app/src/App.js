// import img from "./food_oreder_img.jpg";
import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import Description from "./description/descriptin";
import Products from "./Products/Products";
import CartDisplay from "./Header/CartDisplay";

function App() {
  const [count, setCount] = useState(0);
  function clickHandler() {
    setCount((prevCount) => {
      prevCount += 1;

      return prevCount;
    });

  }

  const [click,setClicked]=useState(false);
  function handlertrue(){
    setClicked(true);
  }
  function handlerfalse(){
    setClicked(false);
  }


  return (
    <div>
      <div className="back_img">
      
        <Header count={count} onClick={handlertrue} ></Header>
        <div>
          <Description></Description>
          <Products onClick={clickHandler} count={count}></Products>
          
        </div>
        {click && <CartDisplay count={count} onClick={handlerfalse}></CartDisplay>}
      </div>
      
    </div>
  );
}

export default App;
