import React, { useState } from "react";

export default function AddToDo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (ev) => setInputValue(ev.target.value);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length !== 0) {
      onAdd({ id: "고유값", name: inputValue, status: "active" });
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
