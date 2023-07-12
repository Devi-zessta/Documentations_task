import "./InputCom.css";
// import UserName from "./UserName";
// import Age from "./Age";
import Button from "./Button";

function InputCom() {
  function submitHandler(event) {
    event.preventDefault();
    console.log(event.value);
  }

  return (
    <div className="InputCom">
      <form className="form_css" onSubmit={submitHandler}>
        <label htmlFor="username">UserName:</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
      {/* <UserName></UserName>
      <Age></Age>
      <Button></Button> */}
    </div>
  );
}
export default InputCom;
