import { Outlet } from 'react-router-dom';
import {  Nav} from '../components/UI/Navigations';;

import {cartActions} from '../Store/CartSlice';
import {notifyActions} from '../Store/NotifySlice';

import { useSelector , useDispatch} from 'react-redux';
import {Login} from '../components/UI/AuthModal';

import { ScrollRestoration } from "react-router-dom";
import HomeLoading from '../components/UI/HomeLoading';
import { createPortal } from 'react-dom';







const PageLayout = (props) => {

   const cartShow = useSelector((state)=> state.cart.touched)
   const notifyShow = useSelector((state)=> state.notify.touched)
   const showLoginForm =  useSelector(state => state.login.showForm)
   const cart =  useSelector(state => state.cart.cart)
   const user =  useSelector(state => state.login.user)
   const fetched =  useSelector(state => state.home.fetched)

   const dispatch = useDispatch();
   
   const onClickHandler = (e) => {
      dispatch(cartActions.touchHandler(false))
      dispatch(notifyActions.touchHandler(false))

   }
  
   return (
         
      
         <div onClick={(e) => onClickHandler(e)}  className="flex flex-col gap-8 pt-2 sm:px-4 relative z-0 overflow-hidden">

            <ScrollRestoration/>

            {!fetched && createPortal(<HomeLoading/>,document.getElementById("preloader"))}

           
            <header  className='z-20'>
               <Nav links={["all","men", "women" , "kids" ]}  cart={cart}/>
            </header>

            {showLoginForm && <Login className={""}/>}

            <div className={'z-10'}>
               <Outlet/>
            </div>
            
            
         </div>
      
   )
};




export default PageLayout;