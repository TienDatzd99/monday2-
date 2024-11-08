import { AppstoreOutlined, CalendarOutlined, EllipsisOutlined, HomeFilled, HomeOutlined, PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Popover } from 'antd';
import React, { useState } from 'react';
import PopOverListWorkSpace from './PopOverListWorkSpace';
import PopoverSettingWorkSpaces from '../../../components/Popover/PopoverSettingWorkSpaces';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [activeWorkSpace, setActiveWorkSpace] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const toggleActiveWorkSpace = () => {
        setActiveWorkSpace(!activeWorkSpace);
    };
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
            <div className='bg-white py-2  ' style={{ padding: 10 }} >

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div>
                        <AppstoreOutlined className='mr-3' />
                        Workspaces
                    </div>
                    <div className='ml-32'>
                        <Popover
                        overlayInnerStyle={{padding: '0'}}
                        arrow={false}
                            content={<PopoverSettingWorkSpaces />}
                            title=""
                            trigger="click"
                           
                
                        >

                            <EllipsisOutlined className='mr-3' />
                        </Popover>
                        <SearchOutlined />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Popover
                        content={<PopOverListWorkSpace />}
                        title=""
                        trigger="click"
                        
                        onOpenChange={handleOpenChange}
                        width={"100%"}
                    >
                        <button className=' flex justify-between flex-1 space-x-2 items-center p-1 hover:bg-gray-200 rounded-md border mt-2' onClick={toggleActiveWorkSpace}>

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
                                <i className=' leading-6 fa-solid fa-angle-up'></i>
                            </div>



                        </button>
                    </Popover>
                    <button >
                        <PlusOutlined className='text-white p-2 bg-blue-600 rounded-md ml-2' />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SideBar;