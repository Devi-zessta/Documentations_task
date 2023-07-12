import React, { useState } from "react";
import classes from "./Calculator.module.css";
 const Calculator=(props:{name:string,children:string})=> {
  const [expression, SetExpression] = useState<string[]>(["0"]);
  const [value, SetValue] = useState<number>();
  const [IsEqualClicked, SetIsEqualClicked] = useState<boolean>(false);
  console.log(props.children)
  function classHandler(item: string) {
    const className: { [key: string]: string } = {
      "/": classes.Corner_items,
      "*": classes.Corner_items,
      "-": classes.Corner_items,
      "+": classes.Corner_items,
      "=": classes.Corner_items,
      "0": classes.Last_item,
    };
    return className[item];
  }
  function EqualToClickHandler() {
    SetIsEqualClicked(true);
    let result = 0;
    let array: (string | number)[] = [];

    expression.forEach((item) => {
      const val = +item;
      if (isNaN(val)) {
        array.push(result);
        array.push(item);
        result = 0;
      } else {
        result = result * 10 + val;
      }
    });
    array.push(result);
    let calres = 0;
    array.forEach((item, index) => {
      if (isNaN(+item)) {
        switch (item) {
          case "*":
            calres = +array[index - 1] * +array[index + 1];
            array[index + 1] = calres;
            array[index] = -9.9999;
            array[index - 1] = -9.9999;
            break;
          case "/":
            calres = +array[index - 1] / +array[index + 1];
            array[index + 1] = calres;
            array[index + 1] = calres;
            array[index] = -9.9999;
            array[index - 1] = -9.9999;
            break;
          case "%":
            calres = +array[index - 1] % +array[index + 1];
            array[index + 1] = calres;
            break;
        }
      }
    });

    array = array.filter((item) => item !== -9.9999);
    array.forEach((item, index) => {
      if (isNaN(+item)) {
        switch (item) {
          case "+":
            calres = +array[index - 1] + +array[index + 1];
            array[index + 1] = calres;
            console.log("arr", array);
            break;
          case "-":
            calres = +array[index - 1] - +array[index + 1];
            array[index - +1] = calres;
            break;
        }
      }
    });
    console.log("array after filter", array);
    console.log("calres", calres);
    SetValue(calres);
    SetExpression(() => [calres.toString()]);
  }
  function OnChangeHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const item = event.currentTarget.getAttribute("value")!; // string
    SetIsEqualClicked(false);
    if (item === "AC") {
      SetExpression(["0"]);
    } else {
      SetExpression((prev) => {
        const a = [...prev];
        if ([...prev].length === 1 && a[0] === "0") {
          return [item];
        }
        return [...prev, item];
      });
    }
  }
  const values = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className={classes.container}>
      <div className={`${classes.FirstItem}`}>
        {IsEqualClicked ? value : expression}
      </div>
      {values.flat().map((item, i) => (
        <button
          className={`${classHandler(item)} ${classes.items}`}
          value={item}
          key={i}
          onClick={item === "=" ? EqualToClickHandler : OnChangeHandler}
        >
          {item}
        </button>
      ))}
      {/* <button className={classes.items} onClick={OnChangeHandler} value={"AC"}>
        AC
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"+/-"}>
        +/-
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"%"}>
        %
      </button>
      <button
        className={`${classes.items} ${classes.Corner_items}`}
        onClick={OnChangeHandler}
        value={"/"}
      >
        /
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"7"}>
        7
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"8"}>
        8
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"9"}>
        9
      </button>
      <button
        className={`${classes.items} ${classes.Corner_items}`}
        onClick={OnChangeHandler}
        value={"*"}
      >
        *
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"4"}>
        4
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"5"}>
        5
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"6"}>
        6
      </button>
      <button
        className={`${classes.items} ${classes.Corner_items}`}
        onClick={OnChangeHandler}
        value={"-"}
      >
        -
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"1"}>
        1
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"2"}>
        2
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"3"}>
        3
      </button>
      <button
        className={`${classes.items} ${classes.Corner_items}`}
        onClick={OnChangeHandler}
        value={"+"}
      >
        +
      </button>
      <button
        className={classes.Last_item}
        onClick={OnChangeHandler}
        value={"0"}
      >
        0
      </button>
      <button className={classes.items} onClick={OnChangeHandler} value={"."}>
        .
      </button>
      <button
        className={`${classes.items} ${classes.Corner_items}`}
        onClick={EqualToClickHandler}
      >
        =
      </button> */}
    </div>
  );
}

export default Calculator;


