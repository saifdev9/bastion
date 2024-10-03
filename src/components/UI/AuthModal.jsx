import { createPortal } from "react-dom";
import LoginForm from "../Form/LoginForm";
import { useDispatch } from "react-redux";
import { loginActions } from "../../Store/LoginSlice";




export function Backdrop({onClick,className}) {
  return (
    <div onClick={onClick} className={`w-full h-full ${className}`}></div>
  )
}


export function Login({className}) {

  const dispatch = useDispatch()
  
  return (
   <div className="relative">
     {createPortal(<Backdrop className={"bg-transparent backdrop-blur-lg grayscale- fixed z-30"} onClick={()=> {dispatch(loginActions.showLogin(false))}} />,document.getElementById("backdrop"))}
     {createPortal(<LoginForm className={`bg-white scale-105 flex bg-red-90 w-97 bg-login p-10 fixed top-1/4  left-1/2 -translate-x-1/2    z-40  shadow-2xl  border-2 border-rose-200 shadow-rose-400 rounded-md ${className}`}/>,document.getElementById("overlay"))}
     
   </div>
  )
}

