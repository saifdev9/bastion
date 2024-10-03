import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import itemPresent from '../components/Utilities/CheckCartItemPresence'
import { loginActions } from '../Store/LoginSlice'
import { updateCart } from '../Store/CartSlice'




export default function  useMutateCart(item) {
  const logged = useSelector(state => state.login.loggedIn)
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  const [cartTouched,setCartTouched] = useState(false)

  useEffect(()=>{
    if(logged) {
       setCartTouched(itemPresent(item,cart))
      } 

  },[logged])


  const onCartBtnClick = () => {
    dispatch(loginActions.showLogin(logged ? false : true))

    if(logged) {

        if (cartTouched) {
            dispatch(updateCart(item,"delete"))
            setCartTouched(false);
        } else {
            dispatch(updateCart(item,"add"))
            setCartTouched(true);
        }        
    }

  }

  return {
   cartTouched,
   onCartBtnClick
  }
}
