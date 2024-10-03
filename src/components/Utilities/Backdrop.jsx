import React from 'react'
import { useState } from 'react'


function Backdrop(props) {
 
   const [touched,setTouched] = useState(false);

   const clickHandler = ()=> {
      setTouched(true)

      props.call(touched)
   }

  return (
    <section onClick={clickHandler} className='w-full bg-red-900 h-screen absolute translate-y-1/2'>

    </section>
  )
}

export default Backdrop