import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    console.log(todos);
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <h1>My todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Write your to do..."
          onChange={onChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
