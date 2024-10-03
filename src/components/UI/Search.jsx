import { gsap } from "gsap";Card
import Card from '../Utilities/Card';
import searchLogo from "../../assets/navlogos/search.svg";;
import cross from "../../assets/navlogos/cross.svg";;
import { useState, useEffect,useRef } from "react";



const Search = (props) => {

   const [clicked, setClicked] = useState(false);
   const input = useRef(null);
   const label = useRef(null);

   const clickHandler = (e) => {

      setClicked(!clicked);
   }

   console.log(`- 59px`)


   useEffect(() => {
      gsap.to(input.current,{ease:"sine.out",translateX:label.current.offsetWidth+4,height:label.current.offsetHeight});
      if(clicked===true) gsap.to(label.current,{scale:0.7})
      if(clicked===false) gsap.to(label.current,{scale:1})

   }, [clicked]);

  
   return (
     <Card className={`flex gap-1  ${props.className} text-black `}>
         {clicked &&<input ref={input} placeholder="search..." className="rounded-xl bg-gray-50 border-2 w-48  border-gray-800 outline-none pl-1 " id="search" type="search"/>}
         <label ref={label} onClick={clickHandler} htmlFor="search" className="rounded-full inline-block p-2  bg-red-600 hover:cursor-pointer hover:bg-gray-900  z-10">
            <img  src={clicked===true ? cross:searchLogo} onClick={clickHandler} alt="search" className="w-full"/>
         </label>
       
     </Card>
   )
}

export default Search;