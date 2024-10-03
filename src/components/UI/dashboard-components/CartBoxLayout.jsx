import CartBox from './CartBox'
import { useSelector } from 'react-redux'
import CartTotal from './CartTotal'
import emptyCart from "../../../assets/dashboard/emptyCart.png"
import React, { useEffect, useRef } from 'react'
import PageTransition from '../../Utilities/PageTransition';


export default function CartBoxLayout() {

  const detailedCart = useSelector(state => state.cart.detailedUpdatedCart)

  const parentRef = useRef(null)

  useEffect(()=> {
    if(parentRef.current !== null) PageTransition(parentRef.current)
  },[parentRef])
  


  return (
   <main  ref={parentRef}  className='flex gap-8 lg:flex-row xs:flex-col md:flex-col-reverse bg-red-60 p-4 relative my-8'>

    <section  className='flex flex-col gap-8 min-h-screen bg-red-90 basis-4/6'>
      {detailedCart.map((el,i)=> {
         return <CartBox key={el.id} className={`${detailedCart.length  - 1 === i ?  "border-none" : " " }`} name={el.name} src={el.coverImage} price={el.price} id={el.id}/>
      })}

      {detailedCart.length === 0 && 
       <div className={`flex flex-col w-full h-full items-center justify-center gap-8 font-secondary text-sm  font-semibold text-black relative pb-20  `}>
        <img src={emptyCart} className='w-40 h-40 '/>
        <p className='text-center'>Your cart is empty <span className='line-through'>broski</span> <span className='text-red-600'>brokie!</span> </p>
       </div>
      }

    </section>

    <aside className='bg-blue-90 basis-2/6 '>
      <CartTotal />
    </aside>
   </main>
  )
}
