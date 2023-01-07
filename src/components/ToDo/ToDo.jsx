import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./ToDo.module.css";

export default function ToDo({ item, onDelete, onUpdate }) {
  const handleChange = () => {
    const newItem = item;
    newItem.status === "active"
      ? (newItem.status = "completed")
      : (newItem.status = "active");

    onUpdate(newItem);
  };
  return (
    <li className={styles.toDo} key={item.id}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={item.id}
        checked={item.status !== "active"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={item.id}>
        {item.name}
      </label>
      <span className={styles.icon}>
        <button
          className={styles.button}
          onClick={() => {
            onDelete(item.id);
          }}
        >
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
