import React from 'react'

function SpaceFormatting(value) {
   return value = value
      .replace(/\s/g, '') // Remove existing whitespaces
      .replace(/(\d{4})/g, '$1 '); // Add a whitespace after every 4 characters\
   

}

export default SpaceFormatting