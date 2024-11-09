/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Checkbox } from 'antd';

const PopoverFilterWorkSpace = ({ onChange }) => {
    return (
        <div className='min-w-[280px] p-[8px]' onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col py-[12px] mx-3 space-y-2'>
                <h1 className='mb-[8px]'>Filter by</h1>
                <Checkbox onChange={onChange}>Main</Checkbox>
                <Checkbox onChange={onChange}>Private</Checkbox>
                <Checkbox onChange={onChange}>Shareable</Checkbox>
            </div>
            <div className='flex flex-col py-[12px] mx-3 border border-x-0 space-y-2'>
                <Checkbox onChange={onChange}>Subscribed or owner</Checkbox>
                <Checkbox onChange={onChange}>Owner only</Checkbox>
            </div>
            <div className='flex flex-col py-[12px] mx-3'>
                <Checkbox onChange={onChange}>Dashboards only</Checkbox>
            </div>
        </div>
    );
};

export default PopoverFilterWorkSpace;