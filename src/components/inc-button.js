import { useState } from "react";

function Button() {
  const [count, setState] = useState(1); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment(e) {
    //setCount(prevCount => prevCount+=1);
    setState(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setState(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="counter">
      <button className="decrease-amount" onClick={decrement}>
        -
      </button>
      <input type="text" className="amount" defaultValue="1" value={count} />
      <button className="increase-amount" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Button;