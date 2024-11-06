// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line react/prop-types
const ButtonCustom = ({content,styleButton,className}) => {
  

  return (
   <button className={`py-3 px-5  text-white rounded-md
     hover:bg-blue-700 duration-500 w-full my-5 text-xl ${styleButton} ${className}`} style={{backgroundColor:"#0073ea"}}

   >
    {content}
   </button>
  )
}

export default ButtonCustom