import gsap from 'gsap/all'

function ScrollDownAnimation(element) {
  const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            gsap.to(element,{
               x:0,
               ease:"power4",
               opacity:1,
               duration:1.5
            })
         }  
   },{
      threshold: 0.2
   }) 

   observer.observe(element)
}

export default ScrollDownAnimation