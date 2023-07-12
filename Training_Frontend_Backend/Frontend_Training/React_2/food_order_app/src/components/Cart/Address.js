import { useRef, useState } from "react";
import classes from "./Address.module.css";
const IsEmpty = (value) => {
  return value.trim() === "";
};
const IsFiveChar = (value) => {
  return value.trim().length === 6;
};

const Address = (props) => {
  const enteredName = useRef();
  const enteredStreet = useRef();
  const enteredPostalCode = useRef();
  const enteredCity = useRef();
  const [IsFormValid, SetIsFormValid] = useState({
    Name: true,
    Street: true,
    PostalCode: true,
    City: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const EnteredNameIsValid = !IsEmpty(enteredName.current.value);
    const EnteredStreetIsValid = !IsEmpty(enteredStreet.current.value);
    const EnteredPostalCodeIsValid = IsFiveChar(
      enteredPostalCode.current.value
    );
    const EnteredCityIsValid = !IsEmpty(enteredCity.current.value);

    SetIsFormValid({
      Name: EnteredNameIsValid,
      Street: EnteredStreetIsValid,
      PostalCode: EnteredPostalCodeIsValid,
      City: EnteredCityIsValid,
    });

    props.onConfirm({
      Name: enteredName.current.value,
      Street: enteredStreet.current.value,
      PostalCode: enteredPostalCode.current.value,
      City: enteredCity.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          IsFormValid.Name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={enteredName} />
        {!IsFormValid.Name && (
          <p className={classes.invalid}>Please enter valid name</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          IsFormValid.Street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={enteredStreet} />
        {!IsFormValid.Street && (
          <p className={classes.invalid}>Please enter valid Street</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          IsFormValid.PostalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={enteredPostalCode} />
        {!IsFormValid.PostalCode && (
          <p className={classes.invalid}>Please enter valid PostalCode</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          IsFormValid.City ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={enteredCity} />
        {!IsFormValid.City && (
          <p className={classes.invalid}>Please enter valid City</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Address;
