import React, { useRef, useState } from 'react'
import api from '../components/Utilities/Api'
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from '../components/Utilities/DateFomat'
import { loginActions } from '../Store/LoginSlice'


export default function useUpdateGeneralSettings(user,billings=false) {
 
  
  const [changed,setChanged] = useState(false)
  const [btnClick,setBtnClick] = useState("Save")
  const token = useSelector(state => state.login.token)
  const dispatch = useDispatch()
  
  
  const generalData = useRef({
    email:user.email,
    gender:user.gender ,
    username:user.username,
    birthday:dateFormat(user.birthday) ,
    phone:user.phone,
    photo:user.photo ,
    photoModified : false
  })


  const billingData = useRef({
    cardName : user.cardName,
    cardExpiry :  user.cardExpiry ,
    cardNumber : user.cardNumber,
    Cvv : user.Cvv,
    streetAddress : user.streetAddress,
    city : user.city,
    landmark : user.landmark,
    state : user.state ,
    pincode : user.pincode

  })


  async function updateGeneral() {

     const body = billings ? billingData.current : generalData.current
     !billings && delete body.photoModified

    //  console.log(body)

     setBtnClick("Saving...")

     const res = await api("/bastion/api/users/updateMe","PATCH",body,token)
     console.log(res)
     if(res.status === "success") {
      dispatch(loginActions.setUpdatedUser(res.data.user))
     }

  } 
  


  return {
     changed,
     btnClick,
     DataRef: billings ? billingData : generalData,
     setBtnClick,
     setChanged,
     updateGeneral
  }
}
