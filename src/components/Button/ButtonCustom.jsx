// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const ButtonCustom = ({content, onClick}) => {
  return (
   <button className='py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-500 w-full'
   onClick={onClick}
   >
    {content}
   </button>
  )
}

export default ButtonCustom