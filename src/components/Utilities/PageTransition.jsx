import gsap from 'gsap/all'

export default function PageTransition(element) {
   gsap.fromTo(element,{x:50},{x:0,y:0,ease:"power3",duration:0.5})
}
