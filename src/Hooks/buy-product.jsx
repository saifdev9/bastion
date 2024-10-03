import React from 'react'
import api from '../components/Utilities/Api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function useBuyProduct(productId) {

   const token = useSelector(state => state.login.token)
   const navigate = useNavigate()
  
   const purchaseFunction =  async (size) => {
      const response = api(`/bastion/api/purchases/checkout/${productId}`,"POST",{size:size},token)
      const data = await response
      
      function redirectToNewTab(url) {
         var newWindow = window.open();
         newWindow.opener = null;
         newWindow.location.href = url;
      }
      redirectToNewTab(data.session.url);

      console.log(data.session.url, data)
   }

   return {
      purchaseFunction
   }
}
