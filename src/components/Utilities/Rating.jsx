import star from "../../assets/navlogos/star.svg"
import halfstar from "../../assets/navlogos/halfstar.svg"


export const Rating = ({rating,className}) => {
   const intPart = Math.floor(rating);
   const  decimalpart = rating - intPart; 
   let arr = [];

   for(let i = 0 ; i<intPart ; i++) {
    
      arr[i] = <img src={star} key={i+1} alt="star" /> 
       
   }
   
   

   return (
      <section className="flex gap-4">

         <figure className={`flex  ${className}`} >
            {...arr}
            {decimalpart === 0 ?  "":<img src={halfstar} alt="half-star" />}
         </figure>

      </section>
   )
};


export const ProductCardRating = (props) => {
   return (
      <section className="flex gap-2 items-center">
         <div className="flex gap-1">
            <img src={star}  alt="star"/>
            <span className={`text-gray-400 text-sm ${props.className}`}>{props.rating}</span>
         </div>

        {props.numReviews &&  <span className="text-gray-400 text-xs font-secondary ">{`(${props.numReviews})`}</span>}

      </section>
   )
};

 