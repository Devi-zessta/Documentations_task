import { authActions } from "../store";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const IsLoggedIn = useSelector((state) => state.Auth.IsAuth);
  const dispatch = useDispatch();
  function LogoutHandler() {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {IsLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
