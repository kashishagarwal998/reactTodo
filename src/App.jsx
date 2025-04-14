import NavBar from "./Components/NavBar"
import Crousel from "./Components/Crousel"
import TodoSection from "./Components/TodoSection"
import AddTaskModal from "./Components/AddTaskModal"
import { useState } from "react"

function App() {
  
  let todosInitial = [];

try {
  const stored = localStorage.getItem("todosList");
  todosInitial = stored ? JSON.parse(stored) : [];
} catch (e) {
  console.error("Invalid JSON in localStorage:", e);
  todosInitial = [];
}
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todosInitial);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 

  return (

    <div >
      {isOpen && <AddTaskModal close={closeModal} setTodos={setTodos}/>}
      <NavBar />
      <Crousel/>
      <TodoSection open={openModal} todos={todos} setTodos={setTodos} />

    </div>

  )
}

export default App
