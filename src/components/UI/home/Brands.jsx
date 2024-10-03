import React from 'react'
import exploreShoes from "../../../assets/showcases/exploreShoes.webp"

import adidas from "../../../assets/showcases/adidas.jpeg"
import puma from "../../../assets/showcases/puma.jpeg"
import reebok from "../../../assets/showcases/reebok.jpeg"
import { NavLink } from 'react-router-dom'


function Brands(props) {
  return (
    

       <section className={`flex  lg:flex-nowrap md:justify-between xs:flex-wrap xs:justify-between ${props.className}`}>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={exploreShoes} className="rounded-lg hover:scale-110 hover:brightness-95 w-full h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-black absolute  bottom-2 left-3'>Nike</span>
          </NavLink>

          <NavLink to={'/products/all'}  className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={adidas} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-black absolute  bottom-2 left-3'>Adidas</span>
          </NavLink>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1 relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={reebok} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-black absolute  bottom-2 left-3'>Reebok</span>
          </NavLink>

          <NavLink to={'/products/all'} className='md:h-60 xs:h-46 md:w-1/4 xs:w-1/2 p-1  relative hover:cursor-pointer overflow-hidden rounded-xl'>
               <img src={puma} className="rounded-lg hover:scale-110 w-full hover:brightness-95 h-full transition-all" alt="" />
               <span className='font-showcase hover:underline text-black absolute  bottom-2 left-3'>Puma</span>
          </NavLink>

       </section>

   
  )
}

export default Brands