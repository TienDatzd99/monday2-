// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
import InputDropdown from '../../components/Input/InputDropdown';
const InviteMember = () => {
    const [arrInputInvite, setArrInputInvite] = useState(["admin","admin"])
    const  Option = [
        {
            value: "admin",
            label:"Admin",
            desc: "Can invite & manage news user"
        },
        {
            value: "user",
            label: "User",
             desc: "Can add & edit content"
        }
    ]

    return (
        <div className='h-screen flex'>
            <div className='w-7/12  py-16 px-32'>
                <div className='flex flex-col w-3/4 h-full'>
                    <div className="content_logo ">
                        <img src="https://dapulse-res.cloudinary.com/image/upload/platform-products-signup/generic/logo-full-big.png" className='mb-16' alt="monday.com logo" style={{ height: "24px" }} />
                    </div>
                    <div className="content_field flex-1">
                        <h1 className='mb-10 font-semibold'>Who else is on your team?</h1>
                        {arrInputInvite.map((item, index)=>{
                            return(
                                <InputDropdown 
                                options={Option}
                                placeholder = "Add email here"
                                defaultValue={item}
                                key={index}
                                />
                            )
                        })}
                        <button className='py-2 px-4 hover:bg-gray-200 rounded-md'
                        onClick={()=>{
                            const newArrInput = [...arrInputInvite,"admin"]
                            setArrInputInvite(newArrInput)
                        }}
                        
                        >Add another</button>
                  

                    </div>
                    <div className="content_action flex justify-between">
                        <button>Remind me later</button>
                        <button>Invite your Team</button>
                    </div>
                </div>
            </div>
            <div className='w-5/12'>
                <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="Set up your account" />
            </div>
        </div>
    )
}

export default InviteMember