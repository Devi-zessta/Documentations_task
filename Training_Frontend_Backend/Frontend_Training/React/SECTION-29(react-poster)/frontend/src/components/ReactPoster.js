// import { useContext } from "react";
// import NewPoster from "./NewPoster";
import PosterList from "./PosterList";
import classes from "./ReactPoster.module.css";
import { BiCommentDetail } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import PosterContext from "../ContextAPI/Poster-context";
import { Link } from "react-router-dom";

const ReactPoster = () => {

 
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h1 className={classes.h1}>
          <div>
            <BiCommentDetail />
          </div>
          <div>React Poster</div>
        </h1>
        <Link className={classes.button} to={'/form'} >
          <div>
            <BiCommentAdd />
          </div>
          <div>New Post</div>
        </Link>
      </div>

      <div>
        <PosterList />
      </div>
    </div>
  );
};
export default ReactPoster;
