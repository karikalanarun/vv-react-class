import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

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

function TodoAdder({ added }) {
  const [typedTodo, setTypedTodo] = useState("");
  return (
    <div>
      <input
        value={typedTodo}
        onChange={(e) => setTypedTodo(e.target.value)}
      ></input>
      <button
        onClick={() => {
          added(typedTodo);
          setTypedTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}

function TodoItem({ completed, todo, remove }) {
  return (
    <div>
      <input type="checkbox" checked={completed}></input>
      <span>{todo}</span>
      <button onClick={() => remove()}>remove</button>
    </div>
  );
}

function TodoList({ todos, remove }) {
  return (
    <div>
      {/* <TodoItem todo={"prepare for react class"} completed={true}></TodoItem> */}
      {todos.map(({ completed, todo, id }) => (
        <TodoItem
          todo={todo}
          completed={completed}
          key={id}
          remove={() => remove(id)}
        ></TodoItem>
      ))}
    </div>
  );
}

function App() {
  let initialTodo = [
    { id: uuidv4(), completed: false, todo: "give summary of a class" },
  ];
  const [todos, setTodos] = useState(initialTodo);

  return (
    <>
      <TodoAdder
        added={(todo) => {
          console.log({ todo });
          setTodos([...todos, { id: uuidv4(), completed: false, todo }]);
        }}
      />
      <TodoList
        todos={todos}
        remove={(idToRemove) => {
          setTodos(todos.filter(({ id }) => id !== idToRemove));
        }}
      />
      {/* {TodoList({todos, remove})} */}
    </>
  );
}

// undefined, null, jsx - dom element, another component, any valid js value

export default App;
