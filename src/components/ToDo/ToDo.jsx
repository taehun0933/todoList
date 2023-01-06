import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ToDo({ item, onDelete, onUpdate }) {
  const handleChange = () => {
    const newItem = item;
    newItem.status === "active"
      ? (newItem.status = "completed")
      : (newItem.status = "active");

    onUpdate(newItem);
  };
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        id={item.id}
        checked={item.status !== "active"}
        onChange={handleChange}
      />
      <label htmlFor={item.id}>{item.name}</label>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}
