import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [filter, setFilter] = useState("all");
  const handleFilter = (status) => {
    setFilter(status);
  };
  return (
    <>
      <Header filter={filter} onFilter={handleFilter} />
      <ToDoList filter={filter} />
    </>
  );
}

export default App;

// 필터링 구현하기
// header의 상위 컴포넌트인 App.js에서 state인 filter 선언.
