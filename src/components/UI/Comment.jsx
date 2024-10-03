import React, { useEffect, useRef, useState } from 'react'
import api from '../Utilities/Api'
import { useSelector } from 'react-redux'
import LimitedNumInput from './LimitedNumInput'


export default function Comment({userId,productSellerId, productId,setPseudoReview , user}) {

   const [loading,setloading] = useState(false)
   const [click,setClick] = useState(false)
   const [valid,setValid] = useState(false)
   const [review,setReview] = useState("")
   const [rating,setRating] = useState("")
   
   const userToken = useSelector(state => state.login.token)
   const ratingRef = useRef(null)


   useEffect(()=> {
      
      if(review!== "" && ratingRef.current?.value !== "0" && ratingRef.current?.value !== "") {
         setValid(true)
      } else {
         setValid(false)
      }


   },[review,rating,click])


   useEffect(()=>{
      const publishReview = async () => {

         const res = await api(`/bastion/api/products/${productId}/reviews/`,"POST",{review:review,rating:ratingRef.current.value},userToken)
         console.log(res)  


      }

      if(click && valid) {
         setPseudoReview((prevState) => {
            return [
               {  review:review,
                  rating:ratingRef.current.value,
                  user:{
                     username:user.username,
                     photo:user.photo
                  }
               },
               ...prevState
            ]
         })

         setloading(true)
         publishReview()
         setReview("")
         setloading(false)
         setClick(false)

      }

   },[click])

  return (
      <section className={`${userId === productSellerId && " hidden"} w-full relative `}>
         <textarea onChange={(e)=>setReview(e.target.value)} value={review} name="review" minHeight={8} maxLength={100} minLength={7} placeholder={"loved the product"} className='p-2 w-full h-28 font-normal outline-none bg-gray-100 rounded-lg text-sm font-secondary'/>
         {valid  && <button  onClick={() => setClick(true)} className='absolute bottom-3 right-3 text-xs bg-red-300 w-fit h-fit  p-2 rounded-lg cursor-pointer disabled:bg-gray-300'>{loading ? "Loading.." : "publish"}</button>}
         
         <div className='flex gap-1 absolute top-0 right-0 -translate-y-full'>
            <div className='flex items-center'>
               <p className='text-sm'>🌟</p>
            </div>

            <div onChange={(e)=> setRating(e.target.value)} className='flex  text-xs items-center justify-between w-10 bg-red-90  p-1'>
               <LimitedNumInput ref={ratingRef} className={`w-1/3 bg-transparent focus:outline-none`} maxVal={5}  placeholder={0}/>
               <span className='w-1/3 text-gray-200'>/</span>
               <p className='text-start bg-gray-30 w-1/3'>5</p>
            </div>
         </div>

      </section>
  )
}
