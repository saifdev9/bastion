import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


function Linechart(props) {

   function CustomLegend ({payload}) {
             return (
               <main className="flex  text-black  text-md font-medium font-mono items-center gap-6">
                  <section className="flex items-center gap-2">
                    <li className="w-2 h-2 rounded-full bg-green-500 list-none" ></li>
                    <p>{"revenue"}</p>
                  </section>


                  <section className="flex items-center gap-2">
                     <li className="w-2 h-2 rounded-full bg-yellow-500 list-none" ></li>
                     <p>{"order"}</p>
                  </section>
              </main>

             )
   }



   function CustomToolTip ({active , payload, label}) {
      if(active) {
         return (
            <main className=" w-32 rounded-md font-sans gap-2 text-white items-center  p-3 shadow-md shadow-green-300 bg-gray-900 flex flex-col">
               <section className="flex gap-2 self-center">
                  <h3 className="text-gray-500 font-semibold text-lg ">{label}</h3>
               </section>

               <section className="flex    w-full ">
                  
                   <p className="text-green-400 w-1/2 ">{`$${payload[0].payload.revenue}`}</p>
                   <span className=" border-r-2  border-gray-500"></span>
                   <p  className="text-yellow-400 text-center  w-1/2">{`${payload[1].payload.order}`}</p>
               </section>
            </main>
         )

      }
   }


   return (
      <main className="flex flex-col md:w-5/6 xs:w-11/12 rounded-xl shadow-md shadow-gray-300 gap-2 ">

         <section className="flex items-end  justify-between p-4  ">
               <p className="text-lg font-semibold text-gray-500">Revenue vs Orders</p>
               <CustomLegend/>
         </section>
         <ResponsiveContainer width="100%" height={400} className={""}>
               <LineChart data={props.data}  className="font-sans text-black     bg-gray-50  shadow-gray-600  rounded-md ">
                     <Line type="bump" dataKey="revenue" stroke="#13b21b" strokeWidth={2}  />
                     <Line type="bump" dataKey="order" stroke="#b1c324" strokeWidth={2}/>
                     <CartesianGrid stroke="#ccc " strokeDasharray="3" vertical={false}/>
                     <XAxis dataKey="month" axisLine={false} tickLine={false} padding={{ left: 50, right: 50 }} />
                     <YAxis axisLine={false}  tickLine={false} tickCount={7} />
                     <Tooltip content={<CustomToolTip/>} />
               </LineChart>
         </ResponsiveContainer>

   </main>
  )
}

export default Linechart