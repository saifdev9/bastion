import { NavLink } from "react-router-dom"
import hero from "../../assets/headerImg/hero.jpg"
import { useDispatch, useSelector } from "react-redux"
import {cartActions} from "../../Store/CartSlice"
import { useRef,useState } from "react"
import loadingUi from "../../assets/navlogos/loading2.gif"




export const SmallItems = (props) => {
   const itemRef = useRef(null);
   const dispatch = useDispatch();
   const [hover , setHover] = useState(false)
   // console.log(itemRef)

   return (
      <div ref={itemRef}  className={`flex p-2 border-gray-300 gap-4 border-b-2 border-dashed  ${props.className}`}>
            <NavLink onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => dispatch(cartActions.touchHandler())} to={`/product/${props.id}`} className={`h-12 w-12 rounded-md ${hover && " h-16 w-16 "} transition-all`}>
               <img src={props.src || hero} className="w-full  h-full rounded-md" alt={props.alt || "pic"} />
            </NavLink>

            <div className="flex flex-col bg-red-90 py-1 justify-between">
               <NavLink onClick={() => dispatch(cartActions.touchHandler())} to={`/product/${props.id}`} className="text-sm hover:text-gray-400">{props.name || "Men Air MAX SOLO Sneakers"}</NavLink>
               <div className='flex gap-2'>
                  <p className=" text-xs px-1 text-black font-semibold bg-yellow-200 w-fit rounded-lg">{`$${props.price}` || "$500"}</p>
                  {/* <span className=' text-xs px-1 text-black font-medium'>{props.quantity || "x60"}</span> */}
                  {/* <p className="text-xs px-1 ml-3 text-black font-semibold  w-fit rounded-lg hover:underline cursor-pointer hover:text-red-500">clear</p> */}
               </div>
            </div>
      </div>
   )
}


export const NumCartItems = () => {

   const divRef = useRef(null)
   const dispatch = useDispatch(); 
   const detailedCart =  useSelector(state => state.cart.detailedUpdatedCart)
   // const [loading,setLoading] = useState(true)


   return (
       <div onClick={(e)=> e.stopPropagation()}  ref={divRef} className={`absolute flex flex-col gap-3 border-2 border-gray-100 bg-white  -bottom-30 right-8 p-2 rounded-md translate-y-1/2 w-97 h-fit origin-top `}> 

         {detailedCart.length === 0 && <img src={loadingUi} className="h-8 w-8 self-center"/> }

         {detailedCart.map((el,i) => {
            
            // setLoading(false)

            if(i<=5) {
               return (
                  <SmallItems key={i+1} src={el.coverImage} name={el.name} price={el.price} id={el.id} />
               )
            }
         })}

         {detailedCart.length !== 0 && <NavLink onClick={()=> dispatch(cartActions.touchHandler())} to="/dashboard/cart" className={`w-full h-10 flex items-center justify-center text-white rounded-md bg-black font-medium focus:bg-gray-900 `}>
            <span>Go to cart</span>
         </NavLink>}

      </div>
   )
}