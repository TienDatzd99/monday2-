import React from 'react'
import InputReset from '../../components/Input/InputReset';

// eslint-disable-next-line react/prop-types
const LayoutCreateNameBoard = ({handleStep,handleChangeNameBoard,handleResetNameBoard,nameBoard}) => {
  return (
    <div className="text-title">
      {/* title */}
      <h1 className="text-2xl mb-5">Let&apos;s start working together</h1>
      <p className="text-sm mb-3">Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap...</p>
      {/* input */}
      <InputReset handleChange={handleChangeNameBoard}
      handleClick={handleResetNameBoard}
      value={nameBoard}
       placeholder="My first board" />
    
      {/* description */}
      <div className="bg-slate-100 p-5 rounded-md text-[15px]">
        <p>In monday.com, &quot;boards&quot; are the place where all your content lives.</p>
      </div>
    </div>
  );
}

export default LayoutCreateNameBoard