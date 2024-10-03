import React, { forwardRef, useImperativeHandle, useState } from 'react'


function GeneralHeading({heading,children,className,additionalInfo,name},ref) {

  const onChangeHandler= (e) => {
   console.log()
  }

  return (
    <label onChange={onChangeHandler} className={`flex flex-col gap-2 ${className}`}>
      <h4 className='text-md font-poppins font-medium'>{heading} <span className='text-gray-400 text-xs'>{additionalInfo}</span></h4>
      {children}
    </label>
  )
}

export default forwardRef(GeneralHeading)
