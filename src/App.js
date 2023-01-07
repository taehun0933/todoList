import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
