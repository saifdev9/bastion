import React, { useEffect, useReducer, useRef } from 'react'
import GeneralSettings from './GeneralSettings'
import BillingSettings from './BillingSettings'
import NotificationSettings from './NotificationSettings'
import { NavLink, useParams } from 'react-router-dom'
import PageTransition from '../../Utilities/PageTransition';


const touchedReducer = (state , action) => {
   if(action==="general") return {val:"general"}
   if(action==="billings") return {val:"billings"}
   if(action==="notifications") return {val:"notifications"}

   else {
      return {val:false}
   }
}





function Settings({user , logged , className}) {

   const {specify} = useParams();

   const [touched , dispatchFn] = useReducer(touchedReducer,{val:false})

   useEffect(()=>{
      if(specify === "notifications") {
         return dispatchFn("notifications")
      } else if(specify === "billings") {
          return dispatchFn("billings")
      } else {
         return dispatchFn("general");
      } 
         
   },[specify])

   const parentRef = useRef(null)

  useEffect(()=> {
    if(parentRef.current !== null) PageTransition(parentRef.current)
  },[parentRef])

  return (
    <main ref={parentRef}  className={`flex gap-10  ${className}`}>

         <section className={` py-6 flex flex-col gap-16 pr-8`}>

            
                  
            <section className='flex flex-col gap-24'>
                  <div className='flex flex-col gap-4'>
                        <h1 className='md:text-3xl xs:text-xl font-semibold text-black'>Settings ⚙️</h1>
                        <p className='font-medium md:text-sm xs:text-xs text-gray-500 w-5/6'>Welcome to the Settings Page, your personalized control center for tailoring your experience and managing your preferences on our platform. This page is designed to put you in command, allowing you to customize various aspects to suit your needs. </p>
                  </div>
                  <header className='flex gap-4'>
                     <NavLink to="/dashboard/settings/general" onClick={() => dispatchFn("general")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "general" ? " shadow-inner shadow-gray-300 text-gray-800 ":" shadow-md"}`}>General</NavLink>
                     <NavLink to="/dashboard/settings/billings" onClick={() => dispatchFn("billings")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "billings" ? " shadow-inner shadow-gray-300 text-gray-800":" shadow-md"}`}>Billings</NavLink>
                     <NavLink to="/dashboard/settings/notifications" onClick={() => dispatchFn("notifications")} className={`text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-800 px-2 rounded-md ${touched.val === "notifications" ? " shadow-inner shadow-gray-300 text-gray-800 ":" shadow-md"}`}>Notifications</NavLink>
                  </header>
            </section>

            <main className='px-8'>
                   {touched.val === "general" &&  <GeneralSettings user={user} logged={logged} className=""/> }

                   {touched.val === "billings" && 
                      <BillingSettings user={user} logged={logged}/>
                   }
                   
                   {touched.val === "notifications" && 
                       <NotificationSettings user={user} logged={logged}/>
                   }
            </main>
                  


         </section>

    </main>
  )
}

export default Settings