import React, { useContext } from "react";
import classes from "./Modal.module.css";
import PosterContext from "../ContextAPI/Poster-context";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {
  const navigate = useNavigate();
  function onClickHandler() {
    navigate("/");
  }

  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay} onClick={onClickHandler} />
      <div className={classes.modal}>{props.children}</div>
    </>,
    document.getElementById("portal")
  );
}
