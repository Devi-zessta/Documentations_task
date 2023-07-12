import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./Root.module.css";

function Root() {
  const loading = useNavigation();
  const state = loading.state === "loading";
  return (
    <>
      <MainNavigation />
      <div className={classes.text}>
        <Outlet />
        {state && <p>Loading........</p>}
      </div>
    </>
  );
}
export default Root;
