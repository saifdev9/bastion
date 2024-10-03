import {useRef,useEffect,useState} from "react";;
import { gsap } from "gsap/all";

const Icons = (props) => {

   const [clicked,setClicked] = useState(false);
   const iconRef = useRef(null);

   const clickHandler = (e) =>{
     setClicked(prevState => !prevState);
   }


   useEffect(()=>{
       if(clicked && props.animate) {
          gsap.to(iconRef.current,{borderRadius:9999, ease:"circ"})
       }

       if(!clicked && props.animate) {
         gsap.to(iconRef.current,{borderRadius: 3,ease:"circ"})
       }


   },[clicked])



   return (
      <div  ref={iconRef} onClick={clickHandler} className={`${props.className}`}>
         <img  src={clicked===true && props.animate===true ? props.filledSrc : props.src} onClick={() => setClicked(!state)} className={props.imgClasses + " " + `hover:cursor-pointer `} alt={props.alt || "logo"} />
      </div>
   )
};

export default Icons