import { Link, json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
function NewEventPage() {
  return (
    <>
      {/* <h1>Welcome to NewEventPage</h1>
        <Link to={`/events/${'EditEventPage'}/edit`}>Lets go to edit event page</Link> */}
      <EventForm method="post"/>
    </>
  );
}
export default NewEventPage;

