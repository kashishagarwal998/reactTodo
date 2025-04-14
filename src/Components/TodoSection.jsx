import React from 'react'
import TodoCard from './TodoCard'
import { useState } from 'react'

const TodoSection = ({ open, todos, setTodos }) => {
  const initialView= localStorage.getItem("view") ;
  const initialTheme= localStorage.getItem("theme") ;
  const [theme, setTheme] = useState(initialTheme);
  const [view, setView] = useState(initialView);

  const toggleView = () => {
    if (view == 'grid') {
      setView('list')
      localStorage.setItem("view", "list");
    } else {
      setView('grid')
      localStorage.setItem("view", "grid");
    }
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
    <div className='p-8 flex flex-col items-center justify-center gap-4'>
      <h2 className='text-center text-2xl font-semibold'>TODO</h2>
      <div className='flex gap-4'> <button className='border border-black/10 bg-[#E6B2BA] rounded-md px-5 py-2' onClick={open}>Create Todo</button>
        <button onClick={toggleView} className='bg-[#E6B2BA] px-4 rounded-md'>{view=="grid"?"⏹️grid":"📃list"}</button>
        <button onClick={toggleTheme} className='bg-[#E6B2BA] px-4 rounded-md'>Theme</button></div>
      <div className={`flex gap-4 flex-wrap justify-center ${view=="grid"?"flex-row flex-wrap":"flex-col"}`}>
        {todos.length == 0 && <h2 className='text-center text-2xl font-semibold'>NO Todos are Added</h2>}
        {todos.map(todo => {
          if (!todo.completed)
            return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} view={view} theme={theme}/>

        })}
        {todos.map(todo => {
          if (todo.completed)
            return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} view={view} theme={theme}/>

        })}

      </div>
    </div>
  )
}

export default TodoSection
