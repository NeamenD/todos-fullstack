import { useRef, useState } from "react";

import "./App.css";

function App() {
  const textRef = useRef();

  const completeRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(textRef.current.value);
    console.log(textRef.current.checked);
  }
  return (
    <div>
      <h1>Todo</h1>

      <form onSubmit={handleSubmit}>
        <label>
          I want to :
          <input type="text" ref={textRef} />
        </label>
        <label htmlFor="">
          <input type="checkbox" ref={completeRef} />
        </label>
        <div>
          <br />
          <button>ADD Todo</button>
        </div>
      </form>
    </div>
  );
}

export default App;
