import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";

export default function ToDoList() {
  const [todos, setToDos] = useState([
    { id: "123", name: "장보기", status: "active" },
    { id: "124", name: "공부하기", status: "active" },
  ]);
  const handleAdd = (add) => {
    setToDos((todos) => [...todos, add]);
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <AddToDo onAdd={handleAdd} />
      {/* 
      add가 되면 발생할 처리에 대한 콜백함수를 전달해 주므로, prop의 이름은 onAdd로 설정해 주었다.
      또한 add되었을 때 처리해 줄 함수명은 handleAdd로 한다.
       */}
    </section>
  );
}
