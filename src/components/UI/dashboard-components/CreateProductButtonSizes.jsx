import React, { useState } from 'react'

export default function CreateProductButtonSizes({className,text,sizes,name,onChangeHandler}) {
  const [btnChange,setBtnChange] = useState(sizes.includes(text))

  const onBtnClickHandler = (e) => {

     e.preventDefault()

      if(btnChange) {
            const sortedArray = sizes.filter(el => el !== text).sort((a,b) => a - b)
            onChangeHandler(undefined,name,sortedArray)
      } else {
            const arr = [...sizes]
            arr.push(text)
            const sortedArray = arr.sort((a,b) => a - b)
            onChangeHandler(undefined,name,sortedArray)
      }

      setBtnChange(prevState => !prevState)    
  }


   return (
      <button onClick={onBtnClickHandler}  className={`${className} ${btnChange ? " bg-black text-white":" bg-white text-black"}`}>{text}</button>
   )
}

