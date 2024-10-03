import React, { useEffect, useRef } from 'react'
import CreateProductInfo from './CreateProductInfo'
import CreateProductImages from './CreateProductImages'
import useModifyProduct from '../../../Hooks/Modify-product'
import loadingUi from "../../../assets/navlogos/loading2.gif"
import PageTransition from '../../Utilities/PageTransition';




export default function CreateProduct() {

  const {obj,loading,setObj,onChangeHandler,specify,onFormSubmit,buttonStatus,onDeleteHandler,deleteClick} = useModifyProduct()

  const parentRef = useRef(null)

  useEffect(()=> {
    if(parentRef.current !== null) PageTransition(parentRef.current)
  },[parentRef])


  return (

   <form ref={parentRef}  onSubmit={onFormSubmit} className='flex flex-col gap-8 pr-8 mb-8 h-full relative'>
      {buttonStatus === "Invalid" && <p className='bg-red-500 p-3 rounded-md font-semibold mx-14 absolute top-10 right-1/2 translate-x-1/2 z-10  transition-all'>Please fill all the details carefully</p>}
      {buttonStatus === "Done" && <p className='bg-green-500 p-5 rounded-md font-semibold mx-14 absolute top-10 right-1/2 translate-x-1/2 z-10 transition-all'> Product Successfully Created ✌🏻</p>} 
 
      {loading && <img className='h-16 w-16 absolute top-1/2 right-1/2 -translate-x-1/2 ' src={loadingUi}/>}

      {!loading && <main className='flex lg:flex-row lg:gap-0 xs:gap-8 xs:flex-col my-8 relative'>
         {specify && <figure onClick={onDeleteHandler} className={`absolute -top-10 right-1 bg-gray-50 p-2 rounded-md ${deleteClick && " bg-neutral-50"} cursor-pointer`}>
            <svg className={`w-6 h-6  ${deleteClick && " brightness-0"} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="red" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
         </figure>}
         <CreateProductInfo onChangeHandler={onChangeHandler}  obj={obj} setObj={setObj} className={'bg-red-90 text-black flex flex-col bg-red-90 gap-8  basis-1/2'}/>
         <CreateProductImages obj={obj} setObj={setObj} onChangeHandler={onChangeHandler} className={`bg-blac basis-1/2 flex flex-col justify-between text-black`}/>
      </main>}

      {!loading && <button className={`bg-black rounded-md h-12 w-full self-center font-semibold ${buttonStatus === "Invalid" && " bg-red-700"} ${buttonStatus === "Done" && " bg-green-500"} `}>{buttonStatus}</button>}
  </form>
  )
}

