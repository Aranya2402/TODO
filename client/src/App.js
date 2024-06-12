import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>your tasks</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text"> cat </div>
          <div className="delete-todo"></div>
        </div>
      </div>

      <div className="todos">
        <div className="todo is- complete">
          <div className="checkbox"></div>
          <div className="text"> Dog </div>
          <div className="delete-todo"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
