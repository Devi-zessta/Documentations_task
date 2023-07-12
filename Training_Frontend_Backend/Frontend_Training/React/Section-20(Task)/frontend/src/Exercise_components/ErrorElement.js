import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();

  let title = "An error has occured!!... ";
  let message = "Something went wrong!!...";

  if (error.status === 404) {
    title = "Not found!...";
    message = "could not find resource or page!!...";
  }
  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <center>
      <h1>{title}</h1>
      <p>{message}</p>
    </center>
  );
}

export default ErrorElement;
