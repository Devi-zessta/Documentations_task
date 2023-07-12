import { useState } from "react";
import useFormvalidity from "../hooks/CustomFormHook";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    ChangeHandler: ChangeHandlerName,
    BlurHandler: BlurHandlerName,
    IsValid: IsNameValid,
    reset: ResetName,
  } = useFormvalidity((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: EmailInputHasError,
    ChangeHandler: ChangeHandlerEmail,
    BlurHandler: BlurHandlerEmail,
    IsValid: IsEmailValid,
    reset: ResetEmail,
  } = useFormvalidity((value)=>value.trim() !== "" && value.includes("@"));

  let FormIsValid = false;
  if (IsNameValid && IsEmailValid) {
    FormIsValid = true;
  }

  function SubmitHandler(event) {
    event.preventDefault();

    if (!IsNameValid && !IsEmailValid) {
      return;
    }
    ResetName();
    ResetEmail();
    
  }

  
  const classesName = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const classesEmail = EmailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={SubmitHandler}>
      <div className={classesName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={BlurHandlerName}
          onChange={ChangeHandlerName}
        />
      </div>
      {nameInputHasError && <p className="error-text">enter valid input</p>}
      <div className={classesEmail}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={BlurHandlerEmail}
          onChange={ChangeHandlerEmail}
        />
      </div>
      {EmailInputHasError && <p className="error-text">enter valid input</p>}

      <div className="form-actions">
        <button disabled={!FormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

/******************************************************************************************************/

// import { useState } from "react";
// import Input from "./Input";
// import useFormvalidity from "../hooks/CustomFormHook";

// const SimpleInput = (props) => {
//   const {}=useFormvalidity();
//   // const [enteredName, SetEnteredName] = useState("");
//   // const [IsTouchedName, SetIsTouchedName] = useState(false);

//   // const [enteredEmail, SetEnteredEmail] = useState("");
//   // const [IsTouchedEmail, SetIsTouchedEmail] = useState(false);

//   // const enteredNameIsValid = enteredName.trim() !== "";
//   // const nameInputIsValid = !enteredNameIsValid && IsTouchedName;

//   // const enteredEmailIsValid =
//   //   enteredEmail.trim() !== "" && enteredEmail.includes("@");
//   // const EmailInputIsValid = !enteredEmailIsValid && IsTouchedEmail;

//   // let FormIsValid = false;
//   // if (enteredNameIsValid && enteredEmailIsValid) {
//   //   FormIsValid = true;
//   // }

//   // function SubmitHandler(event) {
//   //   event.preventDefault();
//   //   SetIsTouchedName(true);
//   //   SetIsTouchedEmail(true);
//   //   if (!enteredNameIsValid && !enteredEmailIsValid) {
//   //     return;
//   //   }
//   //   SetEnteredName("");
//   //   SetEnteredEmail("");
//   //   SetIsTouchedEmail(false);
//   //   SetIsTouchedName(false);
//   // }

//   // function BlurHandlerName() {
//   //   SetIsTouchedName(true);
//   // }
//   // function BlurHandlerEmail() {
//   //   SetIsTouchedEmail(true);
//   // }

//   // function ChangeHandlerName(event) {
//   //   SetEnteredName(event.target.value);
//   //   SetIsTouchedName(true);
//   // }
//   // function ChangeHandlerEmail(event) {
//   //   SetEnteredEmail(event.target.value);
//   //   SetIsTouchedEmail(true);
//   // }
//   const classesName = nameInputIsValid
//     ? "form-control invalid"
//     : "form-control";
//   const classesEmail = EmailInputIsValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form >
//       <div className={classesName}>
//         <Input type="text" id="name" text="enter your name" />
//       </div>
//       {/* {nameInputIsValid && <p className="error-text">enter valid input</p>} */}
//       <div className={classesEmail}>
//       <Input type="email" id="email" text="enter your email" />
//       </div>
//       {/* {EmailInputIsValid && <p className="error-text">enter valid input</p>} */}

//       <div className="form-actions">
//         {/* <button disabled={!FormIsValid}>Submit</button> */}
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

/****************************************************************************************/

// import { useState } from "react";
// import useFormvalidity from "../hooks/CustomFormHook";

// const SimpleInput = (props) => {
//   const { enteredInput, IsTouchedInput, BlurHandler, ChangeHandler } =
//     useFormvalidity(ValidateValue);

//   function ValidateValue(value)
//   {

//   }

//   let FormIsValid = false;
//   if (enteredNameIsValid && enteredEmailIsValid) {
//     FormIsValid = true;
//   }

//   function SubmitHandler(event) {
//     event.preventDefault();
//     SetIsTouchedName(true);
//     SetIsTouchedEmail(true);
//     if (!enteredNameIsValid && !enteredEmailIsValid) {
//       return;
//     }
//     SetEnteredName("");
//     SetEnteredEmail("");
//     SetIsTouchedEmail(false);
//     SetIsTouchedName(false);
//   }

//   function BlurHandlerName() {
//     SetIsTouchedName(true);
//   }
//   function BlurHandlerEmail() {
//     SetIsTouchedEmail(true);
//   }

//   function ChangeHandlerName(event) {
//     SetEnteredName(event.target.value);
//     SetIsTouchedName(true);
//   }
//   function ChangeHandlerEmail(event) {
//     SetEnteredEmail(event.target.value);
//     SetIsTouchedEmail(true);
//   }
//   const classesName = nameInputIsValid
//     ? "form-control invalid"
//     : "form-control";
//   const classesEmail = EmailInputIsValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={SubmitHandler}>
//       <div className={classesName}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={enteredInput}
//           onBlur={BlurHandler()}
//           onChange={ChangeHandler}
//         />
//       </div>
//       {nameInputIsValid && <p className="error-text">enter valid input</p>}
//       <div className={classesEmail}>
//         <label htmlFor="email">Your Email</label>
//         <input
//           type="email"
//           id="email"
//           value={enteredEmail}
//           onBlur={BlurHandlerEmail}
//           onChange={ChangeHandlerEmail}
//         />
//       </div>
//       {EmailInputIsValid && <p className="error-text">enter valid input</p>}

//       <div className="form-actions">
//         <button disabled={!FormIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
