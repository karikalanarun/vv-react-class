import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return count >= 5 ? (
    <button>Max count reached</button>
  ) : (
    <button onClick={(e) => setCount(count + 1)}>clicked {count} times</button>
  );
}

function MySecond() {
  return (
    <div>
      <h2>This is MySecond Component</h2>
      <p>Welcome to the React world!</p>
    </div>
  );
}

function App() {
  // React.Fragment();
  let [numOfCounters, setNumOfCounters] = useState(1);
  let counters = [];
  for (let i = 0; i < numOfCounters; i++) {
    counters.push(<Counter key={i} />);
  }
  return (
    <>
      <button onClick={() => setNumOfCounters(numOfCounters + 1)}>+</button>
      {counters}
    </>
  );

  // return (
  //   <>
  //     {/* <MyComponent name="vivek" /> */}
  //     {counters}
  //   </>
  // );
  // return [<MyComponent></MyComponent>, <MySecond></MySecond>]
  // return React.createElement(
  //   React.Fragment,
  //   null,
  //   React.createElement(MyComponent),
  //   React.createElement(MySecond)
  // );
}

// undefined, null, jsx - dom element, another component, any valid js value

export default App;
