import React from 'react'

export default function PopUp({message,className,children}) {
  return (
    <div className={`${className}`}>
      <p>{message}</p>
      {children}
    </div>
  )
}
