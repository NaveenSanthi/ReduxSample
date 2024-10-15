import { useState } from "react";
import "./App.css";
import Demo from "./Demo";
import { useDispatch, useSelector } from "react-redux";
import { CounterReducerAction } from "./Store/CounterReducer";

function App() {
  // const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counterReducer.counter);

  const increaseCounterValue = () => {
    dispatch(CounterReducerAction.updateCounter(counterValue + 1));
    dispatch(CounterReducerAction.updateEmail("Nave@gmail.com"));
    // setCounter(counter + 1);
  };
  const resetHandler = () => {
    dispatch(CounterReducerAction.updateCounter(0));
    dispatch(CounterReducerAction.updateEmail("summa"));
  };
  return (
    <>
      <div className="mid">
        <p>{counterValue}</p>
        <button onClick={increaseCounterValue}>Increase Counter Value</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <Demo />
    </>
  );
}

export default App;
