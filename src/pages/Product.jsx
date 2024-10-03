import Card from '../components/Utilities/Card'
import ProductCarosal from '../components/UI/ProductCarosal'
import ProductDescription from './../components/UI/ProductDescription';
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import loadingUi from "../assets/navlogos/loading2.gif"
import CarousalShow from '../components/UI/CarousalShow';
import { useSelector } from 'react-redux';



const Product = () => {

const {id} = useParams()
const mostRated = useSelector(state => state.home.mostRated)

const { data:productData , isFetching } = useQuery({
  queryKey:["product",id],
  queryFn: async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bastion/api/products/${id}`)
    const resData = await response.json()
    return resData.data.product
  },
  staleTime:100000
})
  

return (
  <div className={`relative ${isFetching && " h-screen"}`}>
    {isFetching && <img className='h-16 w-16 absolute top-1/3 right-1/2 translate-x-1/2' src={loadingUi}/> }
    {productData && !isFetching && 
      <Card className="flex flex-col gap-32 mb-8">
            <Card className="flex gap-16  mt-32 mb-8 md:mx-16 xs:mx-3">
              <ProductCarosal className="w-1/2" images={[...productData.images]}/>
              <ProductDescription className="w-1/2 justify-self-center" data={productData}/>
            </Card>

            <CarousalShow heading={"You might like"} linkToMore={`/products/all`} arr={mostRated} />
          
      </Card>}
  </div>
)

}

export default Product