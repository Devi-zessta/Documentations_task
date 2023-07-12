import React from "react";
import AuthContext from "../../context/Auth_context";
import classes from "./Navigation.module.css";
import { useContext } from "react";

const Navigation = (props) => {
  const ctx=useContext(AuthContext);
  return (

    // <AuthContext.Consumer>
    //   {(ctx)=>{return ( 
      <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>)
      
   
  //  </AuthContext.Consumer>
  
};

export default Navigation;
