import {
  useState,
  useRef
} from "react";
import "./App.css";
import Num from "./Num.js";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    let value = inputRef.current.value;
    if (value != 0) {
      setResult((result) => result / Number(value));
    } else {
      alert('Dividing by 0 is forbidden');
    }
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  };

  function resetResult(e) {
    e.preventDefault();
    const procced = window.confirm("Do you whant to reset the Result?");
    if (procced) {
      setResult(0);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p id="result" ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <Num inputRef={inputRef} />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button id="red" onClick={resetInput}>Reset Input</button>
        <button id="red" onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App; 
