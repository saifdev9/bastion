import React from 'react'

function RevenueCard(props) {  
    const num = props.number ;
    let formattedNum = 0;

    const options = {                
                style: "currency",  
                useGrouping: true,  
                currency: "USD"
    };

    const locale = navigator.language
    formattedNum = new Intl.NumberFormat(locale,  options).format(num);

  return (
    <section className={`flex flex-col px-4  justify-around border-gray-400 ${props.className}`}>

             <header className='flex gap-1 items-center'>
                 <figure className={` bg-gray-900 rounded-full p-1 ${props.figureClass}`}>
                     <img src={props.src} alt={props.heading} />
                 </figure>
                 <p className='font-sans font-medium'>{props.heading}</p>
             </header>

             <main className="flex flex-col gap-3">
                <p className='font-sans text-2xl font-semibold'>{props.heading.toLowerCase().includes("sales") ? formattedNum : props.number}</p>
             </main>
     </section>
  )
}

export default RevenueCard