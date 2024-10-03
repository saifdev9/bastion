import React from 'react'
import { PieChart, ResponsiveContainer, Pie, Cell, Legend } from 'recharts'

function Piechart(props) {

  const colors = ["#c37240", "#d6d452", "#868585"]
  const strokes = ["#e57520", "#c2bf28", "#626060"]

  function CustomLegend (props) {
             return (
               <main className="flex flex-col text-white text-md font-medium font-mono  justify-center px-12 gap-2 ">
                  <section className="flex items-center gap-2">
                    <li className="w-2 h-2 rounded-full bg-orange-500 list-none" ></li>
                    <p>{"Men"}</p>
                  </section>


                  <section className="flex items-center gap-2">
                     <li className="w-2 h-2 rounded-full bg-yellow-500 list-none" ></li>
                     <p>{"Women"}</p>
                  </section>

                  <section className="flex items-center gap-2">
                     <li className="w-2 h-2 rounded-full bg-gray-500 list-none" ></li>
                     <p>{"Kids"}</p>
                  </section>
              </main>

             )
   }


   return (
      <main className='lg:w-1/4 md:w-5/6 xs:w-11/12   bg-gray-800   font-sans rounded-md shadow-md'>
         <p className='text-white text-xl p-3 font-semibold font-sans'>Sales by category</p>
         <ResponsiveContainer width="100%" height={300}>
               <PieChart  className=''>
                     <Pie className='' label="true" data={props.data} cx="50%" innerRadius={55} outerRadius={80}  paddingAngle={0} cy="50%"  dataKey="value" nameKey="name">
                        {
                           props.data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={colors[index]} stroke={strokes[index]}/>
                           ))
                        }
                     </Pie>
               </PieChart>
         </ResponsiveContainer>
         <CustomLegend/>
      </main>
  )
}

export default Piechart