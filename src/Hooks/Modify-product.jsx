import React, { useEffect, useState } from 'react'
import { useNavigate,  useParams } from 'react-router-dom'
import api from '../components/Utilities/Api'
import { useSelector } from 'react-redux'

export default function useModifyProduct() {
  const {specify} = useParams()
  const [submitObj,setSubmitObj] = useState({})
  const [loading,setLoading] = useState(true)
  const [buttonStatus,setButtonStatus] = useState(specify ? "Update" : "Submit" ) 
  const token = useSelector(state => state.login.token)
  const [deleteClick,setDeleteClick] = useState(false)
  
  const navigate = useNavigate()

   const getProduct = async () => {

      setLoading(true)

      let Obj =  {
            name : "",
            price:"",
            productType:"casuals",
            brand:"nike",
            consumer:"men",
            season:"summer",
            sizes:[],
            images:[],
            coverImage:"",
            description:""
      }


      if(specify) {
         const res = await api(`/bastion/api/products/${specify}`,"GET",undefined,undefined)
         const data = res.data.product
         Obj = {
            name : data.name,
            price:data.price,
            productType:data.productType,
            brand:data.brand,
            consumer:data.consumer,
            season:data.season,
            sizes:data.sizes,
            images:data.images,
            coverImage:data.coverImage,
            description:data.description
         }
      }

      setSubmitObj(Obj)
      setLoading(false)
   }


   const createProduct = async () => {

      setButtonStatus("Creating...")

      let bool = true

      for(let key in submitObj) {
        submitObj[key] == false ? bool = false : bool = true
        console.log(key,bool)
      } 

      console.log(bool)



     if(bool) {
      const res = await api(`/bastion/api/products/`,"POST",submitObj,token)
      // console.log(res,"create product")
      setButtonStatus("Done")
      setTimeout(()=> {
        navigate("/")
      },1000)

     } else {
        setButtonStatus("Invalid")
        setTimeout(()=> {
           setButtonStatus("Submit")
        },1000)
     }


      

   }




   const updateProduct = async () => {

      setButtonStatus("Updating...")
      

      let bool = true

      for(let key in submitObj) {
        submitObj[key] == false ? bool = false : bool = true
        console.log(key,bool)
      } 

      console.log(bool)




      if(bool) {
       const res = await api(`/bastion/api/products/${specify}`,"PATCH",submitObj,token)
      //  console.log(res,"update product")
       setButtonStatus("Done")
       setTimeout(()=> {
        navigate("/")
       },2000)

      } else {
        setButtonStatus("Invalid")
        setTimeout(()=> {
          setButtonStatus("Update")
        },2000)      
      }



   }


    const deleteProduct = async () => {

      setTimeout(()=>{
         navigate("/")
      },3000)
      const res = await api(`/bastion/api/products/${specify}`,"DELETE",submitObj,token)
      // console.log(res,"delete product")


   }


   const onFormSubmit = (e) => {
      e.preventDefault()

      if(!specify) {
         createProduct()
      }
      
      if(specify) {
         updateProduct()
      }
      

      // console.log("submitted",submitObj)
   }


   const onChangeHandler = (value,key,sizes=undefined,images=undefined)=>{

      setSubmitObj(prev => ({
         ...prev,
         [key] : images || sizes || value
      }))

   }

   const onDeleteHandler = () => {
     setDeleteClick(true)
     deleteProduct()
   }

   useEffect(()=> {
     getProduct()
   },[])

   // useEffect(()=> {
   //    console.log(submitObj)
   // },[submitObj])

   return {
      obj:submitObj,
      setObj:setSubmitObj,
      loading,
      buttonStatus,
      deleteClick,
      specify,
      onDeleteHandler,
      onChangeHandler,
      onFormSubmit,
   }
}
