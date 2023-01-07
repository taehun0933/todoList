import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./AddToDo.module.css";

export default function AddToDo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (ev) => setInputValue(ev.target.value);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length !== 0) {
      onAdd({ id: v4(), name: inputValue, status: "active" });
      setInputValue("");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
