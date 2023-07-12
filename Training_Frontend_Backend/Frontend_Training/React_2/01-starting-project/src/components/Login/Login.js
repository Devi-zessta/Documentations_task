import React, { useEffect, useReducer, useState } from "react";
import Input from '../input/input'
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

function emailreducer(Emailstate, action) {
  if (action.type === "UserInput") {
    return { value: action.val, IsValid: action.val.includes("@") };
  }
  if (action.type === "Input_blur") {
    return { value: Emailstate.value, IsValid: Emailstate.value.includes("@") };
  }
  return { value: "", IsValid: false };
}

function passwordreducer(PassState, action) {
  if (action.type === "passInput") {
    return { value: action.val, IsValid: action.val.trim().length > 6 };
  }
  if (action.type === "Input_blur") {
    return {
      value: PassState.value,
      IsValid: PassState.value.trim().length > 6,
    };
  }
  return { value: "", IsValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [Emailstate, emaildispatcher] = useReducer(emailreducer, {
    value: "",
    IsValid: null,
  });

  const [PassState, passwrddispatcher] = useReducer(passwordreducer, {
    value: "",
    IsValid: null,
  });

  //******useEffect********//

  const { IsValid: emailvalidity } = Emailstate;
  const { IsValid: passwordvalidity } = PassState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("useeffect");
      setFormIsValid(emailvalidity && passwordvalidity);
    }, 500);
    return () => {
      console.log("clean function");
      clearTimeout(identifier);
    };
  }, [passwordvalidity, emailvalidity]);

  const emailChangeHandler = (event) => {
    emaildispatcher({ type: "UserInput", val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && PassState.IsValid);
  };

  const passwordChangeHandler = (event) => {
    passwrddispatcher({ type: "passInput", val: event.target.value });

    setFormIsValid(Emailstate.IsValid && PassState.IsValid);
  };

  const validateEmailHandler = () => {
    emaildispatcher({ type: "Input_blur" });
  };

  const validatePasswordHandler = () => {
    passwrddispatcher({ type: "Input_blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(Emailstate.value, PassState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input
       type='email'
       id='email'
       onChange={emailChangeHandler}
       IsValid={Emailstate.IsValid}
       onBlur={validateEmailHandler}
       ></Input>
        <Input
       type='password'
       id='password'
       onChange={passwordChangeHandler}
       IsValid={PassState.IsValid}
       onBlur={validatePasswordHandler}
       ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

