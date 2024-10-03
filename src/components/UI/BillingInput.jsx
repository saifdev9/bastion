import React, { useState,forwardRef } from 'react'
import FormattedInput from './FormattedInput'


function BillingInput({data,label,className,type,maxLen,name,setChanged},ref) {

  const onChangeHandler = (e) => {

    if(e.target.value.trim() !== data.toString().trim()) {
      ref.current[name] = e.target.value
      setChanged(true)
    } else {
      setChanged(false)
    }
  }


  let formattedInput = <FormattedInput maxLen={19} minLen={19} data={data}/>

  return (
    <label onChange={onChangeHandler} className={`flex flex-col gap-1  ${className} `}>
      <p className='text-sm text-gray-500 font-semibold'>{label}</p>
      {label==="Card number"? formattedInput:<input defaultValue={data} type={type} maxLength={maxLen} className={`bg-gray-50 text-lg font-medium shadow-md border-2 border-gray-300 hover:border-gray-800 rounded-md px-2 outline-none h-10 w-full `} />}
    </label>
  )
}

export default forwardRef(BillingInput)