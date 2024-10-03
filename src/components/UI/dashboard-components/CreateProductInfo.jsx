import React, { forwardRef, useEffect, useState } from 'react'
import GeneralHeading from '../GeneralHeading'
import LimitedNumInput from '../LimitedNumInput'
import SelectInputArray from '../SelectInputArray'
import CreateProductButtonSizes from './CreateProductButtonSizes'


export default function CreateProductInfo({className,obj,onChangeHandler}) {

  return (
    <section className={`${className}`}>
        <GeneralHeading  name={"name"} heading="Product Name" >
            <input value={obj.name} onChange={(e)=> onChangeHandler(e.target.value,"name") }  className='bg-white border-2 rounded-md h-9 px-2 outline-none lg:w-2/3 xs:w-full  ' maxLength="20"  placeholder="Nike Air Force" />
        </GeneralHeading>

         <GeneralHeading  name={"price"} heading="Price" >
            <LimitedNumInput value={obj.price} name={"price"} onChangeHandler={onChangeHandler} className={"bg-white border-2 rounded-md h-9 px-2 outline-none lg:w-2/3 xs:w-full"} max={10000} placeholder={"$"}/>
         </GeneralHeading>

         <div className='flex gap-2 bg-yellow-90 lg:w-2/3 xs:w-full '>
               <GeneralHeading  name={"productType"} heading="Product Type" className={"w-2/3"}>
                  <SelectInputArray value={obj.productType} name={"productType"} onChangeHandler={onChangeHandler} className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["sneakers", "casuals", "sportshoes", "flipflops"]}/>
               </GeneralHeading>

               <GeneralHeading  name={"brand"} heading="Brand" className={"w-1/3"}>
                  <SelectInputArray value={obj.brand} name={"brand"} onChangeHandler={onChangeHandler} className={"bg-white border-2 rounded-md p-1 outline-none"} arr={["nike", "adidas", "puma", "reebok", "fila"]}/>
               </GeneralHeading>
         </div>


         <div className='flex gap-2 bg-yellow-90 lg:w-2/3 xs:w-full '>
               <GeneralHeading  name={"consumer"} heading="For" className={"w-1/3"}>
                  <SelectInputArray value={obj.consumer} name={"consumer"} onChangeHandler={onChangeHandler} className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["men", "women", "kids"]}/>
               </GeneralHeading>

               <GeneralHeading name={"season"} heading="Season" className={"w-2/3"} >
                  <SelectInputArray value={obj.season} name={"season"} onChangeHandler={onChangeHandler} className={"bg-white border-2 rounded-md p-1 outline-none w-full"} arr={["rainy", "winter", "summer"]}/>
               </GeneralHeading>               
         </div>

            
         <GeneralHeading name={"sizes"} heading="Sizes" className={"lg:w-2/3 xs:w-full"} >
               <div className='flex flex-wrap gap-3'>
                  {[3,4,5,6,7,8,9,10,11,12].map((el,i) =>  <CreateProductButtonSizes onChangeHandler={onChangeHandler} name={"sizes"} className={"rounded-lg border-2 w-16 h-12 "}  sizes={obj.sizes} text={el} key={i+1}/>)}
               </div>
          </GeneralHeading>
    </section>
  )
}
