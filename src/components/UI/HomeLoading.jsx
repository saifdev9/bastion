import React, { useEffect, useState } from 'react'
import homeload from "../../assets/navlogos/homeloader.gif"
import disableScroll from 'disable-scroll';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts } from '../../Store/HomeSlice';



export default function HomeLoading() {

  const dispatch = useDispatch()
  const fetched =  useSelector(state => state.home.fetched)
  const [loading,setLoading] = useState("")


  useEffect(()=> {
    if(!fetched) {
       dispatch(fetchProducts())
       disableScroll.on()
        setTimeout(()=> {
         setLoading("Getting server ready..")
       },15000) 

       setTimeout(()=> {
         setLoading("Fetching from server! 🔥")
       },30000)  
       
       setTimeout(()=> {
         setLoading("Gathering resources 📦")
       },50000) 

       setTimeout(()=> {
         setLoading("Something went wrong!, please refresh the site")
       },110000)  
    }
  },[fetched]) 

  return (
    <div className='w-full h-full flex items-center justify-center bg-gray-50 fixed top-1 right-0 z-10  '>
         <figure className=' w-1/2 flex flex-col items-center justify-center gap-4'>
            <img src={homeload} alt="home loader" className='w-24 h-24' />
            <p className='text-black text-sm font-bold'>{loading}</p>
         </figure>
    </div>
  )
}
