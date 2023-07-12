import classes from './IntegredientCom.module.css';

const IntegredientCom=()=>{
    return(
  <form className={classes.form}>
     <label htmlFor="name">Name</label>
     <input id="name" type="text"></input>
     <label htmlFor="amount">Amount</label>
     <input id="amount" type="number"></input>
     <button>Add Integredient</button>
  </form>
    );

}
export default IntegredientCom;