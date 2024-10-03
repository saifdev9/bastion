import { useState } from "react";


const useImgHandler = (images) => {

   const [imgNum,setImgNum] = useState(0)
  
   const imgHandler = (forward=true) => {

     
      if(forward) {
         setImgNum(prev => prev + 1)
         if(imgNum === images.length-1) setImgNum(0)
      }
      
      if(!forward) {
         setImgNum(prev => prev - 1)
         if(imgNum === 0) setImgNum(images.length-1)
      }
    
  }

  return [imgNum, setImgNum , imgHandler]
};


export default useImgHandler