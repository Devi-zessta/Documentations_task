import classes from "./Data.module.css";

const Data = (props) => {
 

  return <ul className={classes.data}>
    {props.ItemsDisp.map((item) => {
        
        return(<li key={item.id}>{item.task}</li>);
      })}

  </ul>;
};
export default Data;
