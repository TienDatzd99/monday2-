import React from 'react';

const InputReset = ({ placeholder, handleChange, handleClick, value }) => {
    return (
        <div className="px-5 py-2 border border-gray-300 rounded relative hover:border-black duration-500 mb-10">
            <input
                className="focus:outline-none text-sm w-full"
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
            <button onClick={handleClick}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-3/4 w-7 rounded hover:bg-slate-200">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
};

export default InputReset;
