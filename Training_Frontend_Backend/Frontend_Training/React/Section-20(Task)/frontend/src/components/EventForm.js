import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const actionData = useActionData();

  const navigate = useNavigate();
  const navigation = useNavigation();
  const IsSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={IsSubmitting}>
          {IsSubmitting ? "submitting...." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  // console.log('method',method);


  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const id = params.Id;
    url = "http://localhost:8080/events/" + id;
  }
  // console.log('url',url);

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(eventData),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "could not save" }, { status: 500 });
  }
  return redirect("/events");
}
