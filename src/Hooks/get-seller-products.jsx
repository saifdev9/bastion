import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../components/Utilities/Api'

export default function useGetSellerProducts() {

  const user = useSelector(state => state.login.user) 
  const [filteredProducts,setFilteredProducts] = useState([])
  const [filter,setFilter] = useState("rating")
  const [search,setSearch] = useState("")
  const [isAscend,setIsAscend] = useState(false)
  const [loading,setLoading] = useState(false)
  const productsRef = useRef([])

  useEffect(()=> {
       const getSellerProducts = async () => {
            setLoading(true) 
            const res = await api(`/bastion/api/products?seller=${user.id}&sort=${isAscend ? "-" : ""}${filter}`)
            productsRef.current.value = res.data.products
            setFilteredProducts(res.data.products)
            setLoading(false)
       }

       getSellerProducts()

   },[filter,isAscend])



   
   useEffect(()=> {
      
      if(search !== "") {
         let searchedProducts = productsRef.current.value.filter((el,i) => el.name.toLowerCase().includes(search))
         setFilteredProducts(searchedProducts)
      } else {
         setFilteredProducts(productsRef.current.value)
      }

   },[search])



   return {
      products:filteredProducts,
      loading,
      setFilter,
      setSearch,
      setIsAscend
   }


}


