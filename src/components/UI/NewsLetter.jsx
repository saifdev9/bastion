import { ScrollTrigger,gsap } from "gsap/all";
import Card from "../Utilities/Card";
import { useRef,useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);



const NewsLetter = (props) => {
  
   const formRef = useRef(null);
   const sectionRef = useRef(null);



   useEffect(() => {
       gsap.timeline({defaults:{duration:0.5,ease:"power3",scrub:5}})
           .fromTo(sectionRef.current,{opacit:0,x:"-100vw"},{
               opacity:1,
               x:0,
               scrollTrigger:{
                  trigger:sectionRef.current,
                  // markers:true,
                  start:"top 80%",
                  end:"center 50%"
               }
           })
           .fromTo(formRef.current,{opacity:0,x:"100vw"},{
             x:0,
             opacity:1,
             scrollTrigger:{
                trigger:sectionRef.current,
               //  markers:true,
                start:"top 80%",
                end:"center 50%"
             }
           });
   });

   return (
      <Card className="flex flex-col gap-12 text-black items-center">
            <section ref={sectionRef} className="items-center flex flex-col gap-4">
               <h1 className='text-5xl'>Want First Dibs?</h1>
               <p className='text-xl'>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
            </section>
            <form ref={formRef} className="w-2/4 flex gap-5">
               <input  className='px-3 w-3/4 bg-white text-lg font-mono  outline-none hover:border-2 shadow-md shadow-gray-400 border-black h-12 rounded-md' type="email" placeholder='example@gmail.com'/>
               <button className='bg-red-600  text-lg hover:bg-black text-white w-24 h-12 rounded-md'>SIGN UP</button>
            </form>
      </Card>
   )
};


export default NewsLetter