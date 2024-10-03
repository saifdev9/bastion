import React, { useState } from 'react'

export default function Counter({returnInputValue}) {
   
  const [num,setNum] = useState(1)

  const onClickHandler = (e,action) => {
     console.log(action)
     if (action ==="add" && num < 100) {
        returnInputValue(num + 1,action)
        setNum(state => state + 1)
     }

     if (action ==="subtract" && num > 1) {
        returnInputValue(num - 1,action)
        setNum(state => state - 1)
     }
  }
  return (
    <section className='bg-red-90  w-2/3 flex items-center gap-2 '>

      <svg onClick={(e) => onClickHandler(e,"add")} className="w-1/4 cursor-pointer" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="plus-square"> <rect width="24" height="24" opacity="0"></rect> <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"></path> </g> </g> </g></svg>
      <div className='basis-1/2 bg-gray-50 h-8  rounded-md flex items-center justify-center  text-black select-none'>{num}</div>
      <svg onClick={(e) => onClickHandler(e,"subtract")} className="w-1/4 h-1/3 cursor-pointer" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="minus-square"> <rect width="24" height="24" opacity="0"></rect> <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"></path> </g> </g> </g></svg>
   
   </section>  
  
  )
}
