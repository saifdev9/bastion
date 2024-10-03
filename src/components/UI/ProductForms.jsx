import Card from "../Utilities/Card";

const ProductForms = (props) => {


   if(props.price) {
      return (
         <form  onSubmit={(e)=> e.preventDefault()} className="items-center rounded-md shadow-md text-sm text-black bg-gray-100 border-t-2 border-black flex gap-5 p-5">

               <h2 className="text-lg font-semibold">Filter-Price</h2>
               <input type="number" min={100} max={5000} step={50} className="bg-white w-2/4 font-sans outline-none pl-1 shadow-md  rounded-sm border-b-2 border-black h-8" />     
               
               
        </form>
      )
   }

   if(props.sizes) {
      return (
         <form  onSubmit={(e)=> e.preventDefault()} className="text-sm  rounded-md shadow-md text-black bg-gray-100 border-t-4 border-black flex-col flex gap-5 p-5">

               <h2 className="text-xl font-bold">SIZES</h2>

               <section className="">
                  Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.
               </section>
               <section className="font-sans flex  flex-wrap gap-2">
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">8.5</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">9</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">9.5</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">10</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">10.5</button>
                     <button className="bg-gray-300 w-10 h-10rounded-sm  hover:scale-110 text-black">11</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">11.5</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">12</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">12.5</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">13</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">13.5</button>
                     <button className="bg-gray-300 w-10 h-10 rounded-sm hover:scale-110 text-black">14</button>
               </section>
        </form>
      )
   }

   if(props.material) {
      return (
         <form  onSubmit={(e)=> e.preventDefault()} className="text-sm  rounded-md shadow-md text-black bg-gray-100 border-t-4 border-black flex-col flex gap-5 p-5">

               <h2 className="text-xl font-bold">MATERIALS</h2>

               <section className="flex flex-col gap-2">
                 <div className="flex gap-2">
                      <input type="checkbox"  className="w-4 bg-transparent" id="check" />
                      <label htmlFor="check" className="text-lg">Light and Durable Cotton</label>
                 </div>

                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Soft & Cozy Wool</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Classic Leather</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Plastic-Free Alternative Leather</label>
                 </div>

               </section>
               
        </form>
      )
   }



 if(props.bestFor) {
      return (
         <form  onSubmit={(e)=> e.preventDefault()} className="text-sm  rounded-md shadow-md text-black bg-gray-100 border-t-4 border-black flex-col flex gap-5 p-5">

               <h2 className="text-xl font-bold">BEST FOR</h2>

               <section className="flex flex-col gap-2">
                 <div className="flex gap-2">
                      <input type="checkbox"  className="w-4 bg-transparent" id="check" />
                      <label htmlFor="check" className="text-lg">Everyday</label>
                 </div>

                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Warm Weather</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Active</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Cool weather</label>
                 </div>

                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Wet weather</label>
                 </div>

               </section>
               
        </form>
      )
   }



     
 if(props.brands) {
      return (
         <form  onSubmit={(e)=> e.preventDefault()} className="text-sm  rounded-md shadow-md text-black bg-gray-100 border-t-4 border-black flex-col flex gap-5 p-5">

               <h2 className="text-xl font-bold">BRANDS</h2>

               <section className="flex flex-col gap-2">
                 <div className="flex gap-2">
                      <input type="checkbox"  className="w-4 bg-transparent" id="check" />
                      <label htmlFor="check" className="text-lg">Nike</label>
                 </div>

                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Adidas</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Reebok</label>
                 </div>
                 
                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Fila</label>
                 </div>

                 <div className="flex gap-2">
                      <input type="checkbox" className="w-4 bg-white" id="check" />
                      <label htmlFor="check" className="text-lg">Others</label>
                 </div>

               </section>
               
        </form>
      )
   }


   
};

export default ProductForms;