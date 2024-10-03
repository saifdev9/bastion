import { useRef,useState,useEffect } from "react"
import hero2 from "../../assets/headerImg/hero2.jpg"
import { gsap } from "gsap";


function CategoriesCard(props) {

  const [hovered, setHovered] =  useState(false);
  const figureRef = useRef(null);


  useEffect(()=>{
    
    if(hovered)  gsap.to(figureRef.current,{width:"50vw",height:"50vh",ease:"bounce"});

    if(hovered===false) gsap.to(figureRef.current,{width:"",height:""});

  
  },[hovered]);

  return (
    <figure onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className="hover:brightness-90 relative rounded-md">
            {hovered && <h1 className="absolute py-2 hover:cursor-pointer hover:bg-black  w-full text-center bg-red-500  top-1/3 right-1/2 translate-y-1/2 translate-x-1/2 brightness-100 text-6xl text-white">{props.category}</h1> }
            <img ref={figureRef} className="w-full rounded-md" src={hero2} alt={props.category} />
    </figure>
  )
}

export default CategoriesCard