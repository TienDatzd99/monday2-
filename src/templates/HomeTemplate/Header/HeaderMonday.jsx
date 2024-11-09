import React from 'react'
import IconHeader from '../../../components/Icon/IconHeader'
import IconBrand from '../../../components/Icon/IconBrand'
import RingIcon from '../../../components/Icon/RingIcon'
import UdateIcon from '../../../components/Icon/UdateIcon'
import InviteIcon from '../../../components/Icon/InviteIcon'
import MarketplaceIcon from '../../../components/Icon/MarketplaceIcon'
import SearchIcon from '../../../components/Icon/SearchIcon'
import HelpIcon from '../../../components/Icon/HelpIcon'
import { useSelector } from 'react-redux'
import { Avatar, Button, Popover, Tooltip } from 'antd';
import PopoverProfile from '../../../components/Popover/PopoverProfile'



const getInitials = (name) => {
    const nameArray = name.split(' ');
    const initials = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
    return initials;
};

const HeaderMonday = () => {
    const { fullname } = useSelector(state => state.quanLyNguoiDung)

    const userInitial = getInitials(fullname);

    return (
        <div className='flex justify-between px-6 ' style={{ maxHeight: "48px" }}>
            <div className='HeaderLeft_Content flex items-center space-x-3'>
                <div className='Header_Logo'>
                    <IconHeader />
                </div>
                <div className='Logo_Brand'>
                    <IconBrand />
                </div>
                <h1>
                    <span>Monday</span>
                    <span>work management</span>
                </h1>
            </div>
            <div className='HeaderRight_Content flex'>
                <div className='flex space-x-6 items-center'>
                    <button className="icon-button">
                        <RingIcon />
                    </button>
                    <button className="icon-button">
                        <UdateIcon />
                    </button>
                    <button className="icon-button">
                        <InviteIcon />
                    </button>
                    <button style={{ borderRight: "1px solid #d8dbe9", height: "24px" }}>

                        <MarketplaceIcon />

                    </button>
                    <button className="icon-button">
                        <SearchIcon />
                    </button>
                    <button className="icon-button">
                        <HelpIcon />
                    </button>
                    <button className="account-logo-wrapper">
                        <img style={{ width: 24, height: 24 }} className="account-logo" src="https://cdn.monday.com/images/logos/monday_logo_icon.png" /></button>

                    <Popover
                        content={<PopoverProfile />}
                        title=""
                        trigger="click"
                    
                        width={"100%"}
                    >
                        <button className="account-logo-wrapper">
                            <div className="account-logo" style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                {userInitial}
                            </div>
                        </button>
                    </Popover>
                </div>
            </div>
        </div>
    );
};


export default HeaderMonday