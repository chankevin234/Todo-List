import React, { useState } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //react hook to call function setInputText from Form.js and place it in <Form />
  const [inputText, setInputText] = useState("");
  //react hook to call function setTodos and place it in <Form />
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Kev's To-Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
