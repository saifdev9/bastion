import { Rating } from "../../Utilities/Rating"


function ReviewBlock({name,src,rating,title,review}) {
  return (
    <section className={`w-80 h-80 flex flex-col bg-red-60 rounded-xl px-5 py-2 gap-6 bg-white`}>

      <div className="flex justify-between border-b-2 pb-2">
         <div className="flex justify-between gap-2 bg-red-90 items-center ">
            <figure className='w-5 h-5 bg-red-30'>
               <img src={src} className="h-full rounded-full" alt="" />
            </figure>
            <p className="text-sm">{name}</p>
         </div>
         <span className="text-xs text-white p-1 px-3 rounded-full bg-green-500">{`✓ verified`}</span>
      </div>

     <div className="flex flex-col gap-8">

         <div className='flex flex-col gap-2'>
               <Rating  rating={rating || "4.5"}/>
               <p className="font-semibold">{title || "I love Bastion"}</p>
         </div>

         <p className="text-md w-5/6 text-gray-500 ">{review || "It's fantastic! These shoes offer unbeatable comfort, a versatile design, and great durability. Plus, they come at an affordable price. Highly recommended!"}</p>
     </div>



    </section>
  )
}

export default ReviewBlock