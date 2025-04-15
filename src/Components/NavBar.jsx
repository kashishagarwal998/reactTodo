import React from 'react'

const NavBar = ({ toggleTheme, theme }) => {
  return (
    <div className={`h-16 flex justify-start gap-3 items-center p-[10px] text-2xl text-white  ${theme == "light" ? "bg-[#735557]" : "bg-black"} `}>
      <div className='h-8 w-8 rounded-full bg-[#FFECDB] px-2 pl-[6px] pt-[4px] text-black'><span class="material-symbols-outlined ">
        edit_note
      </span></div>
 <div className='grow'>     TodoApp</div>
      <button onClick={toggleTheme} className='bg-[#E6B2BA] pt-2 pl-2 pr-2 rounded-md '>{theme === "light" ? (
        <span className="material-icons">light_mode</span>
      ) : (
        <span className="material-icons">dark_mode</span>
      )}</button>
    </div>
  )
}

export default NavBar
