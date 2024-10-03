import { useEffect,useRef, useState } from "react";
import Card from "../Utilities/Card"
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const HeroCarosal = (props) => {

   const imgText = useRef(null);
   const img = useRef(null);
   const [btnHover, setBtnhover] = useState(false);

   useEffect(()=>{
    
     if(props.fetched) {
       gsap.timeline()
       .fromTo(img.current,{y:"-100vh",opacity:0},{y:0,opacity:1,ease:"power2",duration:1})
       .fromTo(imgText.current, {x:"-100vw", opacity:0},{x:0,opacity:1,ease:"power2",duration:1});
      }

   },[props.fetched])

   return (
      <Card className={props.className + " sm:h-full xs:h-96 bg-red-90"}>
          <img ref={img}  className={`sm:h-full xs:h-96 w-full brightness-75 sm:rounded-2xl bg-red-900 `} src={props.src}  alt="hero" />
         
          <section ref={imgText} className="absolute flex flex-col gap-6 lg:top-2/4 md:top-26 sm:left-20 sm:top-1/5  xs:top-44  xs:left-10 w-3/6">
            <div className="flex flex-col gap-2 ">
              <h2 className="lg:text-7xl md:text-6xl xs:text-3xl font-bold tracking-wide text-white font-showcase ">Leap to comfort</h2>
              <p className="lg:text-lg mdLtext-md xs:text-sm font-normal tracking-wide text-gray-100 bg-40 w-96">Lightweight and packable — meet the unofficial road trip shoes.</p>
            </div>

            <NavLink to="/products/all" className={"bg-red-90 w-fit"}>
              
              <button onMouseEnter={()=>setBtnhover(true)} onMouseLeave={()=>setBtnhover(false)} className={`md:px-6 xs:px-2 md:py-4 xs:py-3  md:text-sm xs:text-xs font-semibold tracking-wider bg-black rounded-full justify-self-end hover:cursor-pointer hover:bg-black relative  overflow-hidden`}>
                  <p className={`h-10 w-10 bg-white absolute z-10 -bottom-5 -left-3 rounded-full  ${btnHover && " h-40  w-60 "} transition-all`}></p>
                  <p className={`${btnHover && "z-20 text-black relative scale-110  "}`}>SHOP NOW</p>
              </button>
            </NavLink>
          </section>
   
      </Card>
   )
};

export default HeroCarosal;