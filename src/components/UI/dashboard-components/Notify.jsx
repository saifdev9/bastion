import React from 'react'
import Card from '../../Utilities/Card'


function Notify(props) {
  return (
    <section className={`flex flex-col gap-0 border-2 border-gray-300 shadow-md  rounded-md py-1 w-3/4 ${props.className}`}>
            <span className='text-md px-4 text-gray-600 font-semibold border-b-2 rounded-sm border-gray-300 uppercase'>{props.relativeTime}</span>

            <Card className="flex flex-col gap-4 rounded-md  overflow-scroll shadow-gray-600 p-4">

               {/* use real array data to output a number of notifications, below are only examples */}
               <section className='flex gap-32 text-sm  '>
                  <p className='font-medium text-gray-500 font-sans'>{props.railwayTime}</p>
                  <p className='font-semibold'>{props.notification}</p>
               </section>

               <section className='flex gap-32 text-sm  '>
                  <p className='font-medium text-gray-500 font-sans'>{props.railwayTime}</p>
                  <p className='font-semibold'>{props.notification}</p>
               </section>

               <section className='flex gap-32 text-sm  '>
                  <p className='font-medium text-gray-500 font-sans'>{props.railwayTime}</p>
                  <p className='font-semibold'>{props.notification}</p>
               </section>

            </Card>
   </section>
  )
}

export default Notify