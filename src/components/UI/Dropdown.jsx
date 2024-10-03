import React, { useState } from 'react'

export default function Dropdown({list,heading, setFilter}) {

   const [bool,setBool] = useState(false)
   const [filterHeading,setFilterHeading] = useState(heading)

   const onOptionClick = (e)  => {
      setFilter(e.target.innerText)
      setFilterHeading(e.target.innerText)
      setBool(false)
   }

  return (
    <section onMouseLeave={()=> setBool(false)}className={`relative flex-col flex justify-center bg-gray-200 hover:bg-gray-100 rounded-t-lg p-2   ${!bool && " rounded-lg"} w-28 cursor-default z-10`}>
     <div onClick={()=> setBool(prev => !prev)}   className='flex items-center justify-between gap-3 '>
         <h1>{filterHeading}</h1>
         <div className={`flex flex-col items-center w-4 h-4 ${bool && " scale-110"}`}>
            <svg  fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></g></svg>
            <svg  fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
         </div>
     </div>
     
      { bool && 
         <div className=' absolute top-full z-20 w-full right-1/2 translate-x-1/2 flex flex-col  pt-1 rounded-b-lg cursor-pointer  bg-gray-50 transform-all'>
         {list.map((el,i)=> <p onClick={onOptionClick}  key={i} className='hover:bg-gray-950 hover:text-white pl-2 py-1'>{el}</p>)}
         </div>
      }


    </section>
  )
}
