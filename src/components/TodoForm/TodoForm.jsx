import { useState } from "react";
import { useTodoContext } from "../../contexts";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (todoMsg.trim() !== "") {
      addTodo(Date.now(), { todo: todoMsg, completed: false });
      setTodoMsg("");
    }
  };

  return (
    <div className="flex gap-x-3">
      <input
        type="text"
        className="flex-1 border rounded-lg px-3 py-2 outline-none"
        placeholder="Add a new todo"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        style={{ color: "black", fontWeight: "bold" }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
