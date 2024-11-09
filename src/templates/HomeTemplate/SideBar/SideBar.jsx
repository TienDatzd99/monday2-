/* eslint-disable no-unused-vars */
import { AppstoreOutlined, CalendarOutlined, EllipsisOutlined, HomeFilled, HomeOutlined, PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import PopOverListWorkSpace from './PopOverListWorkSpace';
import PopoverSettingWorkSpaces from '../../../components/Popover/PopoverSettingWorkSpaces';
import Pheu from '../../../components/Icon/pheu';
import PopoverFilterWorkSpace from '../../../components/Popover/PopoverFilterWorkSpace';
import PopoverAddItemWorkSpaces from '../../../components/Popover/PopoverAddItemWorkSpaces';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [activeWorkSpace, setActiveWorkSpace] = useState(false);
    const [activeInputSpace, setActiveInputSpace] = useState(true);
    const inputRef = useRef(null);
    const popoverRef = useRef(null);

    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const toggleActiveWorkSpace = () => {
        setActiveWorkSpace(!activeWorkSpace);
    };
    const toggleActiveInputSpace = () => {
        setActiveInputSpace(!activeInputSpace);
    };
    const handleClickOutside = (event) => {
        if (
            inputRef.current && !inputRef.current.contains(event.target) &&
            popoverRef.current && !popoverRef.current.contains(event.target)
        ) {
            setActiveInputSpace(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div>
                <div className="menu-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', cursor: 'pointer' }}>
                    <HomeOutlined className='mr-3' />
                    <span>Home</span>
                </div>
                <div className="menu-item" style={{ display: 'flex', alignItems: 'center', padding: '10px', cursor: 'pointer' }}>
                    <CalendarOutlined className='mr-3' />
                    <span>My work</span>
                </div>
                <div className="menu-item border border-r-0 px-5" style={{ display: 'flex', alignItems: 'center', width: "100%", borderRadius: "0px", padding: '10px', cursor: 'pointer' }}>
                    <StarOutlined className='mr-3' />
                    <span>Favorites</span>
                </div>
            </div>
            <div className='bg-white py-2' style={{ padding: 10 }}>
                {activeInputSpace ? (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div>
                            <AppstoreOutlined className='mr-3' />
                            Workspaces
                        </div>
                        <div className='ml-32'>
                            <Popover
                                overlayInnerStyle={{ padding: '0' }}
                                arrow={false}
                                content={<PopoverSettingWorkSpaces />}
                                title=""
                                trigger="click"
                            >
                                <EllipsisOutlined className='mr-3' />
                            </Popover>
                            <SearchOutlined onClick={toggleActiveInputSpace} />
                        </div>
                    </div>
                ) : (
                    <div ref={inputRef} className="px-1 py-1 border border-blue-500 rounded relative hover:border-black duration-500 flex items-center space-x-2">
                        <div className="flex items-center h-3/4 w-7 rounded cursor-pointer hover:bg-gray-200 pl-1.5">
                            <SearchOutlined onClick={toggleActiveInputSpace} />
                        </div>
                        <input
                            placeholder='Search in Main workspace'
                            className="focus:outline-none text-sm w-full"
                            type="text"
                        />
                        <Popover
                            overlayInnerStyle={{ padding: '0' }}
                            arrow={false}
                            content={<PopoverFilterWorkSpace />}
                            title=""
                            trigger="click"
                        >
                            <div ref={popoverRef} className="flex items-center h-3/4 w-7 rounded cursor-pointer hover:bg-gray-200 pl-1.5">
                                <Pheu className='mr-3' />
                            </div>
                        </Popover>

                    </div>
                )}
                <div className='flex justify-between items-center mt-2'>
                    <Popover
                        content={<PopOverListWorkSpace />}
                        title=""
                        trigger="click"
                        onOpenChange={handleOpenChange}
                        width={"100%"}
                    >
                        <button className='flex justify-between flex-1 space-x-2 items-center p-1 hover:bg-gray-200 rounded-md border ' onClick={toggleActiveWorkSpace}>
                            <div className='relative'>
                                <Avatar shape="square" size={20} className='bg-blue-800 ml-2'>
                                    M
                                </Avatar>
                                <span className="font-semibold absolute -bottom-1 -right-2">
                                    <HomeFilled />
                                </span>
                            </div>
                            <div className='ml-3 leading-6 font-semibold'>
                                Main workspace
                            </div>
                            <div className={activeWorkSpace ? 'rotate-180' : ''}>
                                <i className='leading-6 fa-solid fa-angle-up'></i>
                            </div>
                        </button>
                    </Popover>
                    <Popover
                    placement='rightTop'
                        overlayInnerStyle={{ padding: '0' }}
                        arrow={false}
                        content={<PopoverAddItemWorkSpaces />}
                        title=""
                        trigger="click"
                    >
                        <Tooltip placement="top" title={"Add item to workspace"} >
                            <button>
                                <PlusOutlined className='text-white p-2 bg-blue-600 rounded-md ml-2' />
                            </button>
                        </Tooltip>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default SideBar;