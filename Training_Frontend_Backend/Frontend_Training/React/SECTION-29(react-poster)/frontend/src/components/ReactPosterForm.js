import { useContext } from "react";
import classes from "./ReactPosterForm.module.css";
import PosterContext from "../ContextAPI/Poster-context";
import Modal from "./Modal";
import { Form, Link, NavLink, json, redirect, useNavigate } from "react-router-dom";

const ReactPosterForm = () => {
  
  // const navigate=useNavigate();
  // function SubmitHandler(event) {
  //   event.preventDefault();
    
    
  //   navigate('/')
    // console.log(event.target[0].value);
    // cntx.DataDispatch({
    //   post: event.target[0].value,
    //   name: event.target[1].value,
    // });
  // }

  return (
    <Modal>
      <Form className={classes.form} method="post">
        <label htmlFor="text">Text</label>
        <textarea id="text" name="post"required></textarea>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required></input>
        <div className={classes.button}>
          <NavLink className={classes.Cancel} to={"/"}>
            Cancel
          </NavLink>
          <button className={classes.Submit} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ReactPosterForm;


export const action=async({request})=>{
 const data=await request.formData();
  
  fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post:data.get('post'),
        name: data.get('name'),
      }),
    });
  console.log("sending data");
  return redirect('/')

}