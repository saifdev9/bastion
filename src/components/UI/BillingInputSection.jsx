function BillingInputSection({label,className,children}) {
  return (
     <div className={`flex gap-4 bg-red-90   border-b-2 border-gray-300 py-10 ${className}`}>

          <p className='text-Legend font-semibold w-2/6 text-gray-600'>{label}</p>

          <form className='w-4/6 flex flex-col gap-6 bg-blue-80'>{children}</form>

      </div>
  )
}

export default BillingInputSection