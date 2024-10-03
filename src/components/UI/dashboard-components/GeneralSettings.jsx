import React, { useState,useRef, useEffect } from 'react'
import GenericInput from '../GeneralSettingInput'
import dateFormat from '../../Utilities/DateFomat'
import ProfilePhotoSetting from '../ProfilePhotoSetting'
import useUpdateGeneralSettings from '../../../Hooks/update-general-user-settings'




function GeneralSettings({user , logged , className}) {

  const {changed,btnClick,DataRef,setBtnClick,setChanged,updateGeneral} = useUpdateGeneralSettings(user)

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
    <form onSubmit={onSubmitHandler}  className={`flex flex-col w-full bg-red-90 lg:gap-12 xs:gap-4 mb-10 lg:p-16 xs:p-8 ${className}`}>

        <section className='flex flex-col gap-20 lg:mb-20 xs:mb-6 lg:px-20 xs:px-0 '>
          <ProfilePhotoSetting className={"md:scale-75 xs:scale-50 lg:scale-100"} ref={DataRef} name={"photo"} setChanged={setChanged} logged={logged} data={user.photo} />
        </section>

        <div className='flex xs:flex-col lg:flex-row bg-red-90 justify-between  gap-9'>
            <GenericInput ref={DataRef} name={"email"} setChanged={setChanged} inputType={"email"} data={user.email} placeholder={'me@gmail.com'} label={"Email"} maxLen={70}/>
            <GenericInput className={"md:w-full lg:w-1/3"} ref={DataRef} name={"gender"} setChanged={setChanged} data={user.gender}  label={"Gender"}  />
            <GenericInput className={"md:w-full lg:w-1/3"} ref={DataRef} name={"birthday"} setChanged={setChanged} inputType={"date"} data={dateFormat(user.birthday)}  label={"Birthday"} />
        </div>

        <div className='flex xs:flex-col lg:flex-row bg-red-90 justify-between  gap-9'>
             <GenericInput ref={DataRef} name={"username"} setChanged={setChanged} inputType={"text"} data={user.username} placeholder={'Enter your username'} label={"Username"} maxLen={20}/>
             <GenericInput ref={DataRef} name={"phone"} setChanged={setChanged} inputType={"number"}  data={user.phone || ""} placeholder={'+91'} label={"Phone"} max={9999999999}/>
        </div>
                          
        <button disabled={!changed}  className={`bg-black h-12 w-full  font-bold self-end rounded-md ${btnClick === "Saved" && " bg-rose-700"} ${!changed && " bg-gray-700"}`}>{btnClick}</button>
                          
      </form>
  )
}

export default GeneralSettings