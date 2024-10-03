import React, { useState,memo } from 'react'
import { useSelector } from 'react-redux'

function CartTotal() {

  const [click , setClick ] = useState(false)
  const cartTotal = useSelector(state => state.cart.cartTotal)
  const shippingFee = Number(cartTotal) > 0 ? 0.2 * Number(cartTotal) : 0
  const ultimatePrice = Number(cartTotal) + shippingFee

  const onClickHandler = (e) => {
    e.preventDefault()
    setClick(true)
  } 


  return (
    <form onSubmit={onClickHandler} className='p-5 text-black flex flex-col gap-8 bg-gray-100 rounded-md sticky top-4 select-none'>
        <div className='flex justify-between'>
           <p className=''>Subtotal</p>
           <p className='font-semibold'>{"$" + cartTotal}</p>
        </div>

        <div className='flex justify-between '>
           <p className=''>Shipping  Fee</p>
           <p className='font-semibold'>{"$" + shippingFee.toFixed(2)}</p>
        </div>

        <div className='flex justify-between border-t-2 border-dashed border-black py-2'>
           <p className=''>Total</p>
           <p className='font-semibold'>{"$" + ultimatePrice.toFixed(2)}</p>
        </div>

        {/* <button className={`bg-black p-4 text-white rounded-md transform-all ${click && " opacity-90"} `}>Proceed to checkout</button> */}
    </form>
  )
}

export default CartTotal
