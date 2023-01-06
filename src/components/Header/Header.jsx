import React from "react";

export default function Header({ filter, onFilter }) {
  return (
    <ul>
      <li>
        <button
          value="all"
          onClick={(ev) => {
            onFilter(ev.target.value);
          }}
        >
          all
        </button>
      </li>
      <li>
        <button
          value="active"
          onClick={(ev) => {
            onFilter(ev.target.value);
          }}
        >
          active
        </button>
      </li>
      <li>
        <button
          value="completed"
          onClick={(ev) => {
            onFilter(ev.target.value);
          }}
        >
          completed
        </button>
      </li>
    </ul>
  );
}
