import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import { v4 } from "uuid";
import ToDo from "../ToDo/ToDo";

export default function ToDoList() {
  const [todos, setToDos] = useState([
    { id: v4(), name: "장보기", status: "active" },
    { id: v4(), name: "공부하기", status: "active" },
  ]);
  const handleAdd = (add) => {
    setToDos((todos) => [...todos, add]);
  };
  const handleDelete = (id) => {
    setToDos(todos.filter((item) => item.id !== id));
    // 삭제를 희망하는 컴포넌트의 id를 전달받고, 해당 id를 이용하여 필터링.
    // 혹은 id가 아닌 item 자체를 전달받고, item.id를 이용하는 방법도 있다.
  };
  const handleUpdate = (updatedItem) => {
    setToDos(
      todos.map((item) => (updatedItem.id === item.id ? updatedItem : item))
      // 업데이트 된 todo(updatedItem)을 전달받아 기존 해당 todo를 업데이트한다.
    );
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <ToDo item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
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

// 각 ToDo들을 하나의 컴포넌트로 구성하기.
// -> map을 통해 item을 prop으로 ToDo 컴포넌트에 넘겨 준다.
// onAdd prop으로 handleDelete 콜백함수를 전달해 준다.
// 해당 함수는 id값을 전달받아, 해당 id값을 이용해 필터링해준 후 리턴해 준다.
