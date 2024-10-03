import React from 'react'

function SelectInputArray({arr,className,value,name,onChangeHandler}) {
  
  return (
    <select onChange={(e) => onChangeHandler(e.target.value,name)} value={value}  className={className}>
         {arr.map((el,i)=>{
            return <option  value={el} key={i}>{el}</option>
         })}
    </select>
  )
}

export default SelectInputArray