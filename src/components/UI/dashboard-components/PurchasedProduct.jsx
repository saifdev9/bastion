import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductCardRating, Rating } from './../../Utilities/Rating';
import gsap from 'gsap/all';

export default function PurchasedProduct({img,purchasedAt,id,rating}) {  
   
  const [hover,setHover] = useState(false) 

  return (
    <section className='flex bg-red-90 gap-2 relative'>
     
     <NavLink to={`/product/${id}`}>
         <figure  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='lg:w-52 xs:w-40 lg:h-60 xs:h-56  rounded-md z-10'>
            <img className='w-full h-full rounded-md' src={img} />
         </figure>
     </NavLink>
     <div className={`absolute flex items-center justify-between w-full px-1 opacity-0 text-xs font-showcase transition-all -top-0  ${hover && " -translate-y-full opacity-100"} `}>
       <ProductCardRating rating={rating} />
       <p className='text-black'>{purchasedAt}</p>
     </div>

    </section>
  )
}
