import { useState } from "react";

function Form(props) {
  const [data, setData] = useState("");

  function InputHandler(event) {
    setData(event.target.value);
  }

  function submitHandler() {
    props.onsubmit(data);
    setData("");
  }

  return (
    <div>
      <input placeholder="enter task" onChange={InputHandler} value={data} />
      <button type="submit" value="submit" onClick={submitHandler}>
        submit
      </button>
    </div>
  );
}

export default Form;

