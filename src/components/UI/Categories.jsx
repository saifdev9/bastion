import { useRef,useEffect } from "react";
import CategoriesCard from "./CategoriesCard";
import { gsap } from "gsap";




const Categories = (props) => {

  const collectionRef = useRef(null);


   useEffect(()=>{
      gsap.fromTo(collectionRef.current,{scale:0, opacity:0,x:"1000vh"},{
         scale:1, 
         x:0,
         ease:"power3",
         duration:1,
         opacity:1,
         scrollTrigger:{
            trigger:collectionRef.current,
            // markers:true,
            start:"top 90%",
            end:"bottom 65%",
         }
      })
   },[])


  return (
    <main className="text-black text-2xl flex flex-col gap-4">
       <div ref={collectionRef} className="font-medium"><p className="hover:tracking-widest hover:line-through ">CATEGORIES</p></div>

       <section className="grid grid-cols-3 gap-2 justify-around">
         <CategoriesCard category="MEN"/>
         <CategoriesCard category="WOMEN"/>
         <CategoriesCard category="KIDS"/>
       </section>
    </main>
  )
}

export default Categories