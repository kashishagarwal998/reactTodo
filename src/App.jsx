import NavBar from "./Components/NavBar"
import Crousel from "./Components/Crousel"
import TodoSection from "./Components/TodoSection"
import AddTaskModal from "./Components/AddTaskModal"
import { useState } from "react"

function App() {
  
  let todosInitial = [];
   const initialTheme= localStorage.getItem("theme") ;
    const [theme, setTheme] = useState(initialTheme);

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
  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      localStorage.setItem("theme", "dark");
    } else {
      setTheme('light')
      localStorage.setItem("theme", "light");
    }
  }
 
 

  return (

    <div >
      {isOpen && <AddTaskModal close={closeModal} setTodos={setTodos}/>}
      <NavBar toggleTheme={toggleTheme} theme={theme}/>
      <Crousel/>
      <TodoSection open={openModal} todos={todos} setTodos={setTodos} theme={theme}/>

    </div>

  )
}

export default App
