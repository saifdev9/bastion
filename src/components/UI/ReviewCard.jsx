import Card from "../Utilities/Card";
import hero2 from "../../assets/headerImg/hero2.jpg"
import { Rating } from "../Utilities/Rating";



const ReviewCard = ({className,review}) =>  {

  return (
    <Card className={`flex p-2 gap-4   text-black rounded-sm transition-all ${className}`}> 

        <section>
            <figure className="md:w-8 md:h-8 xs:w-6 xs:h-6 rounded-full overflow-hidden">
              <img  className="w-full h-full" src={review.user.photo} alt="user" />
            </figure>
        </section>

        <main className="font-bold leading-tight  text-md  flex flex-col gap-3">

          <section className="flex">
            <span className="font-normal text-xs xs:hidden sm:inline-block  text-gray-500">{review.user.username}</span>
            

            <div className="flex scale-75">
               <Rating rating={review.rating}/>
            </div>
          </section>

          <p className="font-secondary font-normal sm:text-sm xs:text-xs ">{ review.review}</p>
        </main>
    </Card>
  )
}

export default ReviewCard 