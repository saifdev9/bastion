import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




const useProductsFetch = () => {

  const {type} = useParams()
  // console.log(useParams())

  const [searchQuery , setSearchQuery] = useState("")
  const [formObj , setFormObj] = useState( {
    sort:"-rating",
    rating:undefined,
    brand:undefined,
    productType:undefined,
    season:undefined,
    price:undefined
  })

  

  const consumer = `${type!=="all" ? `&consumer=${type}`: `&consumer=undefined`}`

  const {data:products ,isPending,isError,error, isFetching} = useQuery({
    queryKey:["products", searchQuery , consumer , formObj],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/products?${searchQuery + consumer}`)
      const resData = await response.json()

      return resData.data.products
    }
  })

   useEffect(()=> {
     setSearchQuery(`sort=${formObj.sort}&rating[gte]=${formObj.rating}&brand=${formObj.brand}&productType=${formObj.productType}&season=${formObj.season}&price[lte]=${formObj.price}`)
   },[formObj])


   return [
      setFormObj,
      products,
      isPending,
      isError,
      error,
      isFetching
   ]

}

export default useProductsFetch