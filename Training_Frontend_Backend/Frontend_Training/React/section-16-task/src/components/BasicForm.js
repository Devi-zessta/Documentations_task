import useInput from "../hooks/useInput";
import classes from "./BasicForm.module.css";

function BasicForm() {
  const {
    Value: enteredFirstName,
    InputChangeHandler: FirstNameChangeHandler,
    Reset: FirstNameReset,
    onBlur:FirstNameBlur,
    hasError:FirstNameHasError,
  } = useInput((value)=>value.trim()!=="");
  const {
    Value: enteredLastName,
    InputChangeHandler: LastNameChangeHandler,
    Reset: LastNameReset,
    onBlur:LastNameBlur
  } = useInput((value)=>value.trim()!=="");
  const {
    Value: enteredEmail,
    InputChangeHandler: EmailChangeHandler,
    Reset: EmailReset,
    onBlur:EmailBlur
  } = useInput((value)=>value.includes('@'));

  function SubmitHandler(event) {
    event.preventDefault();
    FirstNameReset();
    LastNameReset();
    EmailReset();
  }
  
  const classes_value=FirstNameHasError?'classes.Invalid':'classes.valid';
  console.log(classes_value)
  return (
    <form onSubmit={SubmitHandler}>
      <div className={classes.name}>
        <div className={classes_value}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={FirstNameChangeHandler}
            value={enteredFirstName}
            onBlur={FirstNameBlur}
            // className={classes_value}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={LastNameChangeHandler}
            value={enteredLastName}
            onBlur={LastNameBlur}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={EmailChangeHandler}
          value={enteredEmail}
          onBlur={EmailBlur}
        />
      </div>
      <div className={classes.but}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default BasicForm;
