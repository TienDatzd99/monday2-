import React, { useState } from 'react'

const InputSearch = () => {
  const [value, setValue] = useState('')
  const handeleResetValue = () => {
    setValue('')
  }
  return (
    <div className="px-1 py-1 border border-blue-500 rounded relative hover:border-black duration-500 ">
      <input
        className="focus:outline-none text-sm w-full"
        type="text"
        // placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={handeleResetValue}
        className="absolute right-1 top-1/2 -translate-y-1/2 h-3/4 w-7 rounded hover:bg-slate-200">
        {value ? <i className="fa-solid fa-xmark" onClick={handeleResetValue}></i> : <i className="fa-solid fa-magnifying-glass"></i>}

      </button>
    </div>
  )
}

export default InputSearch