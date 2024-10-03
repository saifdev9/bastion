import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Overview from './Overview'
import Products from './Products'
import Orders from './Orders'
import Settings from './Settings'
import CreateProduct from './CreateProduct'
import CartBoxLayout from './CartBoxLayout'
import Purchased from './Purchased'





export default function DashboardAction() {
   
  const  {action} =  useParams()
  const user = useSelector(state => state.login.user)
  const logged = useSelector(state => state.login.loggedIn)

   let orderArr = [
    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
    {id:"#8721",customer:"Victor Solomon" , order:"Adidas X-Neo", amount:"22.40" , paymentMethod:"Credit Card", deliveryDate:"10.03.23", status:"pending"},
    {id:"#1102",customer:"Mark Roster" , order:"Nike Jordan", amount:"42.21" , paymentMethod:"Debit Card", deliveryDate:"03.11.23", status:"canceled"},
    {id:"#2301",customer:"Jack Hugh" , order:"Puma heat", amount:"129.06" , paymentMethod:"Cash", deliveryDate:"19.06.23", status:"refunded"},

    {id:"#7021",customer:"John Doe" , order:"Jordan-007", amount:"123.4" , paymentMethod:"UPI", deliveryDate:"12.02.23", status:"completed"},
   
  
  ]
   

  if(action === "overview") return <Overview user={user} logged={logged}/>
   
  if(action === "products") return <Products user={user} logged={logged}/>
  
  if(action === "orders") return <Orders user={user} logged={logged} orders={orderArr}/>

  if(action === "settings") return <Settings user={user} logged={logged}/>

  if(action === "create") return <CreateProduct/>

  if(action === "cart") return <CartBoxLayout/>

  if(action === "purchased") return <Purchased/>

}
