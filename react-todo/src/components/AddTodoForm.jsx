import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
