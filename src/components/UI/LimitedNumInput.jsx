import React, { useState,forwardRef } from 'react'

function LimitedNumInput({className,max,value,placeholder,name,onChangeHandler},ref) {

   const [maxVal,setMaxVal] = useState(value)
   
   const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

   const onChangeHandle = (e) => {
      if(e.target.value <= max & e.target.value !== "e") {
         onChangeHandler(e.target.value,name)
         setMaxVal(e.target.value)
      }
   }

   return (
     <input ref={ref} onKeyDown={blockInvalidChar} onChange={onChangeHandle}  value={maxVal} className={`${className}`} type="number" max={max} placeholder={placeholder} />
   )
}

export default forwardRef(LimitedNumInput)