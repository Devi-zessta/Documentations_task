import "./Header.css";
import pic from "./meals.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className="header">
        <h1> React Meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={pic} alt="meals"></img>
      </div>
    </Fragment>
  );
}

export default Header;