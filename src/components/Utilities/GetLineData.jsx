import React from 'react'

export default function getLineData(ordered) {
  
   const months = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sep": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11
    };



    const lineData = [
         { month: "Jan", revenue: null, order: null },
         { month: "Feb", revenue: null, order: null },
         { month: "Mar", revenue: null, order: null },
         { month: "Apr", revenue: null, order: null },
         { month: "May", revenue: null, order: null },
         { month: "Jun", revenue: null, order: null },
         { month: "Jul", revenue: null, order: null },
         { month: "Aug", revenue: null, order: null },
         { month: "Sept", revenue: null, order: null },
         { month: "Oct", revenue: null, order: null },
         { month: "Nov", revenue: null, order: null },
         { month: "Dec", revenue: null, order: null }
   ]

   const UpdateLineData = lineData.forEach((el) => {  
      const monthNumber = months[el.month]

      const getMonthlyRevenue = ordered?.reduce((acc,el)=>{
         if(new Date(el.createdAt).getMonth() === monthNumber) return acc + el.price
         return acc
      },0)

      const getMonthlyOrder = ordered?.reduce((acc,el)=>{
         if(new Date(el.createdAt).getMonth() === monthNumber) return acc + 1
         return acc
      },0)

      el.revenue = getMonthlyRevenue
      el.order = getMonthlyOrder
   })


   return lineData
}
