import React from 'react'
import Card from '../../Utilities/Card'


function ProductsRect(props) {

   let formattedNum = 0;

   const options = {                
                style: "currency",  
                useGrouping: true,  
                currency: "USD"
   };

   const locale = navigator.language;
   formattedNum = new Intl.NumberFormat(locale,  options).format(props.amount);


   return (
      <Card className={`flex text-black gap-2 ${props.className}`}>

            <figure className='w-24 h-16 items-center '>
               <img src={props.img} className='w-full h-full rounded-md ' alt="product"/>
            </figure>

            <section className='flex w-full  shadow-md bg-gray-50  rounded-md items-center justify-between px-8 '>
               <div className='flex flex-col'>
                  <h5 className='text-xl'>{props.productName}</h5>
                  <p className='text-gray-400 font-medium'>{props.summary}</p>
               </div>

               <p className='font-sans text-lg text-green-500'>{formattedNum}</p>

            </section>

      </Card>
  )
}

export default ProductsRect