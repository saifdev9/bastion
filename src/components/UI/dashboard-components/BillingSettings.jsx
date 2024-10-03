import React, { useState } from 'react'
import BillingInputSection from '../BillingInputSection';
import BillingInput from '../BillingInput';
import dateFormat from '../../Utilities/DateFomat';
import useUpdateGeneralSettings from '../../../Hooks/update-general-user-settings';



function BillingSettings({user, logged}) {

 const {changed,btnClick,DataRef,setBtnClick,setChanged,updateGeneral} = useUpdateGeneralSettings(user,true)

//  console.log(DataRef.current)

 const onSubmitHandler = async (e) => {
    e.preventDefault()
    
    if(changed) {
        await updateGeneral()
        setBtnClick("Saved")

        setTimeout(()=> {
            setBtnClick("Save")
            setChanged(false)
        },777)
    }
 }



  return (
    <form onSubmit={onSubmitHandler}  className='text-black flex flex-col gap-8 mb-20'>

        <BillingInputSection className={`xs:flex-col md:flex-row xs:items-center md:justify-start xs:justify-center `} label={"Card Details"}>
            <div className='flex   gap-3 '>
                <BillingInput ref={DataRef} name={"cardName"} setChanged={setChanged} data={user.cardName || ""} label={"Name on card"} type={"text"} className={" w-1/2"}/>
                <BillingInput ref={DataRef} name={"cardExpiry"} setChanged={setChanged} type="date" data={dateFormat(user.cardExpiry) || ""} label={"Valid thru"} className={" md:w-1/4 xs:w-1/2"} />
            </div>

            <div className='flex gap-3'>
                <BillingInput ref={DataRef} name={"cardNumber"} setChanged={setChanged} data={user.cardNumber || ""} label={"Card number"} type={"text"} className={" w-1/2"} maxLen={16} />
                <BillingInput ref={DataRef} name={"Cvv"} setChanged={setChanged} type="password" data={user.Cvv || ""} label={"CVV"} className={"md:w-1/4 xs:w-1/2"} maxLen={3} />
            </div>
        </BillingInputSection>


      
        <BillingInputSection className={`xs:flex-col md:flex-row xs:items-center md:justify-start xs:justify-center`}  label={"Street Address"}>
            <BillingInput ref={DataRef} name={"streetAddress"} setChanged={setChanged} data={user.streetAddress || ""}  type={"text"} className={" md:w-2/3 xs:w-full"} />
        </BillingInputSection>
      


        <BillingInputSection className={`xs:flex-col md:flex-row xs:items-center md:justify-start xs:justify-center`} label={"City"}>
            <BillingInput ref={DataRef} name={"city"} setChanged={setChanged} data={user.city|| ""}  type={"text"} className={" md:w-1/3 xs:w-full"} />
        </BillingInputSection>



        <BillingInputSection className={`xs:flex-col md:flex-row xs:items-center md:justify-start xs:justify-center`} label={"State & Pincode"}>
            <div className='flex gap-3 '>
                <BillingInput ref={DataRef} name={"state"} setChanged={setChanged} data={user.state || ""} label={"State"} type={"text"} className={" md:w-1/2 xs:w-full"}/>
                <BillingInput ref={DataRef} name={"pincode"} setChanged={setChanged} type="text" data={user.pincode || ""} label={"Pincode"} className={" md:w-1/4 xs:w-full"} />
            </div>
        </BillingInputSection>


        <BillingInputSection className={`xs:flex-col md:flex-row xs:items-center md:justify-start xs:justify-center`} label={"Landmark"}>
            <BillingInput ref={DataRef} name={"landmark"} setChanged={setChanged} data={user.landmark|| ""}  type={"text"} className={" md:w-1/2 xs:w-full"}/>
        </BillingInputSection>

        <button disabled={!changed} className={`w-full bg-black h-12 text-white  rounded-md font-semibold ${!changed && "bg-gray-700"} ${btnClick==="Saved" && " bg-rose-700"} `}>{btnClick}</button>
     

    </form>
  )
}

export default BillingSettings