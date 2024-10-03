import React, { useEffect, useRef } from 'react'
import Card from '../../Utilities/Card'
import sportsShoes from "../../../assets/showcases/sportsShoes.webp"
import exploreShoes from "../../../assets/showcases/exploreShoes.webp"
import flipflops from "../../../assets/showcases/flipflops.webp"
import casuals from "../../../assets/showcases/casuals.webp"
import sneakers from "../../../assets/showcases/sneakers.webp"
import { NavLink } from 'react-router-dom'
import gsap from 'gsap/all'


function categories(props) {

   const exploreRef = useRef(null)
   const sneakersRef = useRef(null)
   const casualsRef = useRef(null)
   const sportRef = useRef(null)
   const flopsRef = useRef(null)

   useEffect(()=> {

      const animate = (element) => {

         const observer = new IntersectionObserver(entries => {
   
            if(entries[0].isIntersecting) {
               gsap.to(element,{
                  x:0,
                  y:0,
                  ease:"elastic",
                  opacity:1,
                  duration:2,
                  scale:1
               })
            }
              
         },{
            threshold:0.3
         })

         observer.observe(element)
      }

      exploreRef.current !== null && animate(exploreRef.current)
      flopsRef.current !== null && animate(flopsRef.current)
      sneakersRef.current !== null && animate(sneakersRef.current)
      casualsRef.current !== null && animate(casualsRef.current)
      sportRef.current !== null && animate(sportRef.current)

   },[exploreRef,sneakersRef,casualsRef,sportRef,flopsRef])

   return (
     <section className={`text-black h-98 lg:gap-4 xs:gap-1 grid lg:grid-cols-5  bg-green-90 xs:my-6 xs:mx-12  bg-red-90 ${props.className}`}>
       
       {/* Explore */}
       <NavLink ref={exploreRef} to="/products/all" className="relative h-98 xs:hidden lg:grid  lg:col-start-1 lg:col-end-3 translate-x-1/3 opacity-0  overflow-hidden  rounded-2xl">
          <img src={sneakers} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
          <div className='absolute top-3 left-3 w-72 flex flex-col gap-2 bg-red-90'>
             <p className='uppercase text-4xl font-semibold'>it's your first time ?</p>
             <span className='text-md'>Explore categories</span>
          </div>
          <NavLink to="/products/all" className='absolute bottom-6 left-5  hover:scale-110 transition-all  bg-black text-white text-lg py-2 px-4 rounded-full uppercase font-extrabold'>Let's Explore</NavLink>
       </NavLink>


      <Card className="h-98 flex flex-col lg:col-start-3 lg:col-end-5  gap-2">

         <section className="h-1/2 flex gap-2">

         {/* sneakers */}
            <NavLink ref={sneakersRef} to="/products/sneakers" className='flex gap-2 relative overflow-hidden translate-y-1/3 opacity-0  rounded-2xl'>
               <img src={exploreShoes} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
               <NavLink to="/products/sneakers" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>Sneakers</NavLink>
            </NavLink>

            {/* casuals  */}
            <NavLink  ref={casualsRef} to="/products/casuals" className='flex gap-2 relative overflow-hidden translate-y-1/3 opacity-0  rounded-2xl'>
               <img src={casuals} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" /> 
               <NavLink to="/products/casuals" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>casuals</NavLink>
            </NavLink>

         </section>

         {/* sportshoes */}
         <NavLink ref={sportRef} to="/products/sportshoes" className="h-1/2 w-full flex relative overflow-hidden -translate-y-1/3 opacity-0  rounded-2xl">
            <div className='flex gap-2 w-full'>
               <img src={sportsShoes} className='rounded-2xl w-full h-100 hover:scale-110 transition-all' alt="" />  
               <NavLink to="/products/sportshoes" className='absolute bottom-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>Sportshoes</NavLink>
            </div>
         </NavLink>

      </Card>

      {/* flip-flops */}
      <NavLink ref={flopsRef} to="/products/flipflops" className="relative h-98 sm:col-start-5 sm:col-end-6 xs:hidden md:grid overflow-hidden -translate-x-1/3 opacity-0  rounded-2xl">
          <img  src={flipflops} className='h-full rounded-2xl hover:scale-110 transition-all' alt="" />
          <NavLink to="/products/flipflops" className='absolute top-3 left-3  hover:scale-110 transition-all  bg-black text-white text-xs py-2 px-4 rounded-full uppercase font-extrabold'>flipflops</NavLink>
       </NavLink>

    </section>
  )
}

export default categories