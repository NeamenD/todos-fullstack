import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch("http://localhost:8080/api/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, []);
  const textRef = useRef();
  const completeRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1, // Generate a new unique ID
      text: textRef.current.value,
      complete: completeRef.current.checked,
      user: "unknown", // Default user value (you can change this as needed)
    };
    setTodos([...todos, newTodo]);
    textRef.current.value = ""; // Clear the input field after submission
    completeRef.current.checked = false; // Uncheck the checkbox after submission
  }

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          I want to:
          <input type="text" ref={textRef} required />
        </label>
        <label>
          Complete:
          <input type="checkbox" ref={completeRef} />
        </label>
        <div>
          <br />
          <button type="submit">ADD Todo</button>
        </div>
      </form>
      <div>
        {todos.map((todo) => (
          <p
            key={todo.id}
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
