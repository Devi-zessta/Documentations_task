import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const IsLoggedIn = useSelector((state) => state.Auth.IsAuth);

  return (
    <Fragment>
      <Header />
      {!IsLoggedIn && <Auth />}
      {IsLoggedIn && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
