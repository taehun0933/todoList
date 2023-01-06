import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
}

export default App;
