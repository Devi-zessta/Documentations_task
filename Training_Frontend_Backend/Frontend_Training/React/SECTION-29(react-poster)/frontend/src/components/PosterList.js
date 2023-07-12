import { useContext } from "react";
import PosterContext from "../ContextAPI/Poster-context";
import classes from "./PosterList.module.css";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";

const PosterList = () => {
  const Data = useLoaderData();
  console.log("posterList");

  // console.log(typeof(Data));
  console.log(Data);
  // const state=useNavigation().state==='loading';
  // console.log(state);
  // console.log(useNavigation().state);

  // console.log("data:",Data);
  // const cntx = useContext(PosterContext);
  if (Data?.length === 0) {
    return (
      <div className={classes.NoListItems}>
        <p>No list items yet.......</p>
      </div>
    );
  }

  return (
    <div>
      <ul className={classes.list}>
        {Data?.map((obj) => {
          return (
            <div className={classes.items}>
              <li>{obj.name}</li>
              <li>{obj.post}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PosterList;

export const loader = async () => {
  console.log("fetching");
  const Data = await fetch("http://localhost:8080/posts");
  const result = await Data.json();
  console.log("fetc", result.posts);
  //  console.log(result.posts.length);
  //  console.log(result.posts.length)
  return result.posts;
};
