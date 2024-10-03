import Card from '../Utilities/Card'
import hero from "../../assets/headerImg/hero.jpg"
import { NavLink, useNavigate } from 'react-router-dom';
import {ProductCardRating} from '../Utilities/Rating';
import useMutateCart from '../../Hooks/mutate-cart';
import { useSelector } from 'react-redux';



export const ProdCard = (props) =>{
  const navigate = useNavigate();

  const {cartTouched,onCartBtnClick} = useMutateCart(props.id)
  const user = useSelector(state => state.login.user)

  const cartJsx = <div onClick={onCartBtnClick} className='bg-white absolute -bottom-2 -right-2 p-3 rounded-full '>
                       <div  className={`p-2 ${cartTouched ? "bg-red-600" : "bg-gray-950" }  rounded-full hover:cursor-pointer hover:scale-125 transition-all `}>
                         <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                       </div>
                   </div>

  const editjsx = <NavLink to={`/dashboard/create/${props.id}`} className='bg-white absolute -bottom-2 -right-2 p-3 rounded-full w-1/4'>
                      <div className='rounded-full hover:cursor-pointer bg-red-600 hover:scale-125 transition-all '>
                        <svg className='w-21 h-21 p-2 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>
                  </NavLink>

  return (
      <Card className = {`flex flex-col gap-2 h-98 bg-red-90 rounded-lg text-black  ${props.className}`}>

        <figure className="relative w-72 h-3/4 rounded-lg overflow-hidde ">
           <img src={props.coverImage || hero} onClick={()=> navigate(`/product/${props.id}`)} className='w-full h-full rounded-lg hover:cursor-pointer hover:brightness-90' alt="" />
      
           {!props.ranking && props.seller !== user.id ? cartJsx : editjsx }
        </figure>


        {!props.ranking && <section className='flex flex-col h-1/4 px-2 gap-4 rounded-lg'>
          <div className='flex flex-col gap-1'>
             <ProductCardRating rating={props.rating || "0"} numReviews={props.ratingQuantity || "0"}/>
             <p onClick={()=> navigate(`/product/${props.id}`)} className='text-sm font-semibold hover:cursor-pointer hover:text-gray-400'>{props.name || "Men AIR MAX SOLO Sneakers"}</p>
          </div>

          <span className='font-semibold text-sm text-yellow-5 px-2 rounded-full w-fit bg-yellow-200'>{props.price ? `$${props.price}` : "$444"}</span>
        </section>}



      </Card>
  )
}

