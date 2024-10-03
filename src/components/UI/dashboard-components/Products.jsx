import React, { useEffect, useRef, useState } from 'react'
import Card from '../../Utilities/Card'
import {ProdCard} from '../ProductCard'
import useGetSellerProducts from '../../../Hooks/get-seller-products'
import loadingUi from "../../../assets/navlogos/loading2.gif"
import Dropdown from '../Dropdown'
import Reverse from '../Reverse'
import PageTransition from '../../Utilities/PageTransition';






function Products(props) {

    const [hover, setHover] = useState(false)
    const [touched, setTouched] = useState(false)
    const {products,loading,setFilter,setSearch,setIsAscend} = useGetSellerProducts()

    

   const parentRef = useRef(null)

   useEffect(()=> {
    if(parentRef.current !== null) PageTransition(parentRef.current)
   },[parentRef])

  return (
      
        
       <main ref={parentRef}  className={`flex gap-10 ${props.className} overflow-x-hidden`}>
      
           <Card className={`flex flex-col  gap-5 w-full pr-8 relative bg-red-90 `}>

                  

                <div className='flex flex-col gap-4 mb-20  py-6'>
                        <h1 className='md:text-3xl xs:text-xl font-semibold text-black'>Products 📦</h1>
                        <p className='font-medium md:text-sm xs:text-xs text-gray-500 w-5/6'>Welcome to the Products Page, your dedicated platform for managing and showcasing your range of offerings. This page is designed to empower you as a seller by providing you with a comprehensive toolkit to present your products effectively, track their performance, and engage with potential buyers. </p>
                </div>


                <section className='flex flex-col gap-16  text-black my-5'>

                        <section className='flex gap-4 bg-red- justify-center w-full'>
                           
                             
                             <div className='flex items-center md:w-3/6 xs:w-2/6 gap-5  bg-gray-50 rounded-xl  border-2 px-2 py-2'>
                                <svg width="19"  height="19" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78504 11.3216C5.5186 4.75767 11.9234 0.474582 19.0337 0.45559C26.6969 0.415236 33.5109 5.32378 35.8997 12.6053C38.2884 19.8868 35.7064 27.8778 29.5085 32.3847C23.3106 36.8917 14.9127 36.885 8.72207 32.3681L3.20207 37.8881C2.64083 38.4486 1.73164 38.4486 1.1704 37.8881C0.609866 37.3269 0.609866 36.4177 1.1704 35.8564L6.5179 30.5089C1.52288 25.4486 0.0514825 17.8854 2.78504 11.3216ZM5.34791 23.7794C7.64307 29.3103 13.0456 32.9125 19.0337 32.9048V32.8281C27.161 32.8177 33.7586 26.2543 33.8112 18.1273C33.819 12.1391 30.2167 6.73659 24.6859 4.44143C19.155 2.14628 12.786 3.411 8.55176 7.64528C4.31748 11.8796 3.05275 18.2485 5.34791 23.7794Z" fill="red"/>
                                </svg>

                                <input  onChange={(e) => setSearch(e.target.value.toLowerCase())} type="search" placeholder="search..." className=' w-11/12 font-medium bg-transparent outline-none text-black' />
                             </div>

                             <div className='flex gap-4'>
                                 <Dropdown list={["rating","name","sold","price"]}  heading={"rating"} setFilter={setFilter} />
                                 <Reverse setIsAscend={setIsAscend}/>
                             </div>

                        </section>


                        <section className={`flex flex-wrap xs:justify-center md:justify-around  gap-6 bg-red-90 w-full min-h-screen bg-red-90 relative`}>

                                    {loading && <img className='h-14 w-14 absolute top-1/4 right-1/2 translate-x-1/2' src={loadingUi}/>}

                                    {products == false && !loading &&
                                        <div className='flex flex-col items-center gap-5 justify-center bg-red-90 h-fit w-full mt-10'>
                                            <figure className=' w-20 h-20'>
                                                <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 20C18.5 20.275 18.276 20.5 18 20.5H12.2678C11.9806 21.051 11.6168 21.5557 11.1904 22H18C19.104 22 20 21.104 20 20V9.828C20 9.298 19.789 8.789 19.414 8.414L13.585 2.586C13.57 2.57105 13.5531 2.55808 13.5363 2.5452C13.5238 2.53567 13.5115 2.5262 13.5 2.516C13.429 2.452 13.359 2.389 13.281 2.336C13.2557 2.31894 13.2281 2.30548 13.2005 2.29207C13.1845 2.28426 13.1685 2.27647 13.153 2.268C13.1363 2.25859 13.1197 2.24897 13.103 2.23933C13.0488 2.20797 12.9944 2.17648 12.937 2.152C12.74 2.07 12.528 2.029 12.313 2.014C12.2933 2.01274 12.2738 2.01008 12.2542 2.00741C12.2271 2.00371 12.1999 2 12.172 2H6C4.896 2 4 2.896 4 4V11.4982C4.47417 11.3004 4.97679 11.1572 5.5 11.0764V4C5.5 3.725 5.724 3.5 6 3.5H12V8C12 9.104 12.896 10 14 10H18.5V20ZM13.5 4.621L17.378 8.5H14C13.724 8.5 13.5 8.275 13.5 8V4.621Z" fill="#212121"></path> <path d="M12 17.5C12 20.5376 9.53757 23 6.5 23C3.46243 23 1 20.5376 1 17.5C1 14.4624 3.46243 12 6.5 12C9.53757 12 12 14.4624 12 17.5ZM6.5 14C6.22386 14 6 14.2239 6 14.5V18.5C6 18.7761 6.22386 19 6.5 19C6.77614 19 7 18.7761 7 18.5V14.5C7 14.2239 6.77614 14 6.5 14ZM6.5 21.125C6.84518 21.125 7.125 20.8452 7.125 20.5C7.125 20.1548 6.84518 19.875 6.5 19.875C6.15482 19.875 5.875 20.1548 5.875 20.5C5.875 20.8452 6.15482 21.125 6.5 21.125Z" fill="#212121"></path> </g></svg>
                                            </figure> 

                                            <p className='text-gray-500 font-semibold text-sm '>No Products Found</p> 
                                        </div>
                                    }

                                    {!loading && products.map((el,i)=> {
                                          return <ProdCard className="shadow-sm  p-1 " seller={el.seller.id} id={el._id} coverImage={el.coverImage} key={i+1} rating={el.rating} price={el.price} ratingQuantity={el.ratingQuantity} name={el.name}/>
                                    })}

                        </section>

                 </section>

           </Card>
        </main>
     
  )
}

export default Products