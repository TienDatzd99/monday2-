/* eslint-disable no-unused-vars */
import { Avatar, Popover } from 'antd'
import React from 'react'
import InputSearch from '../../../components/Input/InputSearch'
import { AppstoreOutlined, HomeFilled, PlusOutlined } from '@ant-design/icons'
import IconPlus from '../../../components/Icon/IconPlus'

const PopOverListWorkSpace = () => {
    const arrListWorkSpaces = [
        {
            name: 'WorkSpace 1',
            default: true,
            color: 'bg-blue-500'
        },
        {
            name: 'WorkSpace 2',
            default: false,
            color: 'bg-red-500'
        },
        {
            name: 'WorkSpace 3',
            default: false,
            color: 'bg-green-500'
        }
    ]
    return <div className='space-y-2 min-w-[280px]'>
        <div>
            <InputSearch />
        </div>
        <div>
            <button className='w-full text-left space-x-2 hover:bg-gray-200 p-2 rounded'>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <span>Favorites </span>
            </button>
        </div>
        <div>
            <p className='font-light text-content'>My WorkSpaces</p>
            {arrListWorkSpaces.map((item, index) => {
                return <button key={index} className=' flex  flex-1 space-x-2 items-center p-1 hover:bg-gray-200 rounded-md  mt-2'>

                    <div className='relative'>
                        <Avatar shape="square" size={20} className={`${item.color} ml-2`}>
                            M
                        </Avatar>
                        <span className="font-semibold absolute -bottom-1 -right-2">
                            <HomeFilled />

                        </span>

                    </div>
                    <div className='ml-3 leading-6 font-light'>
                        Main workspace
                    </div>
                </button>
            })}
        </div>
        <div className='flex justify-between py-1 border-t border-t-gray-300'>
            <button className='flex items-center hover:bg-gray-100 px-2'>
                <IconPlus />
                <span> Add WorkSpaces</span>
            </button>
            <button className='flex items-center hover:bg-gray-100 px-2'>
                <AppstoreOutlined/>
                Browse All
            </button>
        </div>
    </div>
}

export default PopOverListWorkSpace