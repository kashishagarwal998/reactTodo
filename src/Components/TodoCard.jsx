import React from 'react'
import { useState } from 'react'
import UpdateModal from './UpdateModal'
const TodoCard = ({todo,setTodos,openu,view,theme}) => {
  const[upOpen,setUpOpen]=useState(false);
 
  function openUpModal() {
    setUpOpen(true);
  }
  function closeUpModal() {
    setUpOpen(false);
  }
  const {title,description,completed}=todo;
  function toggleCompleted(){
    let newTodos;
    setTodos((prev)=>{
       newTodos=prev.map((item)=>{
        if(item.id===todo.id){
          item.completed=!item.completed
          return item;
        }
        return item;
      })
      return newTodos  
    })
    localStorage.setItem("todosList", JSON.stringify(newTodos)) 
  }
  function delfromlocalStorage(){
    let newTodos;
    setTodos((prev)=>{
       newTodos=prev.filter((item)=>{
        if(item.id!==todo.id){
          return item;
        }
      })
      return newTodos || [];
    
    })
    localStorage.setItem("todosList", JSON.stringify(newTodos || [])) 
  }
  
  if(view=="list"){
    return (
      <div className={`h-[300px] w-[300px] rounded-lg p-3 ${theme=="light"?"bg-[#FFB4A2]  border border-black/10":"bg-black text-white  border border-white"  }`}>
        <div className='flex justify-between items-center '>
           <h3 className='font-semibold'>{title}</h3>
         <button onClick={toggleCompleted}>  {completed?"♥️":<div className='w-5 h-5 border border-black rounded-sm'></div>}</button>
        </div>
    <div className='w-[270px] mt-2 h-[200px] border border-black/10 rounded-lg p-2 bg-[#FFF5E4]'><p className={`text-sm break-words ${theme=="light"?"text-black":"text-black "}`}>{description}</p></div>
    <button className='border border-black p-[4px] bg-[#B03052] text-white rounded-lg mt-[10px] ml-[160px] text-xs' onClick={openUpModal}>Update</button>
    <button onClick={delfromlocalStorage} className='border border-black p-[4px] bg-[#B03052] text-white rounded-lg text-xs ml-2'>Remove</button>
    </div>
    )
  } 

  return (
    <>
    {upOpen && (<UpdateModal closeup={closeUpModal} todo={todo} setTodos={setTodos} />)}
    <div className={`h-[300px] w-[300px] rounded-lg p-3 ${theme=="light"?"bg-[#FFB4A2]  border border-black/10":"bg-black text-white  border border-white"  }`}>
        <div className='flex justify-between items-center '>
           <h3 className='font-semibold'>{title}</h3>
         <button onClick={toggleCompleted}>  {completed?"♥️":<div className='w-5 h-5 border border-black rounded-sm'></div>}</button>
        </div>
    <div className='w-[270px] mt-2 h-[200px] border border-black/10 rounded-lg p-2 bg-[#FFF5E4]'><p className={`text-sm break-words ${theme=="light"?"text-black":"text-black "}`}>{description}</p></div>
    <button className='border border-black p-[4px] bg-[#B03052] text-white rounded-lg mt-[10px] ml-[160px] text-xs' onClick={openUpModal}>Update</button>
    <button onClick={delfromlocalStorage} className='border border-black p-[4px] bg-[#B03052] text-white rounded-lg text-xs ml-2'>Remove</button>
    </div>
    </>
  )
}

export default TodoCard
