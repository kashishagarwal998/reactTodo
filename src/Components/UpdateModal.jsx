import React from 'react'
import { useState } from 'react'
const UpdateModal = ({closeup,setTodos,todo}) => {
     const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      function UpdateTodo() {
        if (!title || !description) {
            alert("Please fill all the fields");
            return;
          }
      
          let updatedTodos;
          setTodos(prev => {
            updatedTodos = prev.map(item => {
              if (item.id === todo.id) {
                return { ...item, title, description };
              }
              return item;
            });
            return updatedTodos;
          });
      
          localStorage.setItem("todosList", JSON.stringify(updatedTodos));
          closeup();
    }
  return (
<div className='fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center z-50' onClick={closeup}>
      <div className='h-[60vh] relative w-[300px] bg-[#735557] rounded-md p-5 flex flex-col gap-2' onClick={(e => e.stopPropagation())}>
        <button className='absolute -top-3 -right-1' onClick={closeup}>X</button>
        <input value={title} onInput={(e) => setTitle(e.target.value)} type="text" className='w-full p-1 rounded-md ' placeholder='enter todo title.....' />
        <textarea value={description} onInput={(e) => setDescription(e.target.value)} name="" id="" className='w-full h-full max-h-full rounded-md p-2' placeholder='enter todo description.....'>

        </textarea>
        <button className='border border-black/10 rounded-md bg-[#E195AB]' onClick={UpdateTodo}>UPDATE TODO</button>
      </div>
    </div>
  )
}

export default UpdateModal
