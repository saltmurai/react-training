import { useState } from "react";

function useCounter(start) {
  const [counter, setCounter] = useState(start);

  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  return { counter, increase, decrease };
}

export default useCounter;
