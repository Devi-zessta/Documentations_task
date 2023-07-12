/*******************************Redux******************************************/

// import classes from './Counter.module.css';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// const Counter = () => {
//   const dispatch=useDispatch();
//   const toggleCounterHandler = () => {
//     dispatch({type:'showcounter'});
//   }
   
//   const incrementHandler=()=>{
//     dispatch({type:'increment'});
//   }
//   const decrementHandler=()=>{
//     dispatch({type:'decrement'});
//   }
//   const increment=()=>{
//     dispatch({type:'increase',amount:5});
//   }
//   const counter=useSelector(state=>state.counter);
//   const showCounterValue=useSelector(state=>state.ShowCounter)
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounterValue &&<div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increment}>Increment by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;



/****************************** Class based components *******************************/
// import { Component } from "react";
// import classes from "./Counter.module.css";
// import { connect } from "react-redux";
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps=(state)=>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//   increment:()=>dispatch({type:'increment'}),
//   decrement:()=>dispatch({type:'decrement'})
//   };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);



/*******************************Redux toolkit************************************/

import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {counterActions} from '../store/index';
const Counter = () => {
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  }
   
  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  const increment=()=>{
    dispatch(counterActions.increase(5));
  }
  const counter=useSelector(state=>state.counter.counter);
  const showCounterValue=useSelector(state=>state.counter.ShowCounter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterValue &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
