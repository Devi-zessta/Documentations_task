import classes from './input.module.css';

function Input(props){

    return(<div
        className={`${classes.control} ${
          props.IsValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>E-Mail</label>

        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onChange}
        />
      </div>);
}

export default Input;