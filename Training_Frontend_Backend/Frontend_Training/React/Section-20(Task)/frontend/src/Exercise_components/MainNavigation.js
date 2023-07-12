import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NewsletterSignup from "../components/NewsletterSignup";

function MainNavigation() {
  return (
    <main className={classes.main}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        EventsPage
      </NavLink>

      {/* <NavLink
        to={`/events/${"eventDetails"}`}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        EventDetailPage
      </NavLink> */}
      <NavLink
        to="/events/new"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        NewEventPage
      </NavLink>
      {/* <NavLink
        to={`/events/${"EditEventPage"}/edit`}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        EditEventPage
      </NavLink> */}
      <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
            <NewsletterSignup />
    </main>
  );
}
export default MainNavigation;
