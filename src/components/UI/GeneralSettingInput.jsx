import {  forwardRef } from "react"



const GenericInput = ({inputType,data:inputData,placeholder,label,maxLen,className,name,setChanged},ref) => {
  
  const data  = String(inputData)

  const onChangeHandler = (e) => {

      if(data.toString().trim() !== e.target.value.toString().trim()) {
        ref.current[name] = e.target.value
        setChanged(true)
      } 

      if(data.toString().trim() === e.target.value.toString().trim() && ref.current["photoModified"] === false) {         
        setChanged(false)
      }
  };


   let genderInput = <select  defaultValue={data}  onChange={onChangeHandler} className='h-10  text-lg rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 focus:border-black border-gray-300 px-4 outline-none'>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>



 


  return (
    <div className={`text-black  ${className || "w-full"}`}>
         <label className='flex flex-col gap-3'>
           <div className='text-lg tracking-wide text-gray-800 font-semibold flex flex-col '>
              <p>{label}</p>
            </div>
           {label.trim().toLowerCase() === "gender" ? genderInput : <input  defaultValue={data} onChange={onChangeHandler}  type={inputType} maxLength={maxLen || 10} className={`h-10 rounded-md bg-gray-50 shadow-sm shadow-gray-300 border-2 border-gray-300 focus:border-black  px-4 outline-none`} placeholder={placeholder} />}
          </label>
     </div>
  )
}


export default forwardRef(GenericInput)