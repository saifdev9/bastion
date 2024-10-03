import React from 'react'
import { NavLink } from 'react-router-dom';
import {Rating} from '../../Utilities/Rating';


function QuickProduct(props) {

  const arr =  [
                  {product:props.product, rating:props.rating , orderId:props.orderId , price:props.price,sold:props.numberSold,sales:props.saleRevenue}
               ]

   
   const options = {                
       style: "currency",  
       useGrouping: true,  
       currency: "USD"
   };

   const locale = navigator.language
   const formattedNum = new Intl.NumberFormat(locale,  options).format(arr[0].price);
   const formattedNum2 = new Intl.NumberFormat(locale,  options).format(arr[0].sales);

   arr[0].price = formattedNum;
   arr[0].sales = formattedNum2;

   
  return (
    <tr className={`${props.className} `}>
         {
            arr.map((el,i)=>{
               return (
                  
                  <>
                     <td key={el.product} className='text-md px-2'><NavLink to={`/product/${el.product}`} className={"hover:underline hover:text-red-500"}>{el.product}</NavLink></td>
                     <td key={el.orderId} className='text-md px-2 text-gray-500'>{el.orderId}</td>
                     <td key={el.price} className='text-md px-2 text-green-600'>{el.price}</td>
                     <td key={el.sold} className='text-md px-2'>{el.sold}</td>
                     <td key={el.sales} className='text-md px-2 text-green-600'>{el.sales}</td>
                     <td key={el.rating} className='text-md px-2 text-gray-500'><Rating rating={el.rating}/></td>
                  </>

               )
            })
         }
    </tr>
  )
}

export default QuickProduct