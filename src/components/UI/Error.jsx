import React from 'react'

export default function Error({message,code,className}) {
  return (
    <div className={`flex h-screen flex-col justify-center items-center gap-4 bg-red-900 text-white ${className} `}>
      <p className='text-4xl font-bold text-yellow-400'>{code}</p>
      <p className='text-xl font-bold'>{message}</p>
    </div>
  )
}
