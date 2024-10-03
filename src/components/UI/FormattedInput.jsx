import { useState } from 'react';
import SpaceFormatting from '../Utilities/SpaceFormatting';


function FormattedInput({data,className,maxLen,minLen}) {
   const [formattedValue, setFormattedValue] = useState( SpaceFormatting(String(data)) || '');

  const onChangeHandler = (e) => {
    const inputValue = e.target.value.replace(/\s/g, ''); // Remove existing whitespaces
    const formattedInput = SpaceFormatting(inputValue)

      setFormattedValue(formattedInput);
   }

   return (
      <input onChange={onChangeHandler}  value={formattedValue} type={"text"} maxLength={maxLen} minLength={minLen} className={`bg-gray-50 text-lg font-medium shadow-md border-2 border-gray-300 hover:border-gray-800 rounded-md px-2 outline-none h-10 w-full `}  />
   )
}


export default FormattedInput